<template>
  <div>
    <h2 class="text-4xl ">
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
                    <label for="nt2ph(i)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Technology
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-select v-model="context.form['nt2ph(i)']" name="nt2ph(i)" :items="context.technologies" :disabled="!context.form['nt2ph(i)']" />
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 md:mt-0 md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="strn(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Rated Power
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['strn(r)']" type="text" name="strn(r)" id="strn(r)" :disabled="!context.form['strn(r)']"/>
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span class="text-gray-500 sm:text-sm">
                            MVA
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="frnom(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Nominal Frequency
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['frnom(r)']" type="text" name="frnom(r)" id="frnom(r)" :disabled="!context.form['frnom(r)']"/>
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span class="text-gray-500 sm:text-sm">
                            Hz
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
                  Rated Voltage
                </h3>
                <!-- <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  Use a permanent address where you can receive mail.
                </p> -->
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="utrn_h(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      HV-Side
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['utrn_h(r)']" type="text" name="utrn_h(r)" id="utrn_h(r)" :disabled="!context.form['utrn_h(r)']" />
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
                    <label for="utrn_l(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      LV-Side
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['utrn_l(r)']" type="text" name="utrn_l(r)" id="utrn_l(r)" :disabled="!context.form['utrn_l(r)']"/>
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
            </div>
          </div>
          <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Vector Group
                </h3>
                <!-- <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  Use a permanent address where you can receive mail.
                </p> -->
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="tr2cn_h(a:2)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      HV-Side
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-select v-model="context.form['tr2cn_h(a:2)']" name="tr2cn_h(a:2)" :items="context.HVSides" :disabled="!context.form['tr2cn_h(a:2)']" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="tr2cn_l(a:2)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      LV-Side
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-select v-model="context.form['tr2cn_l(a:2)']" name="tr2cn_l(a:2)" :items="context.LVSides" :disabled="!context.form['tr2cn_l(a:2)']" />
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
                  Positive Sequence Impedance
                </h3>
                <!-- <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  Use a permanent address where you can receive mail.
                </p> -->
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="uktr(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Short-Circuit Voltage uk
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['uktr(r)']" type="text" name="uktr(r)" id="uktr(r)" :disabled="!context.form['uktr(r)']" />
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span class="text-gray-500 sm:text-sm">
                          </span>
                          %
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="pcutr(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Copper Losses
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['pcutr(r)']" type="text" name="pcutr(r)" id="pcutr(r)" :disabled="!context.form['pcutr(r)']" />
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span class="text-gray-500 sm:text-sm">
                            kW
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
      <div v-show="context.selectedTab === 'load-flow'" class="pt-6 text-left">
        <div class="space-y-8 divide-y divide-gray-200">
          <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <!-- Voltage Dependece P -->
            <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Magnetising Impedance
                </h3>
                <!-- <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  Use a permanent address where you can receive mail.
                </p> -->
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="curmg(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      No Load Current
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['curmg(r)']" type="text" name="curmg(r)" id="curmg(r)" :disabled="!context.form['curmg(r)']" />
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span class="text-gray-500 sm:text-sm">
                            %
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 md:mt-0 md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="pfe(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      No Load Losses
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['pfe(r)']" type="text" name="pfe(r)" id="pfe(r)" :disabled="!context.form['pfe(r)']" />
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span class="text-gray-500 sm:text-sm">
                            kW
                          </span>
                        </div>
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
                  Parameters Per Length 1,2 - Sequence
                </h3>
                <!-- <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  Use a permanent address where you can receive mail.
                </p> -->
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="bline(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Susceptance B'
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['bline(r)']" type="text" name="bline(r)" id="bline(r)" :disabled="!context.form['bline(r)']" />
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span class="text-gray-500 sm:text-sm">
                            uS/km
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
                    <label for="tline(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Ins Factor
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['tline(r)']" type="text" name="tline(r)" id="tline(r)" :disabled="!context.form['tline(r)']" />
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
                  Parameters per Length, Neutral
                </h3>
                <!-- <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  Use a permanent address where you can receive mail.
                </p> -->
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="bnline(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Susceptance Bn'
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['bnline(r)']" type="text" name="bnline(r)" id="bnline(r)" :disabled="!context.form['bnline(r)']" />
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span class="text-gray-500 sm:text-sm">
                            uS/km
                          </span>
                        </div>
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
                  Parameters per Length, Phase-Neutral Coupling
                </h3>
                <!-- <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  Use a permanent address where you can receive mail.
                </p> -->
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="bpnline(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Susceptance Bpn'
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['bpnline(r)']" type="text" name="bpnline(r)" id="bpnline(r)" :disabled="!context.form['bpnline(r)']" />
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span class="text-gray-500 sm:text-sm">
                            uS/km
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
          <button class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click.prevent="saveTypes()">
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
      'curmg(r)': '',
      'dutap(r)': '',
      'frnom(r)': '',
      'itapch(i)': '',
      'itapch2(i)': '',
      'itapzdep(i)': '',
      'itratioadpt(i)': '',
      'itrdl(r)': '',
      'itrdl_lv(r)': '',
      'itrdr(r)': '',
      'itrdr_lv(r)': '',
      'itrldf(i)': '',
      'loc_name(a:40)': '',
      'nntap0(i)': '',
      'nt2ag(r)': '',
      'nt2ph(i)': '',
      'ntpmn(i)': '',
      'ntpmx(i)': '',
      'pcutr(r)': '',
      'pfe(r)': '',
      'phitr(r)': '',
      'rtox0_n(r)': '',
      'strn(r)': '',
      'tap_side(i)': '',
      'tapchtype(i)': '',
      'tr2cn_h(a:2)': '',
      'tr2cn_l(a:2)': '',
      'uk0tr(r)': '',
      'uktr(r)': '',
      'ur0tr(r)': '',
      'utrn_h(r)': '',
      'utrn_l(r)': '',
      'zx0hl_n(r)': '',
    }),
  })
}

