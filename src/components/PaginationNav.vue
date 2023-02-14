<template>
  <div class="pagination">
    <div style="width: 30%; text-align: center; margin: auto 0">
      <ButtonStandard label="Create 🗒" @click="toggleModal"/>
    </div>
  <!-- TODO: search autocomplete over 3 letters
    <div style="width: 30%; text-align: start; margin: auto 0">
      <ButtonStandard label="Search 🔎" />
    </div>
    -->
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
        <div class="input-container ic2">
          <input id="hostLink" class="input" type="text" placeholder="" autocomplete="off" v-model="hostLink" />
          <div class="cut"></div>
          <label for="hostLink" class="placeholder">Host Link</label>
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
        hostLink.value = '';
        siteName.value = '';
      };

      const toggleModal = () => {
        cleanFields();
        hideButton.value = false;
        isOpen.value = !isOpen.value;
      };

      const check = (value) => {
        return value !== '';
      };

      const save = () => {
        if(siteName.value !== '' && check(hostLink.value) ){
          let body = [];
          body['hostLink'] = hostLink.value;
          body['siteName'] = siteName.value;
          hideButton.value = true;
          fetch( 'https://neterprise.eniac.it/api/345bues/neterprise/server_handler.jsons', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json;charset=utf-8',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers' : 'Content-Type, Authorization, X-Requested-With'

            },
            body: JSON.stringify( body )
          })
          .then( function( response ){
            if( response.status !== 200 ){
              console.log(response.status);
            }else{
              console.log('Insert');
              window.location.reload();
            }
          })
        }
        cleanFields();
        isOpen.value = !isOpen.value;
      };

      let hostLink = ref('');
      let siteName = ref('');
      return {isOpen, toggleModal, save, hostLink, siteName, hideButton};
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
