<template>
  <HeaderNav/>
  <TableStandard :header="header" :item="item" />
</template>

<script>
  import HeaderNav from "@/components/HeaderNav";
  import TableStandard from "@/components/TableStandard";
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
  // TODO: how to handle if sortable?
      const header = ref([
        { text: "Code", value: "code", sortable: true },
        { text: "Name", value: "name", sortable: true },
        { text: "Description", value: "description" }
      ]);

      const item = ref([
        { code: "ESS", name: "Essential",  description: "You need it to live"},
        { code: "USE", name: "Useful",  description: "It can improve your life"},
        { code: "INUSE", name: "Useless",  description: "You can live without it"},
        { code: "REG", name: "Regret",  description: "I want my money back"}
      ]);

      console.log(typeof item.value);
      console.log(item.value.sort((a, b) => a.code - b.code));

      return {header, item};
    }
  }
</script>
