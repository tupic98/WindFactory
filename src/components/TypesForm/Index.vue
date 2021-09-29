<template>
  <div class="min-h-screen bg-gray-100">
    <header class="pb-24 bg-indigo-600">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="relative py-5 flex items-center justify-center lg:justify-between">
          <div class="absolute left-0 flex-shrink-0 lg:static">
            <span class="text-xl text-white font-bold">{{ currentType }}</span>
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
                  <component v-if="getCurrentType && Object.entries(getCurrentType).length" :is="currentType" :value="getCurrentType" @save:types="saveNewType"></component>
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
import { computed } from 'vue';
import { useStore } from 'vuex';
import TypSwitch from '@/components/TypesForm/TypSwitch.vue';
import TypLod from '@/components/TypesForm/TypLod.vue';
import TypLne from '@/components/TypesForm/TypLne.vue';
import TypVoltreg from '@/components/TypesForm/TypVoltreg.vue';
import TypFuse from '@/components/TypesForm/TypFuse.vue';
import TypTr2 from '@/components/TypesForm/TypTr2.vue';

const useContext = () => {
  const store = useStore();

  return {
    typesResponse: computed(() => store.state.typesResponse),
    saveType: (payload: any) => store.dispatch('saveType', payload),
  };
};

@Options({
  components: {
    TypSwitch,
    TypLod,
    TypLne,
    TypVoltreg,
    TypFuse,
    TypTr2,
  },
})
export default class TypesForm extends Vue {
  context = setup(() => useContext());

  currentType = 'TypLne';

  mounted(): void {
    this.currentType = this.$route.query.types ? (this.$route.query.types as string).split('_').map((s) => `${s.charAt(0).toUpperCase()}${s.slice(1)}`).join('') : 'TypLne';
  }

  get getCurrentType() {
    if (this.context.typesResponse) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return this.context.typesResponse[(this.$route.query.types as string)].find((typ: any) => typ['ID(a:40)'] === +this.$route.params.id);
    }
    return {};
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  saveNewType({ form }: { form: any }): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.context.saveType({ form, type: this.$route.query.types });
  }
}
</script>
