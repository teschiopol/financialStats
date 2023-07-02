<template>
  <HeaderNav/>
  <SidebarStandard/>
  <h2 style="text-align: center">Setting</h2>
  <div class="container">
    <div class="row">
      <p>Delete all your data forever!</p>
      <p>Download your data in JSON file.</p>
    </div>
    <div class="row">

      <button @click="clear()" style="margin-bottom: 16px" >Clear Data</button>
      <br>
      <button @click="save()" >Download Data</button>
    </div>
  </div>

</template>

<script>
  // TODO: language change
  // TODO: save
  // TODO: confirm on click
  import router from "@/routers";
  import HeaderNav from "@/components/HeaderNav";
  import SidebarStandard from "@/components/standard/SidebarStandard";
  export default {
    name: "SettingPage",
    components: {SidebarStandard, HeaderNav},
    title: "Settings",
    setup() {
      let user = localStorage.getItem('user-info');
      if (!user) {
        router.push({name:"Login"});
      }

      const clear = () => {
        localStorage.setItem('list', null);
        console.log(localStorage.getItem('list'));
      }

      const save = () => {
        // https://stackoverflow.com/questions/19721439/download-json-object-as-a-file-from-browser
      }
      return {clear, save};
    }
  }
</script>

<style scoped>
  .container {
    margin-top: 2em;
    position: relative;
  }

  .row{
    width: 50%;
    left: 20%;
    position: relative;
    display: inline-block;
  }
</style>
