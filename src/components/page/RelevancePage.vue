<template>
  <HeaderNav/>
  <TableStandard :head="header" :filteredList="item" />
</template>

<script>
  import HeaderNav from "@/components/HeaderNav";
  import TableStandard from "@/components/standard/TableStandard";
  import {ref} from "vue";
  export default {
    name: "RelevancePage",
    title: "Relevance",
    components: {
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
        {"Name":"Code", "Sort":true, "Order":""},
        {"Name":"Name","Sort":true, "Order":""},
        {"Name":"Description","Sort":false}
      ]);

      const item = ref([
        { Code: "ESS", Name: "Essential",  Description: "You need it to live"},
        { Code: "USE", Name: "Useful",  Description: "It can improve your life"},
        { Code: "INUSE", Name: "Useless",  Description: "You can live without it"},
        { Code: "REG", Name: "Regret",  Description: "I want my money back"}
      ]);

      return {header, item};
    }
  }
</script>

<style scoped>
  #tableComponent{
    margin-top: 4em;
  }
</style>
