<template>
  <div class="min-h-screen bg-gray-100">
    <header class="pb-24 bg-indigo-600">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="relative py-5 flex items-center justify-center lg:justify-between">
          <div class="absolute left-0 flex-shrink-0 lg:static">
            <span class="text-xl text-white font-bold">LneTyp: 1/0 ACSR</span>
          </div>
        </div>
        <div class="hidden lg:block border-t border-white border-opacity-20 py-5">
        </div>
      </div>
    </header>
    <main class="-mt-24 pb-8">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 class="sr-only">Page title</h1>
        <!-- Main 3 column grid -->
        <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
          <!-- Left column -->
          <div class="grid grid-cols-1 gap-4 col-span-3">
            <section aria-labelledby="section-1-title">
              <div class="rounded-lg bg-white overflow-visible shadow">
                <div class="p-6">
                  <component :is="`TypLod`"></component>
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
import { Options, Vue } from 'vue-class-component';
import TypSwitch from '@/components/TypesForm/TypSwitch.vue';
import TypLod from '@/components/TypesForm/TypLod.vue';

@Options({
  components: {
    TypSwitch,
    TypLod,
  },
})
export default class TypesForm extends Vue {
}
</script>
