<template>
  <HeaderNav/>
</template>

<script>
  // TODO: sign up
  // TODO: password check strength
  // TODO: sign up with google
  import HeaderNav from "@/components/HeaderNav";
  export default {
    name: "HomeBase",
    title: "Home",
    components: {
      HeaderNav
    },
    mounted() {
  // TODO: api get cookie token auth
      let user = localStorage.getItem('user-info');
      if(!user){
        this.$router.push({name:"Login"});
      }
    }
  }
</script>
