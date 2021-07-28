<template>
  <div>
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
                    <label for="loc_name" aria-readonly="readonly" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Name
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <input v-model="context.form.loc_name" type="text" name="loc_name" id="loc_name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="uline" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Rated Voltage
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <input v-model="context.form.uline" type="text" name="uline" id="uline" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span class="text-gray-500 sm:text-sm">
                            kV
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                   <div class="mt-4 md:mt-0 md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="sline" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Rated Current
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <input v-model="context.form.sline" type="text" name="sline" id="sline" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span class="text-gray-500 sm:text-sm">
                            kA
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
                    <label for="cohl_" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Cable / OHL
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-select v-model="context.form.cohl_" name="cohl_" :items="context.cableTypes" />
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 md:mt-0 md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="systp" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      System Type
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-select v-model="context.form.systp" name="systp" :items="context.systemTypes" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="nlnph" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Phases
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-select v-model="context.form.nlnph" name="nlnph" :items="context.phases" />
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 md:mt-0 md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="nneutral" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Number of neutrals
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-select v-model="context.form.nneutral" name="nneutral" :items="context.numberOfNeutrals" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="frnom" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Nominal Frequency
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <input v-model="context.form.frnom" type="text" name="frnom" id="frnom" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
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
                  Parameters per Length 1,2 - Sequence
                </h3>
                <!-- <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  Use a permanent address where you can receive mail.
                </p> -->
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="rline" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      AC-Resistance R'(20°C)
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <input v-model="context.form.rline" type="number" name="rline" id="rline" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span class="text-gray-500 sm:text-sm">
                            Ohm/km
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
                    <label for="xline" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Reactance X'
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <input v-model="context.form.xline" type="text" name="xline" id="xline" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span class="text-gray-500 sm:text-sm">
                            Ohm/km
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
                  Parameters per Length Zero Sequence
                </h3>
                <!-- <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  Use a permanent address where you can receive mail.
                </p> -->
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="rline0" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      AC-Resistance R0'
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <input v-model="context.form.rline0" type="text" name="rline0" id="rline0" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span class="text-gray-500 sm:text-sm">
                            Ohm/km
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
                    <label for="xline0" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Reactance X0'
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <input v-model="context.form.xline0" type="text" name="xline0" id="xline0" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span class="text-gray-500 sm:text-sm">
                            Ohm/km
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
                  Parameters per Length, Neutral
                </h3>
                <!-- <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  Use a permanent address where you can receive mail.
                </p> -->
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="rnline" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      AC-Resistance Rn'
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <input v-model="context.form.rnline" type="text" name="rnline" id="rnline" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span class="text-gray-500 sm:text-sm">
                            Ohm/km
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
                    <label for="xnline" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Reactance Xn'
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <input v-model="context.form.xnline" type="text" name="xnline" id="xnline" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span class="text-gray-500 sm:text-sm">
                            Ohm/km
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
                  Parameters per Length, Phase-Neutral Coupling
                </h3>
                <!-- <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  Use a permanent address where you can receive mail.
                </p> -->
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="rpnline" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      AC-Resistance Rpn'
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <input v-model="context.form.rpnline" type="text" name="rpnline" id="rpnline" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span class="text-gray-500 sm:text-sm">
                            Ohm/km
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
                    <label for="xpnline" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Reactance Xpn'
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <input v-model="context.form.xpnline" type="text" name="xpnline" id="xpnline" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span class="text-gray-500 sm:text-sm">
                            Ohm/km
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
                  Parameters per Length 1,2 - Sequence
                </h3>
                <!-- <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  Use a permanent address where you can receive mail.
                </p> -->
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="tmax" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Max Operating Temperature
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <input v-model="context.form.tmax" type="text" name="tmax" id="tmax" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span class="text-gray-500 sm:text-sm">
                            degC
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 md:mt-0 md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="mlei" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Conductor material
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-select v-model="context.form.mlei" name="mlei" :items="context.materials" />
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
                    <label for="bline" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Susceptance B'
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <input v-model="context.form.bline" type="text" name="bline" id="bline" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
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
                    <label for="tline" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Ins Factor
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <input v-model="context.form.tline" type="text" name="tline" id="tline" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
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
                    <label for="bnline" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Susceptance Bn'
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <input v-model="context.form.bnline" type="text" name="bnline" id="bnline" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
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
                    <label for="bpnline" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Susceptance Bpn'
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <input v-model="context.form.bpnline" type="text" name="bpnline" id="bpnline" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
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
          <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Cancel
          </button>
          <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import {
  Options, Vue, setup, prop,
} from 'vue-class-component';
import { toRefs, reactive } from 'vue';
import CustomSelect from '@/components/CustomSelect.vue';
import { TypesListU } from '../Types/Types';

interface State {
  selectedTab: string;
}

class Props {
  value = prop({
    type: Object,
    default: () => ({
      loc_name: '',
      uline: '',
      sline: '',
      cohl_: '0',
      systp: '0',
      nlnph: '0',
      nneutral: '0',
      frnom: '',
      rline: 0,
      xline: '',
      rline0: '',
      xline0: '',
      rnline: '',
      xnline: '',
      rpnlabel: '',
      xpnline: '',
      tmax: '',
      mlei: 'Al',
      bline: '',
      tline: '',
      bnline: '',
      bpnline: '',
    }),
  })
}

const useContext = () => {
  const state: State = reactive({
    selectedTab: 'general',
    form: {
      loc_name: '',
      uline: '',
      sline: '',
      cohl_: '0',
      systp: '0',
      nlnph: '0',
      nneutral: '0',
      frnom: '',
      rline: 0,
      xline: '',
      rline0: '',
      xline0: '',
      rnline: '',
      xnline: '',
      rpnlabel: '',
      xpnline: '',
      tmax: '',
      mlei: 'Al',
      bline: '',
      tline: '',
      bnline: '',
      bpnline: '',
    },
    systemTypes: [
      {
        value: '0',
        name: 'Copper',
      },
    ],
    materials: [
      {
        value: 'As',
        name: 'ACSR',
      },
      {
        value: 'Al',
        name: 'Aluminio',
      },
      {
        value: 'Cu',
        name: 'Cobre',
      },
    ],
    cableTypes: [
      {
        value: '0',
        name: 'Cable',
      },
      {
        value: '1',
        name: 'Overhead Line',
      },
    ],
    phases: [
      {
        value: '0',
        name: '1',
      },
      {
        value: '1',
        name: '2',
      },
      {
        value: '2',
        name: '3',
      },
    ],
    numberOfNeutrals: [
      {
        value: '0',
        name: '0',
      },
      {
        value: '1',
        name: '1',
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
  },
})
export default class TypLne extends Vue.with(Props) {
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
        const newKey = key.split('(').shift() || '';
        acc[newKey] = newForm[key as keyof TypesListU] === -1 ? '0' : newForm[key as keyof TypesListU];
        return acc;
      }, {}),
    };
  }
}
</script>
