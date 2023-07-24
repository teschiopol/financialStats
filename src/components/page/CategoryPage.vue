<template>
  <HeaderNav/>
  <SidebarStandard/>
  <h2 style="text-align: center">Categories</h2>
  <PaginationNav @updateElement="updateList" @init_parent="init" from="C"/>
  <TableStandard v-if="first_load" :head="header" :filteredList="item"/>
</template>

<script>
  import HeaderNav from "@/components/HeaderNav";
  import TableStandard from "@/components/standard/TableStandard";
  import {onMounted, ref} from "vue";
  import SidebarStandard from "@/components/standard/SidebarStandard";
  import PaginationNav from "@/components/PaginationNav";
  import {useCategory} from "@/composable/useCategory";
  export default {
    name: "CategoryPage",
    title: "Category",
    components: {
      SidebarStandard,
      HeaderNav,
      TableStandard,
      PaginationNav
    },
    setup() {
      const header = ref([
        {"Name": "name", "Sort": true, "Order": ""},
        {"Name": "description", "Sort": false},
        {"Name": "relevance", "Sort": true, "Order": ""},
        {"Name": "total", "Sort": true, "Order": ""}
      ]);

      onMounted(() => {
        let user = localStorage.getItem('user-info');
        if (!user) {
          this.$router.push({name: "Login"});
        }
      });

      const first_load = ref(false);

      const item = ref([]);

      const init = async () => {
        item.value = await useCategory();
        first_load.value = true;
      }

      const updateList = async (filter = ['', '', '', '', '']) => {
        item.value = await useCategory(filter);
      };

      return {header, item, first_load, updateList, init};
    }
  }
</script>
