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
        <div class="input-container ic1" style="display: inline-block; width: 50%;">
          <input id="date" name="date" class="input" type="date" placeholder="" autocomplete="off" v-model="date" required />
          <div class="cut"></div>
          <label for="date" class="placeholder">Date</label>
        </div>
        <div class="input-container ic1"  style="display: inline-block; width: 50%;">
          <input id="amount" name="amount" class="input" type="number" min="0" placeholder="" autocomplete="off" v-model="amount" required />
          <div class="cut"></div>
          <label for="amount" class="placeholder">Amount</label>
        </div>
        <div class="input-container ic1">
          <input id="description" name="description" class="input" type="text" placeholder="" autocomplete="off" v-model="description" required/>
          <div class="cut"></div>
          <label for="description" class="placeholder">Description</label>
        </div>
        <div class="input-container ic1">
          <select class="input" v-model="category" required>
            <option value="">Seleziona</option>
            <option value="2">Auto</option>
            <option value="5">Gym</option>
          </select>
          <div class="cut"></div>
          <label for="category" class="placeholder">Category</label>
        </div>
      </form>
    </div>
  </ModalComponent>
</template>

<script>
  import ButtonStandard from "@/components/standard/ButtonStandard";
  import ModalComponent from "@/components/standard/ModalStandard";
  import {ref} from 'vue';
  export default {
    name: "PaginationNav",
    components: {ModalComponent, ButtonStandard},
    setup(){
      const isOpen = ref(false);
      const hideButton = ref(false);

      const cleanFields = () => {
        date.value = '';
        amount.value = '';
        description.value = '';
        category.value = '';
      };

      const toggleModal = () => {
        cleanFields();
        hideButton.value = false;
        isOpen.value = !isOpen.value;
      };

      const save = () => {
        let body = [];
        body['date'] = date.value;
        body['category'] = category.value;
        body['amount'] = amount.value;
        body['description'] = description.value;
        hideButton.value = true;
        cleanFields();
        isOpen.value = !isOpen.value;
      };

      let date = ref('');
      let amount = ref('');
      let description = ref('');
      let category = ref('');
      return {isOpen, toggleModal, save, date, amount, description, category, hideButton};
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
