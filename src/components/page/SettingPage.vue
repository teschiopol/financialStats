<template>
  <HeaderNav/>
  <SidebarStandard/>
  <h2 style="text-align: center">Setting</h2>
  <div class="container">
    <div class="row">Change Language</div>
    <div style="margin: auto">
      <ButtonStandard :label="lang_label" @click="changeLanguage()"/>
    </div>
    <hr style="border-top: 0 solid #bbb;">
    <hr style="border-top: 0 solid #bbb;">
    <div class="row">Download your data in JSON file.</div>
    <div style="margin: auto">
      <ButtonStandard label="Download Data" @click="save()"/>
    </div>
    <hr style="border-top: 0 solid #bbb;">
    <hr style="border-top: 0 solid #bbb;">
    <div class="row">Delete all your data forever!</div>
    <div style="margin: auto">
      <ButtonStandard label="Clear Data" @click="toggleModal"/>
    </div>
  </div>

  <ModalComponent @close="toggleModal" :isOpen="isOpen" @del="clear" operation="D">
    <div class="modal-content">
      <h2>Clear Data</h2>
      <div>
        Sei sicuro di voler eliminare tutti i dati?
      </div>
    </div>
  </ModalComponent>

</template>

<script>
import router from "@/routers";
import HeaderNav from "@/components/HeaderNav";
import SidebarStandard from "@/components/standard/SidebarStandard";
import ButtonStandard from "@/components/standard/ButtonStandard";
import {ref} from "vue";
import ModalComponent from "@/components/standard/ModalStandard";

export default {
  name: "SettingPage",
  components: {ButtonStandard, SidebarStandard, HeaderNav, ModalComponent},
  title: "Settings",
  setup() {

    const isOpen = ref(false);
    const lang_label = ref('Current: IT 🇮🇹');

    let user = localStorage.getItem('user-info');
    if (!user) {
      router.push({name: "Login"});
    }

    const clear = () => {
      localStorage.setItem('list', null);
      console.log(localStorage.getItem('list'));
      toggleModal();
    };

    const save = () => {
      let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent((localStorage.getItem('list')));
      let downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", "financialStat.json");
      document.body.appendChild(downloadAnchorNode);
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    };

    const toggleModal = () => {
      isOpen.value = !isOpen.value;
    };

    const changeLanguage = () => {
      // TODO: language change
      if (lang_label.value.includes('IT')) {
        lang_label.value = 'Current: EN 🇬🇧';
      } else {
        lang_label.value = 'Current: IT 🇮🇹';
      }
    }

    return {clear, save, toggleModal, changeLanguage, isOpen, lang_label};
  }

}
</script>

<style scoped>
  .container {
    display: grid;
    grid-template-columns: 66% 33%;
    margin: auto 10%;
  }

  .row {
    padding: 10px;
    margin: auto 0;
    border-bottom: 1px solid;
  }
</style>
