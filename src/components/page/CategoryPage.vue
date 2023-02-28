<template>
  <HeaderNav/>
  <PaginationNav/>
  <TableStandard :head="header" :filteredList="item" />
</template>

<script>
  import HeaderNav from "@/components/HeaderNav";
  import PaginationNav from "@/components/PaginationNav";
  import TableStandard from "@/components/standard/TableStandard";
  import {ref} from "vue";
  export default {
    name: "CategoryPage",
    title: "Category",
    components: {
      PaginationNav,
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

      const item = ref([
        { Name: "Casa", Description: "Home, utilities, rent",  Relevance: "Essential", Total: 40.22},
        { Name: "Auto", Description: "Car, fuel",  Relevance: "Essential", Total: 23.0},
        { Name: "Extra", Description: "Everything extra",  Relevance: "Useless", Total: 100},
        { Name: "Gym", Description: "Gym, integrator",  Relevance: "Useful", Total: 34.00}
      ]);

      return {header, item};
    }
  }
</script>
