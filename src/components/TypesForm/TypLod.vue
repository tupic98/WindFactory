<template>
  <div>
    <h2 class="text-4xl">
      {{ context.form['loc_name(a:40)'] }}
    </h2>
    <!-- Tabs -->
    <div>
      <div class="sm:hidden">
        <label for="tabs" class="sr-only">Select a tab</label>
        <select id="tabs" name="tabs" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" @change.prevent="context.selectedTab = $event.target.value">
          <option value="general">General</option>
          <option value="load-flow">Load Flow</option>
        </select>
      </div>
      <div class="hidden sm:block">
        <div class="border-b border-gray-200">
          <nav class="-mb-px flex space-x-8" aria-label="Tabs">
            <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
            <div class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer transition duration-300 ease-in-out" :class="{ 'border-indigo-500 text-indigo-600 hover:border-indigo-500 hover:text-indigo-600': context.selectedTab === 'general' }" @click="context.selectedTab = 'general'">
              General
            </div>

            <div class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer transition duration-300 ease-in-out" :class="{ 'border-indigo-500 text-indigo-600 hover:border-indigo-500 hover:text-indigo-600': context.selectedTab === 'load-flow' }" @click="context.selectedTab = 'load-flow'">
              Load Flow
            </div>
          </nav>
        </div>
      </div>
    </div>
    <form>
      <div v-show="context.selectedTab === 'general'" class="pt-6 text-left">
        <div class="space-y-8 divide-y divide-gray-200">
          <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  General
                </h3>
                <!-- <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  Use a permanent address where you can receive mail.
                </p> -->
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="systp(i)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      System Type
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-select v-model="context.form['systp(i)']" name="systp(i)" :items="context.systemTypes" :disabled="!context.form['systp(i)']" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="phtech(i)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Technology
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-select v-model="context.form['phtech(i)']" name="phtech(i)" :items="context.technologies" :disabled="!context.form['phtech(i)']"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="context.selectedTab === 'load-flow'" class="pt-6 text-left">
        <div class="space-y-8 divide-y divide-gray-200">
          <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <!-- Voltage Dependece P -->
            <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Voltage Dependece P
                </h3>
                <!-- <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  Use a permanent address where you can receive mail.
                </p> -->
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="aP(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Coefficient aP
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['aP(r)']" type="text" name="aP(r)" id="aP(r)" :disbaled="!context.form['aP(r)']" />
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 md:mt-0 md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="kpu0(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Exponent e_aP
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['kpu0(r)']" type="text" name="kpu0(r)" id="kpu0(r)" :disabled="!context.form['kpu0(r)']" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="bP(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Coefficient bP
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['bP(r)']" type="text" name="bP(r)" id="bP(r)" :disabled="!context.form['bP(r)']" />
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 md:mt-0 md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="kpu1(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Exponent e_bP
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['kpu1(r)']" type="text" name="kpu1(r)" id="kpu1(r)" :disabled="!context.form['kpu1(r)']"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                  </div>
                  <div class="mt-4 md:mt-0 md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="kpu(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Exponent e_cP
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['kpu(r)']" type="text" name="kpu(r)" id="kpu(r)" :disabled="!context.form['kpu(r)']"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Voltage Dependece of Q -->
            <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Voltage Dependece P
                </h3>
                <!-- <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  Use a permanent address where you can receive mail.
                </p> -->
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="aQ(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Coefficient aQ
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['aQ(r)']" type="text" name="aQ(r)" id="aQ(r)" :disabled="!context.form['aQ(r)']" />
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 md:mt-0 md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="kqu0(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Exponent e_aQ
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['kqu0(r)']" type="text" name="kqu0(r)" id="kqu0(r)" :disaled="!context.form['kqu0(r)']"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="bQ(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Coefficient bQ
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['bQ(r)']" type="text" name="bQ(r)" id="bQ(r)" :disabled="!context.form['bQ(r)']" />
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 md:mt-0 md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="kqu1(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Exponent e_bQ
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['kqu1(r)']" type="text" name="kqu1(r)" id="kqu1(r)" :disabled="!context.form['kqu1(r)']" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                  </div>
                  <div class="mt-4 md:mt-0 md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="kqu(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Exponent e_cQ
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['kqu(r)']" type="text" name="kqu(r)" id="kqu(r)" :disabled="!context.form['kqu(r)']" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-5">
        <div class="flex justify-end">
          <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click.prevent="$router.go(-1)">
            Cancel
          </button>
          <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click.prevent="saveTypes()">
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {
  Options, Vue, setup, prop,
} from 'vue-class-component';
import { toRefs, reactive } from 'vue';
import CustomSelect from '@/components/CustomSelect.vue';
import CustomInput from '@/components/CustomInput.vue';

interface State {
  selectedTab: string;
}

class Props {
  value = prop({
    type: Object,
    default: () => ({
      'ID(a:40)': '',
      'aP(r)': '',
      'aQ(r)': '',
      'bP(r)': '',
      'bQ(r)': '',
      'kpu(r)': '',
      'kpu0(r)': '',
      'kpu1(r)': '',
      'kqu(r)': '',
      'kqu0(r)': '',
      'kqu1(r)': '',
      'loc_name(a:40)': '',
      'phtech(i)': '0',
      'systp(i)': '0',
    }),
  })
}

const useContext = () => {
  const state: State = reactive({
    selectedTab: 'general',
    form: {
      'ID(a:40)': '',
      'aP(r)': '',
      'aQ(r)': '',
      'bP(r)': '',
      'bQ(r)': '',
      'kpu(r)': '',
      'kpu0(r)': '',
      'kpu1(r)': '',
      'kqu(r)': '',
      'kqu0(r)': '',
      'kqu1(r)': '',
      'loc_name(a:40)': '',
      'phtech(i)': '0',
      'systp(i)': '0',
    },
    systemTypes: [
      {
        value: '',
        name: '',
      },
      {
        value: 'wind_disabled',
        name: 'wind_disabled',
      },
      {
        value: '0',
        name: 'AC (0)',
      },
      {
        value: '1',
        name: 'DC (1)',
      },
    ],
    technologies: [
      {
        value: '',
        name: '',
      },
      {
        value: 'wind_disabled',
        name: 'wind_disabled',
      },
      {
        value: '0',
        name: '3PH-\'D\' (0)',
      },
      {
        value: '2',
        name: '3PH PH-E (2)',
      },
      {
        value: '3',
        name: '3PH-\'YN\' (3)',
      },
      {
        value: '4',
        name: '2PH PH-E (4)',
      },
      {
        value: '5',
        name: '2PH-\'YN\' (5)',
      },
      {
        value: '7',
        name: '1PH PH-PH (7)',
      },
      {
        value: '8',
        name: '1PH PH-N (8)',
      },
      {
        value: '9',
        name: '1PH PH-E (9)',
      },
    ],
  });

  return {
    ...toRefs(state),
  };
};

@Options({
  components: {
    CustomSelect,
    CustomInput,
  },
})
export default class TypLod extends Vue.with(Props) {
  context = setup(() => useContext());

  mounted(): void {
    const newForm = JSON.parse(JSON.stringify(this.value));

    this.context.form = {
      ...this.context.form,
      ...Object.keys(newForm).reduce((acc: any, key: string) => {
        acc[key] = newForm[key] === -1 || !newForm[key] ? 'wind_disabled' : newForm[key];
        return acc;
      }, {}),
    };
  }

  saveTypes() :void {
    this.context.form = Object.keys(this.context.form).reduce((acc: any, key: string) => {
      acc[key] = this.context.form[key] === 'wind_disabled' ? '' : this.context.form[key];
      return acc;
    }, {});
    const newTypes = JSON.parse(JSON.stringify({
      ...this.context.form,
      'ID(a:40)': +this.context.form['ID(a:40)'],
    }));
    this.$emit('save:types', { form: newTypes });
    this.$router.go(-1);
  }
}
</script>
