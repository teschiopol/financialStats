<template>
  <div class="navbar" :class="{'informative': logged}">
    <div></div>
    <div>
      <a class="basic" href="https://www.unicorne.it/" target="_blank">Develop by Unicorne 🦄</a>
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
  .informative{
    height: 2em;
  }
</style>
