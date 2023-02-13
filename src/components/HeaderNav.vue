<template>
  <div class="navbar">
    <div style="width: 33%; text-align: center; margin: auto 0" v-if="logged">
      <a class="basic" href="">Home 🏠</a>
    </div>
    <div style="width: 33%" v-if="!logged"></div>
    <div style="width: 33%; text-align: center; margin: auto 0">
      <a class="basic" href="https://www.unicorne.it/" target="_blank">Develop by Unicorne 🦄</a>
    </div>
    <div style="width: 33%; text-align: center; margin: auto 0" v-if="logged" @click="logout">
      <a class="basic" href="">Logout 🔓</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HeaderNav",
    props: {
      logged: {
        type: Boolean,
        default: true
      }
    },
    setup(){

      const logout = () => {
        localStorage.clear();
        this.$router.push({name:"Login"});
      };

      return {logout};
    }
  }
</script>

<style scoped>
  .navbar{
    color: var(--aliceblue);
    background-color: var(--darkcyan);
    height: 3.5em;
    display: flex;
  }
</style>
