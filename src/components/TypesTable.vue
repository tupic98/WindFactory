<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="(header, index) in tableHeaders" :key="index" >{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in tableContent" :key="index">
          <td v-for="(column, index) of row" :key="index" @click="openModal()">
            {{ column }}
          </td>
        </tr>
      </tbody>
    </table>
    <!-- TODO: Add Type Form -->
    <div>
      <transition name="fade">
        <div class="modal" v-if="isModalOpen">
          <div class="modal__backdrop" @click="openModal()"/>
          <div class="modal__dialog">
            <div class="modal__header">
              <button type="button" class="modal__close" @click="openModal()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                  <path
                    fill="currentColor"
                    d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l
                    -22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93
                    89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28
                    -12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19
                    0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07
                    100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19
                    0-44.48L242.72 256z"
                  ></path>
                </svg>
              </button>
            </div>

            <div class="modal__body">
              <slot name="body"/>
            </div>

            <div class="modal__footer">
              <slot name="footer"/>
            </div>

          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  // Missing return type
  data() {
    // TODO: Get headers from backend
    const tableHeaders: string[] = [
      'ID(a:40)',
      'loc_name(a:40)',
    ];
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
    const isModalOpen = false;
    return {
      tableHeaders,
      tableContent,
      isModalOpen,
    };
  },

  methods: {
    openModal(): void {
      this.isModalOpen = !this.isModalOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  &__backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  &__dialog {
    background-color: #ffffff;
    position: relative;
    width: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    z-index: 2;
    @media screen and (max-width: 992px) {
      width: 90%;
    }
  }
  &__close {
    width: 30px;
    height: 30px;
  }
  &__header {
    padding: 20px 20px 10px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  &__body {
    padding: 10px 20px 10px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  &__footer {
    padding: 10px 20px 20px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
