<template>
  <div>
    <HeaderNav/>
  </div>
</template>

<script>
  // TODO: sign up
  // TODO: password check strength
  // TODO: sign up with google
  import HeaderNav from "@/components/HeaderNav";
  export default {
    name: "HomeBase",
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
