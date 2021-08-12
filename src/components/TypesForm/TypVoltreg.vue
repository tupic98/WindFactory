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
        </select>
      </div>
      <div class="hidden sm:block">
        <div class="border-b border-gray-200">
          <nav class="-mb-px flex space-x-8" aria-label="Tabs">
            <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
            <div class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer transition duration-300 ease-in-out" :class="{ 'border-indigo-500 text-indigo-600 hover:border-indigo-500 hover:text-indigo-600': context.selectedTab === 'general' }" @click="context.selectedTab = 'general'">
              General
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
                    <label for="type(i)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Type
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-select v-model="context.form['type(i)']" name="type(i)" :items="context.types" :disabled="!context.form['type(i)']" />
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 md:mt-0 md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="config(i)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Configuration
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-select v-model="context.form['config(i)']" name="config(i)" :items="context.configurations" :disabled="!context.form['config(i)']"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Rated values for three-phase unir
                </h3>
                <!-- <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  Use a permanent address where you can receive mail.
                </p> -->
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="frnom(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Nominal Frequency
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['frnom(r)']" type="text" name="frnom(r)" id="frnom(r)" :disabled="!context.form['frnom(r)']" />
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span class="text-gray-500 sm:text-sm">
                            Hz
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 md:mt-0 md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="Un(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Rated Voltage
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['Un(r)']" type="text" name="Un(r)" id="Un(r)" :disabled="!context.form['Un(r)']"/>
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span class="text-gray-500 sm:text-sm">
                            kV
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="In(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Rated Current
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['In(r)']" type="text" name="In(r)" id="In(r)" :disabled="!context.form['In(r)']" />
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span class="text-gray-500 sm:text-sm">
                            A
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Tap changer
                </h3>
                <!-- <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  Use a permanent address where you can receive mail.
                </p> -->
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="pcReg(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Voltage regulation range (+/-)
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['pcReg(r)']" type="text" name="pcReg(r)" id="pcReg(r)" :disabled="!context.form['pcReg(r)']" />
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span class="text-gray-500 sm:text-sm">
                            %
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 md:mt-0 md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="nntap0(i)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Neutral position
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['nntap0(i)']" type="text" name="nntap0(i)" id="nntap0(i)" :disabled="!context.form['nntap0(i)']"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="ntapmin(i)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Minimum position
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['ntapmin(i)']" type="text" name="ntapmin(i)" id="ntapmin(i)" :disabled="!context.form['ntapmin(i)']" />
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 md:mt-0 md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="ntapmax(i)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Maximum position
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['ntapmax(i)']" type="text" name="ntapmax(i)" id="ntapmax(i)" :disabled="!context.form['ntapmax(i)']"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Series impedance
                </h3>
                <!-- <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  Use a permanent address where you can receive mail.
                </p> -->
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="uk(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Short-circuit voltage uk
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['uk(r)']" type="text" name="uk(r)" id="uk(r)" :disabled="!context.form['uk(r)']" />
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span class="text-gray-500 sm:text-sm">
                            %
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 md:mt-0 md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="pcu(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Copper losses
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['pcu(r)']" type="text" name="pcu(r)" id="pcu(r)" :disabled="!context.form['pcu(r)']"/>
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span class="text-gray-500 sm:text-sm">
                            W
                          </span>
                        </div>
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
import CustomInput from '@/components/CustomInput.vue';
import CustomSelect from '@/components/CustomSelect.vue';

interface State {
  selectedTab: string;
}

class Props {
  value = prop({
    type: Object,
    default: () => ({
      'ID(a:40)': '',
      'In(r)': '',
      'Un(r)': '',
      'config(i)': '1',
      'frnom(r)': '',
      'itapzdep(i)': '',
      'loc_name(a:40)': '',
      'nntap0(i)': '',
      'ntapmax(i)': '',
      'ntapmin(i)': '',
      'pcReg(r)': '',
      'pcu(r)': '',
      'type(i)': '0',
      'uk(r)': '',
    }),
  })
}

const useContext = () => {
  const state: State = reactive({
    selectedTab: 'general',
    form: {
      'ID(a:40)': '',
      'In(r)': '',
      'Un(r)': '',
      'config(i)': '1',
      'frnom(r)': '',
      'itapzdep(i)': '',
      'loc_name(a:40)': '',
      'nntap0(i)': '',
      'ntapmax(i)': '',
      'ntapmin(i)': '',
      'pcReg(r)': '',
      'pcu(r)': '',
      'type(i)': '0',
      'uk(r)': '',
    },
    types: [
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
        name: 'Type A (0)',
      },
      {
        value: '1',
        name: 'Type B (1)',
      },
    ],
    configurations: [
      {
        value: '',
        name: '',
      },
      {
        value: 'wind_disabled',
        name: 'wind_disabled',
      },
      {
        value: '1',
        name: 'Star, 3-phase (1)',
      },
      {
        value: '2',
        name: 'Star, 3 x 1-phase (2)',
      },
      {
        value: '3',
        name: 'Closed delta, 3 x 1-phase (3)',
      },
      {
        value: '4',
        name: 'Open delta, 2 x 1-phase (4)',
      },
    ],
  });

  return {
    ...toRefs(state),
  };
};

@Options({
  components: {
    CustomInput,
    CustomSelect,
  },
})
export default class TypVoltreg extends Vue.with(Props) {
  context = setup(() => useContext())

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

  saveTypes(): void {
    this.context.form = Object.keys(this.context.form).reduce((acc: any, key: string) => {
      acc[key] = this.context.form[key] === 'wind_disabled' ? '' : this.context.form[key];
      return acc;
    }, {});
    const newTypes = JSON.parse(JSON.stringify({
      ...this.context.form,
      'ID(a:40)': +this.context.form['ID(a:40)'],
      'In(r)': +this.context.form['In(r)'],
      'pcReg(r)': +this.context.form['pcReg(r)'],
    }));
    this.$emit('save:types', { form: newTypes });
    this.$router.go(-1);
  }
}
</script>
