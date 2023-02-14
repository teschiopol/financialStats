<template>
  <HeaderNav/>
</template>

<script>
  import HeaderNav from "@/components/HeaderNav";
  export default {
    name: "RelevancePage",
    components: {
      HeaderNav
    },
    mounted() {
      let user = localStorage.getItem('user-info');
      if (!user) {
        this.$router.push({name: "Login"});
      }
    }
  }
</script>
