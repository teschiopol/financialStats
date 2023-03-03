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
    props: ["configuration", "customStyle"],
    setup(props) {

      onMounted(() => {
        const ctx = document.getElementById('myChart');
        const myChart = new Chart(ctx, props.configuration);
        myChart;
      })

    }
  }
</script>
