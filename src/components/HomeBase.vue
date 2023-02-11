<template>
  <div>
    <HeaderNav/>
  </div>
</template>

<script>
  import HeaderNav from "@/components/HeaderNav";
  export default {
    name: "HomeBase",
    components: {
      HeaderNav
    },
    mounted() {
      // TODO: api get cookie token outh
      let user = localStorage.getItem('user-info');
      if(!user){
        this.$router.push({name:"Login"});
      }
    }
  }
</script>
