<template>
  <HeaderNav/>
  <SidebarStandard/>
  <h2 style="text-align: center">Setting</h2>
</template>

<script>
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
    }
  }
</script>

<style scoped>

</style>
