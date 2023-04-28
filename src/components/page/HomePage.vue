<template>
  <HeaderNav/>
  <SidebarStandard />
  <div style="width:35%; display:inline-block;">
    <CardStandard :relevance="relevance" :total="balance" :custom-class="customClass" :custom-class-bg="customClassBg"/>
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
  import {useBalance, useRelevancePer} from "@/composable/useHome";
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

      const customClassBg = ref("reddy-bg");
      const customClass = ref("reddy");

      const balance = ref("0");
      balance.value = useBalance();
      if(parseInt(balance.value) > 0){
        customClassBg.value = "greened-bc";
        customClass.value = "greened";
      }

      const relevance = ref([]);
      relevance.value = useRelevancePer();

      // compare total sono i giorni dei mesi

      const total = {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [{
            label: 'Balance Total',
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
          labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
          datasets: [
            {
              label: 'January',
              data: [1, 19, 3, 5, 2, 3, 18, 32, 21, 21, 6, 33, 1, 19, 3, 5, 2, 3, 18, 32, 21, 21, 6, 33],
              borderWidth: 1,
              borderColor: 'orange',
              tension: 0.1
            },
            {
              label: 'February',
              data: [12, 19, 3, 5, 2, 3, 18, 32, 21, 21, 6, 33].reverse(),
              borderWidth: 1,
              borderColor: 'green',
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
          labels: ['Categories'],
          datasets: [{
            label: 'Casa',
            data: [12],
            borderWidth: 1
          },
            {
              label: 'Auto',
              data: [19],
              borderWidth: 1
            },
            {
              label: 'Extra',
              data: [20],
              borderWidth: 1
            },
            {
              label: 'Gym',
              data: [7],
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
              label: 'Casa',
              data: [12, 19, 3, 5, 2, 3, 18, 32, 21, 21, 6, 33],
              borderWidth: 1
            },
            {
              label: 'Auto',
              data: [12, 19, 3, 5, 2, 3, 18, 32, 21, 21, 6, 33].reverse(),
              borderWidth: 1
            },
            {
              label: 'Extra',
              data: [12, 19, 3, 5, 2, 3, 18, 32, 21, 21, 6, 33].sort(),
              borderWidth: 1
            },
            {
              label: 'Gym',
              data: [12, 1, 3, 15, 2, 33, 18, 2, 21, 14, 6, 54],
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

      return {relevance, config, ch, label, balance, customClassBg, customClass, changeChart, compare};
    }
  }
</script>

<style scoped>
  .chartContainer{
    padding: 0 50px 0 0;
  }
</style>
