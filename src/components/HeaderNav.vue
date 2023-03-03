<template>
  <div class="navbar" :class="{'informative': logged}">
    <div></div>
    <div>
      <a class="basic" href="https://www.unicorne.it/" target="_blank">Develop by Unicorne 🦄</a>
    </div>
    <div>
      <button class="button" @click="toggle(!isDarkMode)">{{isDarkModeLabel}}</button>
    </div>
  </div>
</template>

<script>
  import {onMounted, ref} from "vue";
  export default {
    name: "HeaderNav",
    props: {
      logged: {
        type: Boolean,
        default: true
      }
    },
    setup(){
      const isDarkMode = ref(false);
      const isDarkModeLabel = ref("Light");
  // TODO: dark mode
      const toggle = (payload) => {
        isDarkMode.value = payload;
        isDarkModeLabel.value = payload ? 'Dark' : 'Light';
        //document.documentElement.className = payload;
        localStorage.setItem('theme', payload);
      };

      onMounted(() => {
        toggle(JSON.parse(localStorage.getItem('theme')));
      });

      return{isDarkMode, isDarkModeLabel, toggle}
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
  .button{
    background-color: var(--aliceblue);
    border: none;
    color: var(--darkcyan);
    padding: 2px 10px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }
</style>
