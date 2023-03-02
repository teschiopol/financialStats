<template>
  <HeaderNav/>
  <div style="width:50%; display:inline-block;">
    <CardStandard :relevance="relevance"/>
  </div>
  <div style="width:50%; display:inline-block;">

  </div>
</template>

<script>
  // TODO: password check strength
  // TODO: sign up with Google
  import HeaderNav from "@/components/HeaderNav";
  import CardStandard from "@/components/standard/CardStandard";
  import {ref} from "vue";
  export default {
    name: "HomeBase",
    title: "Home",
    components: {
      CardStandard,
      HeaderNav
    },
    setup(){
      const relevance = ref([
        {id:"Essentials", value:40}, {id:"Useful",value:39}, {id:"Useless",value:14}, {id:"Regret",value:7}
      ]);
      return {relevance};
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
