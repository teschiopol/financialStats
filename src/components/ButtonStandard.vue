<template>
  <button class="button" :class="typeClass" >{{label}}</button>
</template>

<script>
  export default {
    name: "ButtonStandard",
    props: {
      label: String,
      typeClass: {
        type: String,
        default: 'typeOne'
      }
    }
  }
</script>

<style scoped>
  .button {
    background-color: var(--darkcyan);
    border: none;
    color: var(--aliceblue);
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: 15px;
  }
  .typeOne {
    background-color: var(--aliceblue);
    color: var(--darkcyan);
    border: 2px solid var(--darkcyan);
  }
  .typeOne:hover {
    background-color: var(--darkcyan);
    color: var(--aliceblue);
  }
  .typeOne:active{
    background-color: var(--cyan);
  }
  .typeTwo {
    background-color: var(--aliceblue);
    color: var(--darkred);
    border: 2px solid var(--darkred);
    float: right;
  }
  .typeTwo:hover {
    background-color: var(--darkred);
    color: var(--aliceblue);
  }
  .typeTwo:active{
    background-color: var(--red);
  }
</style>
