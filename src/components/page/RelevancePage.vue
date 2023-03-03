<template>
  <HeaderNav/>
  <SidebarStandard/>
  <TableStandard :head="header" :filteredList="item" />
</template>

<script>
  import HeaderNav from "@/components/HeaderNav";
  import TableStandard from "@/components/standard/TableStandard";
  import {ref} from "vue";
  import SidebarStandard from "@/components/standard/SidebarStandard";
  export default {
    name: "RelevancePage",
    title: "Relevance",
    components: {
      SidebarStandard,
      TableStandard,
      HeaderNav
    },
    mounted() {
      let user = localStorage.getItem('user-info');
      if (!user) {
        this.$router.push({name: "Login"});
      }
    },
    setup(){
  // TODO: retrieve by api. Name colum as head, data es item
      const header = ref([
        {"Name":"Name","Sort":true, "Order":""},
        {"Name":"Description","Sort":false},
        {"Name":"Value", "Sort":true, "Order":""},
      ]);

      const item = ref([
        { Name: "Essential",  Description: "You need it to live", Value: "5"},
        { Name: "Useful",  Description: "It can improve your life", Value: "4"},
        { Name: "Useless",  Description: "You can live without it", Value: "2"},
        { Name: "Regret",  Description: "I want my money back", Value: "0"}
      ]);

      return {header, item};
    }
  }
</script>

<style scoped>

</style>
