<template>
  <div>
    <HeaderNav/>
  </div>
</template>

<script>
  import HeaderNav from "@/components/HeaderNav";
  export default {
    name: "ListPage",
    components: {
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
