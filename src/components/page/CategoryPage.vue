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
  import {useCategory} from "@/composable/useCategory";
  export default {
    name: "CategoryPage",
    title: "Category",
    components: {
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
  // TODO: retrieve by api. Name colum as head, data es item
  // TODO: filter
  // TODO: dynamic show total by month
      const header = ref([
        {"Name":"Name","Sort":true, "Order":""},
        {"Name":"Description","Sort":false},
        {"Name":"Relevance", "Sort":true, "Order":""},
        {"Name":"Total","Sort":true, "Order":""}
      ]);

      const item = ref([]);
      item.value = useCategory();

      return {header, item};
    }
  }
</script>
