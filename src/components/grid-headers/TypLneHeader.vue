<template>
  <th v-for="(header, index) in tableHeaders" :key="index" >{{ header }}</th>
</template>

<script lang="ts">
export default {
  template: 'typlneheader',

  // TODO: Missing return type
  data() {
    // TODO: Get headers from backend
    const tableHeaders: string[] = [
      'ID(a:40)',
      'loc_name(a:40)',
    ];

    return {
      tableHeaders,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
