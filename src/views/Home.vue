<template>
  <div>
    <types-table/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TypesTable from '@/components/TypesTable.vue'; // @ is an alias to /src

@Options({
  components: {
    TypesTable,
  },
})
export default class Home extends Vue {}
</script>
