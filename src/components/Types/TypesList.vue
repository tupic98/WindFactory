<template>
  <div>
    <div class="flow-root mt-6 lg:px-24">
      <ul class="-my-5 divide-y divide-gray-200">
        <template v-for="(item, i) in list" :key="i">
          <li class="py-4">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <div class="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                <div class="text-lg font-bold text-white">{{ i + 1 }}</div>
              </div>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-lg font-medium text-gray-900 truncate">
                {{ item.name }}
              </p>
            </div>
            <div>
              <router-link tag="div" :to="{ path: `/tipos/${1}` }">
                <a class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
                  Editar
                </a>
              </router-link>
            </div>
          </div>
        </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component';
import { PropType } from 'vue';
import { TemporalTypesList } from './Types';

class Props {
  list = prop({
    type: Array as PropType<Array<TemporalTypesList>>,
    default: () => ([]),
  })
}

@Options({})
export default class TypesList extends Vue.with(Props) {}
</script>
