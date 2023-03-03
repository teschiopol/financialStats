<template>
  <HeaderNav/>
  <SidebarStandard />
  <div style="width:35%; display:inline-block;">
    <CardStandard :relevance="relevance"/>
  </div>
  <div style="width:65%; display:inline-block;">
    <ChartStandard :configuration="config" :key="ch"/>
    <div style="display: inline-block;">
      <ButtonStandard :label="label" @click="changeChart"/>
    </div>
    <div style="display: inline-block; margin: 22px 0 0 30px">
      <CheckboxStandard label="Compare" @disassemble="compare"/>
    </div>
  </div>
</template>

<script>
  // TODO: password check strength
  // TODO: sign up with Google
  import HeaderNav from "@/components/HeaderNav";
  import CardStandard from "@/components/standard/CardStandard";
  import {ref} from "vue";
  import ChartStandard from "@/components/standard/ChartStandard";
  import ButtonStandard from "@/components/standard/ButtonStandard";
  import CheckboxStandard from "@/components/standard/CheckboxStandard";
  import router from "@/routers";
  import SidebarStandard from "@/components/standard/SidebarStandard";
  export default {
    name: "HomePage",
    title: "Home",
    components: {
      SidebarStandard,
      CheckboxStandard,
      ButtonStandard,
      ChartStandard,
      CardStandard,
      HeaderNav
    },
    setup(){

  // TODO: api get cookie token auth
      let user = localStorage.getItem('user-info');
      if(!user){
        router.push({name:"Login"});
      }

      const ch = ref(0);
      const label = ref('Categories 📚');

      const relevance = ref([
        {id:"Essentials", value:40}, {id:"Useful",value:39}, {id:"Useless",value:14}, {id:"Regret",value:7}
      ]);

      const total = {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3, 18, 32, 21, 21, 6, 33],
            borderWidth: 1,
            borderColor: 'orange',
            tension: 0.1
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

      const totalCompare = {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3, 18, 32, 21, 21, 6, 33],
              borderWidth: 1,
              borderColor: 'orange',
              tension: 0.1
            },
            {
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3, 18, 32, 21, 21, 6, 33].reverse(),
              borderWidth: 1,
              borderColor: 'green',
              tension: 0.1
            },
            {
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3, 18, 32, 21, 21, 6, 33].sort(),
              borderWidth: 1,
              borderColor: 'red',
              tension: 0.1
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      };

      const categories = {
        type: 'bar',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [{
            label: '# of dddd',
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

      const totalCategories = {
        type: 'bar',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: '# of dddd',
              data: [12, 19, 3, 5, 2, 3, 18, 32, 21, 21, 6, 33],
              borderWidth: 1
            },
            {
              label: '# of rr',
              data: [12, 19, 3, 5, 2, 3, 18, 32, 21, 21, 6, 33].reverse(),
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      };

      const config = ref(total);

      const changeChart = () => {
        switch (ch.value){
          case 0:
          case 0.5:
            if(ch.value === 0){
              config.value = categories;
            }else{
              config.value = totalCategories;
            }
            label.value = 'Totals 📊';
            ch.value += 1;
            break;
          case 1:
          case 1.5:
            if(ch.value === 1){
              config.value = total;
            }else{
              config.value = totalCompare;
            }
            label.value = 'Categories 📚';
            ch.value -= 1;
            break;
        }
      };

      const compare = (checkbox) => {
        switch (true) {
          case (ch.value === 0 && checkbox):
            config.value = totalCompare;
            ch.value += 0.5;
            break;
          case (ch.value === 0.5 && !checkbox):
            config.value = total;
            ch.value -= 0.5;
            break;
          case (ch.value === 1 && checkbox):
            config.value = totalCategories;
            ch.value += 0.5;
            break;
          case (ch.value === 1.5 && !checkbox):
            config.value = categories;
            ch.value -= 0.5;
            break;
        }
      }

      return {relevance, config, ch, label, changeChart, compare};
    }
  }
</script>

<style scoped>
  .chartContainer{
    padding: 0 50px 0 0;
  }
</style>
