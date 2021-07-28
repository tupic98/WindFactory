<template>
  <div class="container mx-auto px-6 py-4">
    <h1 class="text-4xl xl:text-6xl text-center">Bienvenidos a Windfactory</h1>
    <h2 class="text-base text-justify px-12"></h2>
    <nav aria-label="Progress" class="xl:w-8/12 mt-16">
  <ol class="overflow-hidden">
    <li class="relative pb-10">
      <div class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-indigo-600" aria-hidden="true"></div>
      <a href="#" class="relative flex items-start group">
        <span class="h-9 flex items-center">
          <span class="relative bg-white w-8 h-8 flex items-center justify-center border-2 border-indigo-600 rounded-full">
                  <span class="text-indigo-600">01</span>
                </span>
        </span>
        <span class="ml-4 min-w-0 flex flex-col">
          <span class="text-base font-semibold tracking-wide uppercase text-left">Importación de tipos</span>
          <span class="text-sm text-gray-500 text-left">El primer paso es la importación de tipos. En este paso se subirá el archivo SEQ, donde se extraerán los tipos de este archivo. Así mismo se tendrá un apartado de revisión para asegurar que la información de estos sea correcta.</span>
        </span>
      </a>
    </li>

    <li class="relative pb-10">
      <div class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-indigo-600" aria-hidden="true"></div>
      <a href="#" class="relative flex items-start group">
        <span class="h-9 flex items-center">
          <span class="relative bg-white w-8 h-8 flex items-center justify-center border-2 border-indigo-600 rounded-full">
                  <span class="text-indigo-600">02</span>
                </span>
        </span>
        <span class="ml-4 min-w-0 flex flex-col">
          <span class="text-base font-semibold tracking-wide uppercase text-left">Verificación de tipos</span>
          <span class="text-sm text-gray-500 text-left">Segundo paso es verificar que los tipos importados a partir del archivo SEQ sean correctos. Tendrá un apartado donde puede ver el listado de tipos, agrupados. Puede modificar cada tipo y su información.</span>
        </span>
      </a>
    </li>
    <li class="relative pb-10">
      <div class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-indigo-600" aria-hidden="true"></div>
      <a href="#" class="relative flex items-start group">
        <span class="h-9 flex items-center">
          <span class="relative bg-white w-8 h-8 flex items-center justify-center border-2 border-indigo-600 rounded-full">
                  <span class="text-indigo-600">03</span>
                </span>
        </span>
        <span class="ml-4 min-w-0 flex flex-col">
          <span class="text-base font-semibold tracking-wide uppercase text-left">Importación de red de Windmil</span>
          <span class="text-sm text-gray-500 text-left">El tercer paso consiste en la importación de la red de Windmil. En este apartado el usuario solo tendrá que subir los archivos necesarios para su procesamiento.</span>
        </span>
      </a>
    </li>
<li>
      <a href="#" class="relative flex items-start group">
        <span class="h-9 flex items-center">
          <span class="relative bg-white w-8 h-8 flex items-center justify-center border-2 border-indigo-600 rounded-full">
                  <span class="text-indigo-600">04</span>
                </span>
        </span>
        <span class="ml-4 min-w-0 flex flex-col">
          <span class="text-base font-semibold tracking-wide uppercase text-left">Descarga de red de PowerFactory</span>
          <span class="text-sm text-gray-500 text-left">Luego de que el programa haya procesado correctamente la red de de Windmil, este dispondra del archivo de excel con la red lista para ser importada en PowerFactory.</span>
        </span>
      </a>
    </li>
      </ol>
</nav>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
})
export default class HomeView extends Vue {}
</script>
