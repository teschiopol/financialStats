<template>
    <label for="check">{{label}}</label>
    <input type="checkbox" v-model="situation" @change="check()">
</template>

<script>
  import {ref} from "vue";

  export default {
    name: "CheckboxStandard",
    emits: ["disassemble"],
    props:{
      label: {
        type: String,
        default: "",
      }
    },
    setup(props, {emit}){

      const situation = ref(false);

      const check = () => {
        emit("disassemble", situation.value);
      };

      return{situation, check};
    }
  }
</script>

<style scoped>

</style>
