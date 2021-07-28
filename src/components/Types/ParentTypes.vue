<template>
  <ul class="space-y-1">
    <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
    <template v-for="(item, i) in list" :key="i">
      <li class="text-gray-600 hover:bg-gray-100 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md cursor-pointer transition duration-300 ease-in-out" :class="{ 'bg-gray-100 text-gray-900': item.id === selectedParent }" aria-current="page" @click="$emit('update:parent', item.id)">
        <span class="truncate">
          {{ item.name }}
        </span>
      </li>
    </template>
  </ul>
</template>
<script lang="ts">
import {
  Options,
  Vue,
  prop,
  setup,
} from 'vue-class-component';
import { PropType, toRefs, reactive } from 'vue';
import { ParentTypesList } from './Types';

class Props {
  list = prop({
    type: Array as PropType<Array<ParentTypesList>>,
    default: () => ([]),
  })

  selectedParent = prop({
    type: String,
    default: '',
  })
}

const useContext = () => {
  const state = reactive({
  });

  return {
    ...toRefs(state),
  };
};

@Options({
  emits: ['update:parent'],
})
export default class ParentTypes extends Vue.with(Props) {
  context = setup(() => useContext());
}
</script>
