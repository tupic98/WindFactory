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
                    <label for="uline(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Rated Voltage
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['uline(r)']"
                          type="text"
                          name="uline(r)"
                          id="uline(r)"
                          :disabled="!context.form['uline(r)']"
                        />
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span class="text-gray-500 sm:text-sm">
                            kV
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 md:mt-0 md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="sline(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Rated Current (In Ground)
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['sline(r)']" type="text" name="sline(r)" id="sline(r)" :disabled="!context.form['sline(r)']"/>
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span class="text-gray-500 sm:text-sm">
                            kA
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="InomAir(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Rated Current (In Air)
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['InomAir(r)']" type="text" name="InomAir(r)" id="InomAir(r)" :disabled="!context.form['InomAir(r)']" />
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
                    <label for="cohl_(i)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Cable / OHL
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-select v-model="context.form['cohl_(i)']" name="cohl_(i)" :items="context.cableTypes" :disabled="!context.form['cohl_(i)']" />
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 md:mt-0 md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="systp(i)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      System Type
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-select v-model="context.form['systp(i)']" name="systp(i)" :items="context.systemTypes" :disabled="!context.form['systp(i)']"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="space-y-6 md:space-y-5">
                <div class="md:grid md:grid-cols-4 md:gap-4 md:items-start md:border-t md:border-gray-200 md:pt-5">
                  <div class="md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="nlnph(i)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Phases
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-select v-model="context.form['nlnph(i)']" name="nlnph(i)" :items="context.phases" :disabled="!context.form['nlnph(i)']" />
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 md:mt-0 md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="nneutral(i)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Number of neutrals
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-select v-model="context.form['nneutral(i)']" name="nneutral(i)" :items="context.numberOfNeutrals" :disabled="!context.form['nneutral(i)']"/>
                      </div>
                    </div>
                  </div>
                </div>
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
                    <label for="rline(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      AC-Resistance R'(20°C)
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['rline(r)']" type="text" name="rline(r)" id="rline(r)" :disabled="!context.form['rline(r)']" />
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
                    <label for="xline(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Reactance X'
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['xline(r)']" type="text" name="xline(r)" id="xline(r)" :disabled="!context.form['xline(r)']"/>
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
                    <label for="rline0(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      AC-Resistance R0'
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['rline0(r)']" type="text" name="rline0(r)" id="rline0(r)" :disabled="!context.form['rline0(r)']" />
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
                    <label for="xline0(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Reactance X0'
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['xline0(r)']" type="text" name="xline0(r)" id="xline0(r)" :disabled="!context.form['xline0(r)']" />
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
                    <label for="rnline(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      AC-Resistance Rn'
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['rnline(r)']" type="text" name="rnline(r)" id="rnline(r)" :disabled="!context.form['rnline(r)']" />
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
                    <label for="xnline(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Reactance Xn'
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['xnline(r)']" type="text" name="xnline(r)" id="xnline(r)" :disabled="!context.form['xnline(r)']" />
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
                    <label for="rpnline(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      AC-Resistance Rpn'
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['rpnline(r)']" type="text" name="rpnline(r)" id="rpnline(r)" :disabled="!context.form['rpnline(r)']" />
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
                    <label for="xpnline(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Reactance Xpn'
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['xpnline(r)']" type="text" name="xpnline(r)" id="xpnline(r)" :disabled="!context.form['xpnline(r)']" />
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
                    <label for="tmax(r)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Max Operating Temperature
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-input v-model="context.form['tmax(r)']" type="text" name="tmax(r)" id="tmax(r)" :disabled="!context.form['tmax(r)']" />
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span class="text-gray-500 sm:text-sm">
                            degC
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 md:mt-0 md:col-span-2 md:grid md:grid-cols-3 md:gap-4 md:items-start">
                    <label for="mlei(a:2)" class="block text-sm font-medium text-gray-700 md:mt-px md:pt-2">
                      Conductor material
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
                        <custom-select v-model="context.form['mlei(a:2)']" name="mlei(a:2)" :items="context.materials" :disabled="!context.form['mlei(a:2)']" />
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
      'InomAir(r)': '',
      'bline(r)': '',
      'bline0(r)': '',
      'bnline(r)': '',
      'bpnline(r)': '',
      'cohl_(i)': '0',
      'frnom(r)': '',
      'loc_name(a:40)': '',
      'mlei(a:2)': 'Al',
      'nlnph(i)': '0',
      'nneutral(i)': '0',
      'rline(r)': 0,
      'rline0(r)': '',
      'rnline(r)': '',
      'rpnline(r)': '',
      'sline(r)': '',
      'systp(i)': '0',
      'tline(r)': '',
      'tline0(r)': '',
      'tmax(r)': '',
      'uline(r)': '',
      'xline(r)': '',
      'xline0(r)': '',
      'xnline(r)': '',
      'xpnline(r)': '',
    }),
  })
}

const useContext = () => {
  const state: State = reactive({
    selectedTab: 'general',
    form: {
      'ID(a:40)': '',
      'InomAir(r)': '',
      'bline(r)': '',
      'bline0(r)': '',
      'bnline(r)': '',
      'bpnline(r)': '',
      'cohl_(i)': '0',
      'frnom(r)': '',
      'loc_name(a:40)': '',
      'mlei(a:2)': 'Al',
      'nlnph(i)': '0',
      'nneutral(i)': '0',
      'rline(r)': 0,
      'rline0(r)': '',
      'rnline(r)': '',
      'rpnline(r)': '',
      'sline(r)': '',
      'systp(i)': '0',
      'tline(r)': '',
      'tline0(r)': '',
      'tmax(r)': '',
      'uline(r)': '',
      'xline(r)': '',
      'xline0(r)': '',
      'xnline(r)': '',
      'xpnline(r)': '',
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
    materials: [
      {
        value: '',
        name: '',
      },
      {
        value: 'wind_disabled',
        name: 'wind_disabled',
      },
      {
        value: 'As',
        name: 'ACSR (As)',
      },
      {
        value: 'Al',
        name: 'Aluminio (Al)',
      },
      {
        value: 'Cu',
        name: 'Cobre (Cu)',
      },
    ],
    cableTypes: [
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
        name: 'Cable (0)',
      },
      {
        value: '1',
        name: 'Overhead Line (1)',
      },
    ],
    phases: [
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
        name: '1 (0)',
      },
      {
        value: '1',
        name: '2 (1)',
      },
      {
        value: '2',
        name: '3 (2)',
      },
    ],
    numberOfNeutrals: [
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
        name: '0 (0)',
      },
      {
        value: '1',
        name: '1 (1)',
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
      'rline(r)': +this.context.form['rline(r)'],
      'rline0(r)': +this.context.form['rline0(r)'],
    }));
    this.$emit('save:types', { form: newTypes });
    this.$router.go(-1);
  }
}
</script>
