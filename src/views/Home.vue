<template>
  <div>
    <types-table/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TypesGrid from '@/components/TypesGrid.vue'; // @ is an alias to /src

@Options({
  components: {
    TypesGrid,
  },
})
export default class Home extends Vue {}
</script>
