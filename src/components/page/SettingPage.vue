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
  </div>
</template>

<script>
import router from "@/routers";
import HeaderNav from "@/components/HeaderNav";
import SidebarStandard from "@/components/standard/SidebarStandard";
import ButtonStandard from "@/components/standard/ButtonStandard";
import {ref} from "vue";

export default {
  name: "SettingPage",
  components: {ButtonStandard, SidebarStandard, HeaderNav},
  title: "Settings",
  setup() {
    const lang_label = ref('Attuale: IT 🇮🇹');

    let languageStorage = localStorage.getItem('user-lang');
    if (languageStorage) {
      lang_label.value = languageStorage;
    }

    let user = localStorage.getItem('user-info');
    if (!user) {
      router.push({name: "Login"});
    }

    /*
    const save = () => {
      let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent((localStorage.getItem('list')));
      let downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", "financialStat.json");
      document.body.appendChild(downloadAnchorNode);
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    };
     */

    const changeLanguage = () => {
      // TODO: language change
      if (lang_label.value.includes('IT')) {
        lang_label.value = 'Current: EN 🇬🇧';
      } else {
        lang_label.value = 'Attuale: IT 🇮🇹';
      }
      localStorage.setItem('user-lang', lang_label.value);
    }

    return {changeLanguage, lang_label};
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
