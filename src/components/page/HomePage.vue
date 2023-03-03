<template>
  <HeaderNav/>
  <div style="width:35%; display:inline-block;">
    <CardStandard :relevance="relevance"/>
  </div>
  <div style="width:65%; display:inline-block;">
    <ChartStandard :configuration="config"/>
  </div>
</template>

<script>
  // TODO: password check strength
  // TODO: sign up with Google
  import HeaderNav from "@/components/HeaderNav";
  import CardStandard from "@/components/standard/CardStandard";
  import {onMounted, ref} from "vue";
  import ChartStandard from "@/components/standard/ChartStandard";
  export default {
    name: "HomeBase",
    title: "Home",
    components: {
      ChartStandard,
      CardStandard,
      HeaderNav
    },
    setup(){

  // TODO: api get cookie token auth
      let user = localStorage.getItem('user-info');
      if(!user){
        this.$router.push({name:"Login"});
      }

      const relevance = ref([
        {id:"Essentials", value:40}, {id:"Useful",value:39}, {id:"Useless",value:14}, {id:"Regret",value:7}
      ]);

      const config = {
        type: 'bar',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3, 18, 32, 21, 21, 6, 33],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      };

      onMounted(() => {
        const ctx = document.getElementById('myChart');
        ctx.style.maxHeight = '400px';
      })

      return {relevance, config};
    }
  }
</script>

<style scoped>
  .chartContainer{
    padding: 0 50px 0 0;
  }
</style>
