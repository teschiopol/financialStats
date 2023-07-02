<template>
  <HeaderNav/>
  <SidebarStandard/>
  <h2 style="text-align: center">Setting</h2>
  <div class="container">
    <div class="row">Delete all your data forever!</div>
    <div style="margin: auto">
      <ButtonStandard label="Clear Data" @click="clear()"/>
    </div>
    <hr style="border-top: 0 solid #bbb;">
    <hr style="border-top: 0 solid #bbb;">
    <div class="row">Download your data in JSON file.</div>
    <div style="margin: auto">
      <ButtonStandard label="Download Data" @click="save()"/>
    </div>
  </div>


</template>

<script>
  // TODO: language change
  // TODO: confirm on click
  import router from "@/routers";
  import HeaderNav from "@/components/HeaderNav";
  import SidebarStandard from "@/components/standard/SidebarStandard";
  import ButtonStandard from "@/components/standard/ButtonStandard";
  export default {
    name: "SettingPage",
    components: {ButtonStandard, SidebarStandard, HeaderNav},
    title: "Settings",
    setup() {
      let user = localStorage.getItem('user-info');
      if (!user) {
        router.push({name: "Login"});
      }

      const clear = () => {
        localStorage.setItem('list', null);
        console.log(localStorage.getItem('list'));
      }

      const save = () => {
        let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent((localStorage.getItem('list')));
        let downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "financialStat.json");
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
      }
      return {clear, save};
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
