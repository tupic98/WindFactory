<template>
  <div class="min-h-screen bg-gray-100">
    <header class="pb-24 bg-indigo-600">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="relative py-5 flex items-center justify-center lg:justify-between">
          <div class="absolute left-0 flex-shrink-0 lg:static">
            <span class="text-xl text-white font-bold">Editor de tipos</span>
          </div>

          <!-- Search -->
          <div class="hidden sm:block flex-1 min-w-0 pl-12 lg:hidden">
            <div class="max-w-xs w-full ml-auto">
              <label for="search" class="sr-only">Search</label>
              <div class="relative text-white focus-within:text-gray-600">
                <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                  <!-- Heroicon name: solid/search -->
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                  </svg>
                </div>
                <input id="search" class="block w-full bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Search" type="search" name="search">
              </div>
            </div>
          </div>
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
                  <input id="search" class="block w-full bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Search" type="search" name="search">
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
                  <parent-types :list="context.parentList"/>
                </div>
              </div>
            </section>
          </div>

          <!-- Right column -->
          <div class="grid grid-cols-1 gap-4 lg:col-span-2">
            <section aria-labelledby="section-2-title">
              <div class="rounded-lg bg-white overflow-hidden shadow">
                <div class="p-6">
                  <types-list :list="context.typesList"/>
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
import { reactive, toRefs } from 'vue';
import ParentTypes from '@/components/Types/ParentTypes.vue';
import TypesList from '@/components/Types/TypesList.vue';
import { TemporalParentList, TemporalTypesList } from './Types';

interface State {
  parentList: TemporalParentList[];
  typesList: TemporalTypesList[];
}

const useContext = () => {
  const state: State = reactive({
    parentList: [
      {
        name: 'TypLne',
      },
      {
        name: 'TypFuse',
      },
      {
        name: 'TypLod',
      },
      {
        name: 'TypTpr2',
      },
      {
        name: 'TypSwitch',
      },
    ],
    typesList: [
      {
        name: '1/0 AAC',
        type: 'TypeLne',
      },
      {
        name: '3 ACSR',
        type: 'TypeLne',
      },
    ],
  });

  return {
    ...toRefs(state),
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
}
</script>
