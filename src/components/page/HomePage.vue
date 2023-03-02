<template>
  <HeaderNav/>
  <div style="width:50%; display:inline-block;">
    <CardStandard/>
  </div>
  <div style="width:50%; display:inline-block;">

  </div>
</template>

<script>
  // TODO: password check strength
  // TODO: sign up with Google
  import HeaderNav from "@/components/HeaderNav";
  import CardStandard from "@/components/standard/CardStandard";
  export default {
    name: "HomeBase",
    title: "Home",
    components: {
      CardStandard,
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
