<template>
  <tr v-for="(row, index) in tableContent" :key="index">
    <td v-for="(column, index) of row" :key="index" @click="$emit('openModal')">
      {{ column }}
    </td>
  </tr>
</template>

<script lang="ts">
export default {
  template: 'typlnecontent',

  // TODO: Missing return type
  data() {
    // TODO: Get content from backend
    // TODO: Create type for each table
    const tableContent = [
      {
        id: 1,
        loc_name: 'Element name',
      },
      {
        id: 2,
        loc_name: 'Another element name',
      },
    ];

    return {
      tableContent,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
