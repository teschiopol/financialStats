<template>
  <div></div>
</template>

<script>
  export default {
    name: "NotFoundPage",
    mounted(){
      let user = localStorage.getItem('user-info');
      if(!user){
        this.$router.push({name:"Login"});
      }else{
        this.$router.push({name:"Home"});
      }
    }
  }
</script>
