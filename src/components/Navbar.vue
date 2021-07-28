<template>
  <div class="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto overflow-x-hidden">
  <div class="flex items-center flex-shrink-0 px-4">
    <img class="block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=rose&shade=500" alt="Windfactory">
    <div class="font-bold ml-4 text-lg">Windfactory</div>
  </div>
  <div class="mt-5 flex-grow flex flex-col">
    <nav class="flex-1 px-2 space-y-8 bg-white relative" aria-label="Sidebar">
      <div class="space-y-2 mb-32">
        <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
        <router-link tag="div" :to="{ name: 'Home' }" v-slot="{ isActive }">
          <a class="text-gray-600 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-gray-100" :class="{ 'bg-gray-100 text-gray-900': isActive }">
            <svg class="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </a>
        </router-link>
      </div>
      <div class="space-y-2">
        <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="projects-headline">
          Configuración
        </h3>
        <div class="space-y-1" role="group" aria-labelledby="projects-headline">
          <ul class="list-none">
            <router-link v-if="context.step1" tag="li" :to="{ name: 'ImportTypes' }" v-slot="{ isActive }">
            <a class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50" :class="{ 'bg-gray-100 text-gray-900': isActive }">
              <span class="truncate">
                1. Importar Tipos
              </span>
            </a>
            </router-link>
            <router-link v-if="context.step2" tag="li" :to="{ name: 'Types' }" v-slot="{ isActive }">
            <a class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50" :class="{ 'bg-gray-100 text-gray-900': isActive }">
              <span class="truncate">
                2. Verificación Tipos
              </span>
            </a>
            </router-link>
            <router-link v-if="context.step3" tag="li" :to="{ name: 'ConvertSTD' }" v-slot="{ isActive }">
            <a class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50" :class="{ 'bg-gray-100 text-gray-900': isActive }">
              <span class="truncate">
                3. Convertir red
              </span>
            </a>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</div>
</template>

<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { computed } from 'vue';
import { useStore } from 'vuex';

const useContext = () => {
  const store = useStore();

  return {
    typesResponse: computed(() => store.state.typesResponse),
    step1: computed(() => store.state.step1),
    step2: computed(() => store.state.step2),
    step3: computed(() => store.state.step3),
  };
};

@Options({})
export default class Navbar extends Vue {
  context = setup(() => useContext());
}

</script>
