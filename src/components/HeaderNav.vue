<template>
  <div class="navbar" v-if="!logged">
    <div></div>
    <div>
      <a class="basic" href="https://www.unicorne.it/" target="_blank">Develop by Unicorne 🦄</a>
    </div>
  </div>
  <div class="navbar" v-if="logged">
    <div style="width: 15%">
      <router-link to="/" class="basic" >Home 🏠</router-link>
    </div>
    <div style="width: 15%">
      <router-link to="/list" class="basic" >List 📊</router-link>
    </div>
    <div style="width: 15%">
      <router-link to="/category" class="basic">Category 📚</router-link>
    </div>
    <div style="width: 15%">
      <router-link to="/relevance" class="basic">Relevance 🧮</router-link>
    </div>
    <div style="width: 20%"></div>
    <div @click="logout" style="width: 20%">
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
  .navbar > div{
    width: 33%;
    text-align: center;
    margin: auto 0;
  }
</style>
