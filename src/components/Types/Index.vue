<template>
  <div class="min-h-screen bg-gray-100">
    <header class="pb-24 bg-indigo-600">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="relative py-5 flex items-center justify-center lg:justify-between">
          <div class="absolute left-0 flex-shrink-0 lg:static">
            <span class="text-xl text-white font-bold">Editor de tipos</span>
          </div>
          <button type="button" class="absolute right-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none bg-green-600 hover:bg-green-700 transition" @click.prevent="saveTypes()">Guardar</button>
        </div>
        <div class="hidden lg:block border-t border-white border-opacity-20 py-5">
          <div class="grid grid-cols-3 gap-8 items-center">
            <div>
              <div class="max-w-md w-full mx-auto">
                <label for="search" class="sr-only">Search</label>
                <div class="relative text-white focus-within:text-gray-600">
                  <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                    <!-- Heroicon name: solid/search -->
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <input id="search" v-model="context.search" class="block w-full bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Search" type="search" name="search">
                </div>
              </div>
            </div>
            <div class="col-span-2">
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="-mt-24 pb-8">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 class="sr-only">Page title</h1>
        <!-- Main 3 column grid -->
        <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
          <!-- Left column -->
          <div class="grid grid-cols-1 gap-4">
            <section aria-labelledby="section-1-title">
              <div class="rounded-lg bg-white overflow-hidden shadow">
                <div class="p-6">
                  <parent-types :list="parentTypes" :selected-parent="context.selectedParent" @update:parent="updateParent"/>
                </div>
              </div>
            </section>
          </div>

          <!-- Right column -->
          <div class="grid grid-cols-1 gap-4 lg:col-span-2">
            <section aria-labelledby="section-2-title">
              <div class="rounded-lg bg-white overflow-hidden shadow">
                <div class="p-6">
                  <types-list v-if="context.typesResponse && Object.entries(context.typesResponse).length && context.typesResponse[context.selectedParent]" :list="getTypesList" :types="context.selectedParent"/>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { reactive, toRefs, computed } from 'vue';
import { useStore } from 'vuex';
import ParentTypes from '@/components/Types/ParentTypes.vue';
import TypesList from '@/components/Types/TypesList.vue';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';
import { ParentTypesList, TypesListU, TypesResponse } from './Types';

interface State {
  selectedParent: string;
  search: string;
}

const useContext = () => {
  const state: State = reactive({
    selectedParent: '',
    search: '',
  });

  const store = useStore();

  return {
    ...toRefs(state),
    typesResponse: computed(() => store.state.typesResponse),
    setTypesResponse: (response: TypesResponse) => store.dispatch('setTypesResponse', response),
    setStep3: (status: boolean) => store.dispatch('setStep3', status),
  };
};

@Options({
  components: {
    ParentTypes,
    TypesList,
  },
})
export default class Types extends Vue {
  context = setup(() => useContext());

  isLoading!: any;

  async mounted(): Promise<void> {
    try {
      this.context.selectedParent = Object.keys(this.context.typesResponse)[0] || '';
    } catch (e) {
      console.error({ e });
    }
  }

  get parentTypes(): Array<ParentTypesList> {
    return Object.keys(this.context.typesResponse).map((parent) => ({
      id: parent,
      name: parent.split('_').map((s) => `${s.charAt(0).toUpperCase()}${s.slice(1)}`).join(''),
    }));
  }

  get getTypesList(): Array<any> {
    if (this.context.typesResponse && Object.entries(this.context.typesResponse).length && this.context.selectedParent && this.context.typesResponse[this.context.selectedParent]) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return this.context.typesResponse[this.context.selectedParent].map((n) => Object.keys(n).reduce((acc, key: string) => {
        const newKey = key.split('(').shift() || '';
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        acc[newKey] = n[key as keyof TypesListU];
        return acc;
      }, {})).filter((o: any) => o.loc_name.toLowerCase().includes(this.context.search.toLowerCase()));
    }
    return [];
  }

  updateParent(parent: string): void {
    this.context.selectedParent = parent;
  }

  async saveTypes() {
    try {
      this.isLoading = this.$loading.show({
        canCancel: false,
      });
      await this.axios.post('/save-types', this.context.typesResponse);
      createToast({
        title: 'Cambios guardados satisfactoriamente',
      },
      {
        hideProgressBar: true,
        showIcon: true,
        transition: 'slide',
        type: 'success',
      });
      this.context.setStep3(true);
      this.$router.push('/convertir');
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
