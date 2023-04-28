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
  import {useRelevance} from "@/composable/useRelevance";
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

      const item = ref([]);
      item.value = useRelevance();

      return {header, item};
    }
  }
</script>

<style scoped>

</style>
