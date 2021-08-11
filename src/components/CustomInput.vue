<template>
  <input
    class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
    :class="[modelValue === 'wind_disabled' ? 'cursor-not-allowed bg-gray-300' : 'cursor-default bg-white']"
    :value="modelValue === 'wind_disabled' ? '' : modelValue"
    @input="updateValue($event.target.value)"
    :disabled="modelValue === 'wind_disabled'"
  >
</template>

<script lang="ts">
import {
  Options, Vue, prop,
} from 'vue-class-component';

class Props {
  modelValue = prop({});

  disabled = prop({
    type: Boolean,
    default: false,
  })
}

@Options({})
export default class CustomInput extends Vue.with(Props) {
  updateValue(value: any): void {
    this.$emit('update:modelValue', value);
  }
}
</script>
