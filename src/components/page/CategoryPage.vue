<template>
  <HeaderNav/>
  <SidebarStandard/>
  <h2 style="text-align: center">Categories</h2>
  <PaginationNav @updateElement="updateList" from="C"/>
  <TableStandard :head="header" :filteredList="item" />
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
        {"Name": "Name", "Sort": true, "Order": ""},
        {"Name": "Description", "Sort": false},
        {"Name": "Relevance", "Sort": true, "Order": ""},
        {"Name": "Total", "Sort": true, "Order": ""}
      ]);

      onMounted(() => {
        let user = localStorage.getItem('user-info');
        if (!user) {
          this.$router.push({name: "Login"});
        }
      });

      const item = ref([]);
      item.value = useCategory();

      const updateList = (filter = ['', '', '', '', '']) => {
        item.value = useCategory(filter);
      };

      return {header, item, updateList};
    }
  }
</script>
