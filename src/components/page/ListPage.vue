<template>
  <HeaderNav/>
  <SidebarStandard/>
  <PaginationNav/>
</template>

<script>
  import HeaderNav from "@/components/HeaderNav";
  import PaginationNav from "@/components/PaginationNav";
  import SidebarStandard from "@/components/standard/SidebarStandard";
  import router from "@/routers";
  export default {
    name: "ListPage",
    title: "List",
    components: {
      SidebarStandard,
      PaginationNav,
      HeaderNav
    },
    setup() {
      let user = localStorage.getItem('user-info');
      if (!user) {
        router.push({name:"Login"});
      }
    }
  }
</script>
