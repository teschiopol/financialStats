<template>
  <HeaderNav/>
  <SidebarStandard/>
  <h2 style="text-align: center">All Data</h2>
  <PaginationNav/>
  <TableStandard :head="header" :filteredList="item" custom-class="extend"/>
</template>

<script>
  // TODO: select row two operation option
  import HeaderNav from "@/components/HeaderNav";
  import SidebarStandard from "@/components/standard/SidebarStandard";
  import TableStandard from "@/components/standard/TableStandard";
  import {ref} from "vue";
  import {useListAll} from "@/composable/useList";
  import PaginationNav from "@/components/PaginationNav";
  export default {
    name: "ListPage",
    title: "List",
    components: {
      PaginationNav,
      SidebarStandard,
      HeaderNav,
      TableStandard
    },
    mounted() {
      let user = localStorage.getItem('user-info');
      if (!user) {
        this.$router.push({name:"Login"});
      }
    },
    setup(){
      const header = ref([
        {"Name":"Date","Sort":true, "Order":""},
        {"Name":"Description","Sort":true, "Order":""},
        {"Name":"Category", "Sort":true, "Order":""},
        {"Name":"Amount","Sort":true, "Order":""}
      ]);

      const item = ref([]);
      item.value = useListAll();

      return {header, item};
    }
  }
</script>
