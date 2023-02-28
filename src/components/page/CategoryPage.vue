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
      const header = ref([
        {"Name":"Code", "Sort":true, "Order":""},
        {"Name":"Name","Sort":true, "Order":""},
        {"Name":"Description","Sort":false},
        {"Name":"Total","Sort":true, "Order":""}
      ]);

      const item = ref([
        { Code: "ESS", Name: "Essential",  Description: "You need it to live", Total: 4},
        { Code: "USE", Name: "Useful",  Description: "It can improve your life", Total: 23}
      ]);

      return {header, item};
    }
  }
</script>
