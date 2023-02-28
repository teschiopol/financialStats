<template>
  <div class="pagination">
    <div style="width: 30%; text-align: center; margin: auto 0">
      <ButtonStandard label="Create 🗒" @click="toggleModal"/>
    </div>
  </div>
  <ModalComponent @close="toggleModal" :isOpen="isOpen" @save="save" >
    <div class="modal-content">
      <h2>Create</h2>
      <form>
        <div class="input-container ic1">
          <input id="siteName" class="input" type="text" placeholder="" autocomplete="off" v-model="siteName" />
          <div class="cut"></div>
          <label for="siteName" class="placeholder">Name</label>
        </div>
      </form>
    </div>
  </ModalComponent>
</template>

<script>
  import ButtonStandard from "@/components/ButtonStandard";
  import ModalComponent from "@/components/ModalStandard";
  import {ref} from 'vue';
  export default {
    name: "PaginationNav",
    components: {ModalComponent, ButtonStandard},
    setup(){
      const isOpen = ref(false);
      const hideButton = ref(false);

      const cleanFields = () => {
        siteName.value = '';
      };

      const toggleModal = () => {
        cleanFields();
        hideButton.value = false;
        isOpen.value = !isOpen.value;
      };

      const save = () => {
        if(siteName.value !== ''){
          let body = [];
          body['siteName'] = siteName.value;
          hideButton.value = true;
        }
        cleanFields();
        isOpen.value = !isOpen.value;
      };

      let siteName = ref('');
      return {isOpen, toggleModal, save, siteName, hideButton};
    }
  }
</script>

<style scoped>
  .pagination{
    color: var(--darkcyan);
    height: 6em;
    display: flex;
    margin-top: 1em;
  }
</style>
