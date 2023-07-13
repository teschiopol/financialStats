<template>
  <HeaderNav/>
  <SidebarStandard/>
  <h2 style="text-align: center">Setting</h2>
  <div class="container">
    <div class="row">Change Language</div>
    <div style="margin: auto">
      <ButtonStandard :label="lang_label" @click="changeLanguage"/>
    </div>
    <hr style="border-top: 0 solid #bbb;">
    <hr style="border-top: 0 solid #bbb;">
    <div class="row">Download your data in JSON file.</div>
    <div style="margin: auto">
      <ButtonStandard label="Download Data" @click="save"/>
    </div>
    <hr style="border-top: 0 solid #bbb;">
    <hr style="border-top: 0 solid #bbb;">
    <div class="row">Delete all your data forever!</div>
    <div style="margin: auto">
      <ButtonStandard label="Clear Data" @click="setModal('D')" class="typeTwo"/>
    </div>
    <hr style="border-top: 0 solid #bbb;">
    <hr style="border-top: 0 solid #bbb;">
    <div class="row">Set a basic add end expense.</div>
    <div style="margin: auto">
      <ButtonStandard label="Reset Category" @click="setModal('R')" class="typeTwo"/>
    </div>
  </div>

  <ModalComponent @close="toggleModal" :isOpen="isOpen" @del="manageDel" operation="D">
    <div v-if="typeShow==='D'" class="modal-content">
      <h2>Clear Data</h2>
      <div>
        Are you sure to delete all your data?
      </div>
    </div>
    <div v-if="typeShow==='R'" class="modal-content">
      <h2>Reset Categories</h2>
      <div>
        Are you sure to delete all data in exceed?
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

    // TODO: add upload category and list
    // TODO: download category

    const isOpen = ref(false);
    const lang_label = ref('Current: IT 🇮🇹');
    const typeShow = ref('');

    let user = localStorage.getItem('user-info');
    if (!user) {
      router.push({name: "Login"});
    }

    const manageDel = () => {
      if (typeShow.value === 'D') {
        clear();
      }
      resetCategory();
      toggleModal();
    };

    const clear = () => {
      localStorage.setItem('list', null);
      localStorage.setItem('categories', null);
    };

    const resetCategory = () => {

      // TODO: remove all categories at 0; add the rest

      let cat = [];
      cat.push({
        "Name": "House",
        "Description": "Home, utilities, rent",
        "Relevance": "Essential",
        "Total": 0,
        "Index": 1
      });
      cat.push({
        "Name": "Add",
        "Description": "Balance, earnings, paycheck",
        "Relevance": "Add",
        "Total": 0,
        "Index": 2
      });

      localStorage.setItem('categories', JSON.stringify(cat));
    }

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

    const setModal = (type) => {
      typeShow.value = type;
      toggleModal();
    }

    return {manageDel, save, toggleModal, changeLanguage, setModal, isOpen, lang_label, typeShow};
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
