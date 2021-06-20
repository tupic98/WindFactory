<template>
  <div>
    <types />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Types from '@/components/Types/Index.vue';

@Options({
  components: {
    Types,
  },
})
export default class TypesView extends Vue {}
</script>
