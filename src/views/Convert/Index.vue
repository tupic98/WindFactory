<template>
   <div>
    <div class="p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Conversión de red Windmil a PowerFactory
      </h3>
      <div class="mt-3 sm:mt-0 sm:ml-4">
        <button type="button" :disabled="!fileName" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" :class="[!fileName ? 'bg-gray-600 cursor-not-allowed pointer-events-none' : 'bg-indigo-600 hover:bg-indigo-700 cursor-pointer pointer-events-auto']" @click.prevent="convertSTD()">
          Importar
        </button>
      </div>
    </div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="p-6">
      <ul class="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
  <li v-if="!completed" class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
    <div class="w-full flex items-center justify-between p-6 space-x-6">
      <div class="flex-1">
        <div class="flex items-center space-x-3 truncate">
          <h3 class="text-gray-900 font-medium text-4xl truncate">STD</h3>
          <div v-if="fileName" class="file-name-wrapper flex flex-shrink-0 px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
            <span class="file-name"> {{ fileName.split('.')[0] }}</span>
            <span >.{{ fileName.split('.')[1] }}.{{ fileName.split('.')[2] }}</span>
          </div>
        </div>
        <div class="text-gray-800 text-sm mt-3 text-justify">Sube aquí el archivo STD exportado por Windmil. El nombre del archivo puede ser cualquiera mientras la extensión de este sea estrictamente <span class="italic">.std.csv</span>. Por ejemplo: <span class="italic font-bold">red_windmil.std.csv</span>. Una vez subido, se te habilitará el botón de importar en la esquina superior derecha.</div>
      </div>
    </div>
    <div>
      <div class="-mt-px flex divide-x divide-gray-200">
        <div class="w-0 flex-1 flex">
          <div class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 cursor-pointer" @click.prevent="openFileExplorer">
            <span class="ml-3">Subir</span>
          </div>
          <input class="hidden" type="file" id="filestd" ref="filestd" accept=".csv" @change="fileValidation()">
        </div>
        </div>
    </div>
  </li>
    <li v-if="completed && downloadUrl" class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
    <div class="w-full flex items-center justify-between p-6 space-x-6">
      <div class="flex-1">
        <div class="flex items-center space-x-3 truncate">
          <h3 class="text-gray-900 font-medium text-2xl truncate">WIND_FACTORY.xlsx</h3>
          <div class="file-name-wrapper flex flex-shrink-0 px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
            Listo para descargar
          </div>
        </div>
        <div class="text-gray-800 text-sm mt-3 text-justify">La red de Windmil ha sido convertida satisfactoriamente a PowerFactory. En el botón de abajo podrás descargar el archivo excel de la red lista para ser importada en PowerFactory.</div>
      </div>
    </div>
    <div>
      <div class="-mt-px flex divide-x divide-gray-200">
        <div class="w-0 flex-1 flex">
          <a :href="downloadUrl" class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-green-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 cursor-pointer" download="WIND_FACTORY.xlsx">
            <span class="ml-3">Descargar</span>
          </a>
        </div>
        </div>
    </div>
  </li>
</ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';
import axios from 'axios';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tempfile from '../../assets/files/WIND_FACTORY.xlsx';

@Options({})
export default class ConvertView extends Vue {
  tempFile: any = tempfile;

  fileName: string | undefined = '';

  isLoading!: any;

  completed = false;

  downloadUrl!: any;

  openFileExplorer(): void {
    (this.$refs.filestd as HTMLElement).click();
  }

  fileValidation(): void {
    const fileInput = (document.querySelector('#filestd') as HTMLInputElement);

    const filePath = fileInput.value;
    const allowedExtensions = /(\.std.csv)$/i;

    if (!allowedExtensions.exec(filePath)) {
      createToast({
        title: 'Archivo no soportado',
        description: 'El tipo de archivo seleccionado no es soportado. El único tipo de archivo soportado es .std.csv',
      }, {
        hideProgressBar: true,
        showIcon: true,
        transition: 'slide',
        type: 'danger',
      });
      if (!fileInput.files?.length) {
        (document.querySelector('#fileseq') as HTMLInputElement).value = '';
        this.fileName = '';
      }
    } else {
      this.fileName = (document.querySelector('#filestd') as HTMLInputElement)?.files?.[0]?.name;
    }
  }

  async convertSTD(): Promise<any> {
    try {
      this.isLoading = this.$loading.show({
        canCancel: false,
      });
      const formData = new FormData();
      const stdFile = document.querySelector('#filestd') as HTMLInputElement;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      formData.append('std', stdFile.files[0]);
      const { data } = await axios({
        url: 'https://wind-factory-api.herokuapp.com/create-pf-file',
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        responseType: 'blob',
        proxy: false,
        data: formData,
      });
      this.downloadUrl = window.URL.createObjectURL(new Blob([data]));
      this.isLoading.hide();
      createToast({
        title: 'Conversión completada correctamente',
      },
      {
        hideProgressBar: true,
        showIcon: true,
        transition: 'slide',
        type: 'success',
      });
      this.completed = true;
    } catch (e) {
      createToast({
        title: 'Ha ocurrido un error. Por favor vuelve a intentarlo',
        description: `Error ${e.response.status}. ${e?.response?.message || ''}`,
      },
      {
        hideProgressBar: true,
        showIcon: true,
        transition: 'slide',
        type: 'danger',
      });
      console.error(e);
    } finally {
      this.isLoading.hide();
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
