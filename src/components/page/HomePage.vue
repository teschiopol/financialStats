<template>
  <HeaderNav/>
  <SidebarStandard />
  <div style="width:35%; display:inline-block;">
    <CardStandard :relevance="relToPass" :total="balance" :custom-class="customClass" :custom-class-bg="customClassBg"/>
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
import HeaderNav from "@/components/HeaderNav";
import CardStandard from "@/components/standard/CardStandard";
import {ref, watch} from "vue";
import ChartStandard from "@/components/standard/ChartStandard";
import ButtonStandard from "@/components/standard/ButtonStandard";
import CheckboxStandard from "@/components/standard/CheckboxStandard";
import router from "@/routers";
import SidebarStandard from "@/components/standard/SidebarStandard";
import {useCategoryMonthly, useCatTotal, useTotalMonth, useTotalYear} from "@/composable/useHome";
import {useRelevance} from "@/composable/useRelevance";

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

      let user = localStorage.getItem('user-info');
      if(!user){
        router.push({name:"Login"});
      }

      const ch = ref(0);
      const label = ref('Categories 📚');

      const customClassBg = ref("reddy-bg");
      const customClass = ref("reddy");

      const balance = ref("0");
      const relevance = ref([]);
      const relToPass = ref([]);
      const totalData = ref(null);
      const totalCompareData = ref(null);
      const categories = ref(null);
      const totalUse = ref(null);
      const total = ref(null);
      const config = ref(null);
      const totalCompare = ref(null);
      const totalCategories = ref(null);

      const option = {
        scales: {
          y: {
            grid: {
              color: (context) => {
                if (context.tick.$context.tick.value === 0) {
                  return 'black';
                } else {
                  return 'lightgrey';
                }
              },
            }
          }
        }
      };

      const init = async () => {
        relevance.value = await useRelevance();
        let sum = 0;
        relevance.value.forEach(el => {
          if (el.name === 'Incassi') {
            sum += el.total;
          } else {
            sum -= el.total;
          }
        });

        balance.value = sum.toFixed(2);

        if (parseInt(balance.value) > 0) {
          customClassBg.value = "greened-bc";
          customClass.value = "greened";
        }

        relevance.value.forEach(el => {
          relToPass.value.push({
            "name": el.name,
            "total": Math.abs(((100 * el.total) / balance.value)).toFixed(0) + '%'
          });
        })

        totalData.value = await useTotalYear();
        totalCompareData.value = await useTotalMonth();

        categories.value = {
          type: 'bar',
          data: await useCatTotal()
        };

        totalUse.value = await useCategoryMonthly();

        total.value = {
          type: 'line',
          data: {
            labels: totalData.value[1],
            datasets: [{
              label: 'Balance Total',
              data: totalData.value[0],
              borderWidth: 1,
              borderColor: 'orange',
              tension: 0.1
            }]
          },
          options: option
        };

        totalCompare.value = {
          type: 'line',
          data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            datasets: totalCompareData.value
          },
          options: option
        };

        totalCategories.value = {
          type: 'bar',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: totalUse.value
          }
        };

      }

      init();

      const changeChart = () => {
        switch (ch.value) {
          case 0:
          case 0.5:
            if (ch.value === 0) {
              config.value = categories.value;
            } else {
              config.value = totalCategories.value;
            }
            label.value = 'Totals 📊';
            ch.value += 1;
            break;
          case 1:
          case 1.5:
            if(ch.value === 1){
              config.value = total.value;
            }else{
              config.value = totalCompare.value;
            }
            label.value = 'Categories 📚';
            ch.value -= 1;
            break;
        }
      };

      const compare = (checkbox) => {
        switch (true) {
          case (ch.value === 0 && checkbox):
            config.value = totalCompare.value;
            ch.value += 0.5;
            break;
          case (ch.value === 0.5 && !checkbox):
            config.value = total.value;
            ch.value -= 0.5;
            break;
          case (ch.value === 1 && checkbox):
            config.value = totalCategories.value;
            ch.value += 0.5;
            break;
          case (ch.value === 1.5 && !checkbox):
            config.value = categories.value;
            ch.value -= 0.5;
            break;
        }
      }

      changeChart();

      watch(total, async (newV, oldV) => {
        if (newV !== oldV) {
          changeChart();
        }
      });

      return {relevance, config, ch, label, balance, customClassBg, customClass, relToPass, changeChart, compare};
    }
  }
</script>

<style scoped>
  .chartContainer{
    padding: 0 50px 0 0;
  }
</style>
