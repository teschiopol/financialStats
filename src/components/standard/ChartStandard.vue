<template>
  <div class="chartContainer">
    <canvas id="myChart"></canvas>
  </div>

</template>

<script>
  import Chart from "chart.js/auto";
  import { onMounted } from 'vue'
  export default {
    name: "ChartStandard",
    props: ["configuration"],
    setup(props) {

      onMounted(() => {
        const ctx = document.getElementById('myChart');
        const myChart = new Chart(ctx, props.configuration);
        myChart;
        ctx.style.maxHeight = '400px';
      });

    }
  }
</script>
