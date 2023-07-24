<template>
  <HeaderNav/>
  <SidebarStandard/>
  <h2 style="text-align: center">All Data</h2>
  <PaginationNav @updateElement="updateList" @init_parent="init" from="L"/>
  <TableStandard v-if="first_load" :head="header" :filteredList="item" custom-class="extend"/>
  <div v-if="item.length < 1">
    <p style="text-align: center">No Data Found...</p>
  </div>
</template>

<script>
  import HeaderNav from "@/components/HeaderNav";
  import SidebarStandard from "@/components/standard/SidebarStandard";
  import TableStandard from "@/components/standard/TableStandard";
  import {onMounted, ref} from "vue";
  import {useListAll} from "@/composable/useList";
  import PaginationNav from "@/components/PaginationNav";
  export default {
    name: "ListPage",
    title: "List",
    components: {
      PaginationNav,
      SidebarStandard,
      HeaderNav,
      TableStandard
    },
    setup() {
      const header = ref([
        {"Name": "date", "Sort": true, "Order": ""},
        {"Name": "description", "Sort": true, "Order": ""},
        {"Name": "category", "Sort": true, "Order": ""},
        {"Name": "amount", "Sort": true, "Order": ""}
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
        item.value = await useListAll();
        first_load.value = true;
      }

      const updateList = async (filter = ['', '', '', '', '', '']) => {
        item.value = await useListAll(filter);
      };

      return {header, item, first_load, updateList, init};
    }
  }
</script>
