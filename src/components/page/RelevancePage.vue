<template>
  <HeaderNav/>
  <SidebarStandard/>
  <h2 style="text-align: center">Relevance</h2>
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
      const header = ref([
        {"Name": "name", "Sort": true, "Order": ""},
        {"Name": "description", "Sort": false},
        {"Name": "total", "Sort": true, "Order": ""},
      ]);

      const item = ref([]);

      const init = async () => {
        item.value = await useRelevance();
      }

      init();

      return {header, item};
    }
  }
</script>
