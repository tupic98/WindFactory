<template>
  <div>
    <types-form />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TypesForm from '@/components/TypesForm/Index.vue';

@Options({
  components: {
    TypesForm,
  },
})
export default class TypesEditView extends Vue {}
</script>
