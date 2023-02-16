<template>
  <div style="width:90%; margin: 30px auto auto;">
  <Vue3EasyDataTable
      :headers="headers"
      :items="items"
      alternating
      border-cell
  />
  </div>
</template>

<script >
  import Vue3EasyDataTable from 'vue3-easy-data-table';
  import {ref} from "vue";
  export default {
    name: "TableStandard",
    components: {Vue3EasyDataTable},
    props: ["header", "item"],
    setup(props) {
      const headers = ref(props.header);

      const items = ref(props.item);

      return { headers, items };
    }
  }
</script>