const useContext = () => {
  const state: State = reactive({
    selectedTab: 'general',
    form: {
      'ID(a:40)': '',
      'curmg(r)': '',
      'dutap(r)': '',
      'frnom(r)': '',
      'itapch(i)': '',
      'itapch2(i)': '',
      'itapzdep(i)': '',
      'itratioadpt(i)': '',
      'itrdl(r)': '',
      'itrdl_lv(r)': '',
      'itrdr(r)': '',
      'itrdr_lv(r)': '',
      'itrldf(i)': '',
      'loc_name(a:40)': '',
      'nntap0(i)': '',
      'nt2ag(r)': '',
      'nt2ph(i)': '',
      'ntpmn(i)': '',
      'ntpmx(i)': '',
      'pcutr(r)': '',
      'pfe(r)': '',
      'phitr(r)': '',
      'rtox0_n(r)': '',
      'strn(r)': '',
      'tap_side(i)': '',
      'tapchtype(i)': '',
      'tr2cn_h(a:2)': '',
      'tr2cn_l(a:2)': '',
      'uk0tr(r)': '',
      'uktr(r)': '',
      'ur0tr(r)': '',
      'utrn_h(r)': '',
      'utrn_l(r)': '',
      'zx0hl_n(r)': '',
    },
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
        value: '1',
        name: 'Single Wire Earth Return (1)',
      },
      {
        value: '2',
        name: 'Single Phase Transformer (2)',
      },
      {
        value: '3',
        name: 'Three Phase Transformer (3)',
      },
    ],
    HVSides: [
      {
        value: '',
        name: '',
      },
      {
        value: 'wind_disabled',
        name: 'wind_disabled',
      },
      {
        value: 'Y',
        name: 'Y',
      },
      {
        value: 'YN',
        name: 'YN',
      },
      {
        value: 'Z',
        name: 'Z',
      },
      {
        value: 'ZN',
        name: 'ZN',
      },
      {
        value: 'D',
        name: 'D',
      },
    ],
    LVSides: [
      {
        value: '',
        name: '',
      },
      {
        value: 'wind_disabled',
        name: 'wind_disabled',
      },
      {
        value: 'Y',
        name: 'Y',
      },
      {
        value: 'YN',
        name: 'YN',
      },
      {
        value: 'Z',
        name: 'Z',
      },
      {
        value: 'ZN',
        name: 'ZN',
      },
      {
        value: 'D',
        name: 'D',
      },
    ],
    tapSides: [
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
        name: 'HV (0)',
      },
      {
        value: '1',
        name: 'LV (1)',
      },
    ],
    magnetisingTypes: [
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
        name: 'Linear (0)',
      },
      {
        value: '1',
        name: 'Current / Voltage Values (1)',
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
export default class TypTr2 extends Vue.with(Props) {
  context = setup(() => useContext());

  mounted(): void {
    const newForm = JSON.parse(JSON.stringify(this.value));
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.context.form = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
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
    }));
    this.$emit('save:types', { form: newTypes });
    this.$router.go(-1);
  }
}
</script>
