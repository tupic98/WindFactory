<template>
  <div>
    <table>
      <thead>
        <tr>
          <typ-lne-header></typ-lne-header>
        </tr>
      </thead>
      <tbody>
        <typ-lne-content @openModal="openModal"></typ-lne-content>
      </tbody>
    </table>
    <!-- TODO: Add Type Form -->
    <div>
      <typ-lne-modal v-if="isModalOpen" @closeModal="closeModal"></typ-lne-modal>
    </div>
  </div>
</template>

<script>
import TypLneHeader from './grid-headers/TypLneHeader.vue';
import TypLneContent from './grid-content/TypLneContent.vue';
import TypLneModal from './modals/TypLneModal.vue';

export default {
  components: {
    TypLneHeader,
    TypLneContent,
    TypLneModal,
  },

  // TODO: Missing return type
  data() {
    const isModalOpen = false;
    return {
      isModalOpen,
    };
  },

  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
