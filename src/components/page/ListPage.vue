<template>
  <HeaderNav/>
  <SidebarStandard/>
  <h2 style="text-align: center">All Data</h2>
  <PaginationNav @updateElement="updateList"/>
  <TableStandard :head="header" :filteredList="item" custom-class="extend"/>
  <div v-if="item.length < 1">
    <p style="text-align: center">No Data Found...</p>
  </div>
</template>

<script>
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
        {"Name":"Value","Sort":true, "Order":""}
      ]);

      const item = ref([]);
      item.value = useListAll();

      const updateList = () => {
        item.value = useListAll();
      };

      return {header, item, updateList};
    }
  }
</script>
