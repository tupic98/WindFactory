<template>
  <div>
    <div class="mt-1 relative">
      <button
        type="button"
        class="relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        :class="[modelValue === 'wind_disabled' ? 'cursor-not-allowed bg-gray-300' : 'cursor-pointer bg-white']"
        aria-haspopup="listbox"
        aria-expanded="true"
        :aria-labelledby="name"
        :disabled="modelValue === 'wind_disabled'"
        @click.prevent="toggleSelect"
      >
        <span class="block truncate">
          {{ items.length ? items.find((i) => i.value === modelValue).name === 'wind_disabled' || items.find((i) => i.value === modelValue).name === '' ? 'Deshabilitado' : items.find((i) => i.value === modelValue).name : '' }}
        </span>
        <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <!-- Heroicon name: solid/selector -->
          <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </span>
      </button>
      <ul v-if="context.show" v-click-away="onClickOutside" class="absolute z-20 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" tabindex="-1" role="listbox" :aria-labelledby="name" aria-activedescendant="listbox-option-3">
        <!--
          Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

          Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
        -->
        <template v-for="(item, i) in items" :key="i">
          <li v-if="item.value" class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 group hover:text-white hover:bg-indigo-600 transition duration-100 ease-in-out" :id="`listbox-option-${i}`" role="option" @click.prevent="updateValue(item.value)">
          <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
            <span class="font-normal block truncate" :class="{ 'font-semibold': item.value === modelValue }">
              {{ item.name }}
            </span>

            <!--
              Checkmark, only display for selected option.

              Highlighted: "text-white", Not Highlighted: "text-indigo-600"
            -->
            <span v-if="item.value === modelValue" class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4 group-hover:text-white transition duration-100 ease-in-out">
              <!-- Heroicon name: solid/check -->
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </span>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import {
  Options, Vue, prop, setup,
} from 'vue-class-component';
import {
  PropType, toRefs, reactive,
} from 'vue';

interface Item {
  value: string;
  name: string;
}

class Props {
  items = prop({
    type: Array as PropType<Array<Item>>,
    default: () => ([]),
  });

  name = prop({
    type: String,
    default: '',
  });

  label = prop({
    type: String,
    default: '',
  });

  modelValue = prop({
    type: String,
    default: '0',
  });

  disabled = prop({
    type: Boolean,
    default: false,
  });
}

const useContext = () => {
  const state = reactive({
    show: false,
  });

  return {
    ...toRefs(state),
  };
};

@Options({
  methods: {
    updateValue(value: number) {
      this.$emit('update:modelValue', value);
      this.context.show = false;
    },
    onClickOutside() {
      this.context.show = false;
    },
  },
})
export default class CustomSelect extends Vue.with(Props) {
  context = setup(() => useContext());

  toggleSelect(): void {
    if (!this.disabled) {
      this.context.show = !this.context.show;
    }
  }
}
</script>
