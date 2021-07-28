<template>
  <div>
    <div class="p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Importación de tipos
      </h3>
      <div class="mt-3 sm:mt-0 sm:ml-4">
        <button type="button" :disabled="!fileName" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" :class="[!fileName ? 'bg-gray-600 cursor-not-allowed pointer-events-none' : 'bg-indigo-600 hover:bg-indigo-700 cursor-pointer pointer-events-auto']" @click.prevent="importSEQ()">
          Importar
        </button>
      </div>
    </div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="p-6">
      <ul class="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
  <li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
    <div class="w-full flex items-center justify-between p-6 space-x-6">
      <div class="flex-1">
        <div class="flex items-center space-x-3 truncate">
          <h3 class="text-gray-900 font-medium text-4xl truncate">SEQ</h3>
          <div v-if="fileName" class="file-name-wrapper flex flex-shrink-0 px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
            <span class="file-name"> {{ fileName.split('.')[0] }}</span>
            <span >.{{ fileName.split('.')[1] }}.{{ fileName.split('.')[2] }}</span>
          </div>
        </div>
        <div class="text-gray-800 text-sm mt-3 text-justify">Sube aquí el archivo SEQ exportado por Windmil. El nombre del archivo puede ser cualquiera mientras la extensión de este sea estrictamente <span class="italic">.seq.csv</span>. Por ejemplo: <span class="italic font-bold">red_windmil.seq.csv</span>. Una vez subido, se te habilitará el botón de importar en la esquina superior derecha.</div>
      </div>
    </div>
    <div>
      <div class="-mt-px flex divide-x divide-gray-200">
        <div class="w-0 flex-1 flex">
          <div class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 cursor-pointer" @click.prevent="openFileExplorer">
            <span class="ml-3">Subir</span>
          </div>
          <input class="hidden" type="file" id="fileseq" ref="fileseq" accept=".csv" @change="fileValidation()">
        </div>
        </div>
    </div>
  </li>
</ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { useStore } from 'vuex';
import Types from '@/components/Types/Index.vue';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';
import { TypesResponse } from '@/components/Types/Types';

const useContext = () => {
  const store = useStore();

  return {
    setTypesResponse: (response: TypesResponse) => store.dispatch('setTypesResponse', response),
    setStep2: (status: boolean) => store.dispatch('setStep2', status),
  };
};

@Options({
  components: {
    Types,
  },
})
export default class ImportTypesView extends Vue {
  context = setup(() => useContext());

  fileName: string | undefined = '';

  isLoading!: any;

  openFileExplorer(): void {
    (this.$refs.fileseq as HTMLElement).click();
  }

  fileValidation(): void {
    const fileInput = (document.querySelector('#fileseq') as HTMLInputElement);

    const filePath = fileInput.value;

    // Allowing file type
    const allowedExtensions = /(\.seq.csv)$/i;

    if (!allowedExtensions.exec(filePath)) {
      createToast({
        title: 'Archivo no soportado',
        description: 'El tipo de archivo seleccionado no es soportado. El único tipo de archivo soportado es .seq.csv',
      },
      {
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
      this.fileName = (document.querySelector('#fileseq') as HTMLInputElement)?.files?.[0]?.name;
    }
  }

  async importSEQ(): Promise<any> {
    try {
      this.isLoading = this.$loading.show({
        canCancel: false,
      });
      const formData = new FormData();
      const seqFile = document.querySelector('#fileseq') as HTMLInputElement;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      formData.append('seq', seqFile.files[0]);
      const { data } = await this.axios.post('/upload-excel', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      this.context.setTypesResponse(data);
      createToast({
        title: 'Archivo importado correctamente',
      },
      {
        hideProgressBar: true,
        showIcon: true,
        transition: 'slide',
        type: 'success',
      });
      this.context.setStep2(true);
      this.$router.push('/tipos');
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
.file-name-wrapper {
  max-width: 150px;
}
.file-name {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 135px;
}
</style>
