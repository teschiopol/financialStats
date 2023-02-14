<template>
  <HeaderNav/>
  <PaginationNav/>
</template>

<script>
  import HeaderNav from "@/components/HeaderNav";
  import PaginationNav from "@/components/PaginationNav";
  export default {
    name: "ListPage",
    components: {
      PaginationNav,
      HeaderNav
    },
    mounted() {
      let user = localStorage.getItem('user-info');
      if(!user){
        this.$router.push({name:"Login"});
      }
    }
  }
</script>
