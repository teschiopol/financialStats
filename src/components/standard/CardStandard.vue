<template>
  <div class="card">
    <div class="ds-top" :class="customClassBg">
      <span>Saldo Attuale</span>
    </div>
    <div class="name">
      <span :class="customClass">{{ total }}</span>
    </div>
    <div class="ds-skill">
      <h6 :class="customClass">Relevance</h6>
      <div v-for="item in relevance" :key="item" class="skill">
        <div>
          <h6 style="float: left">{{ item.name }}</h6>
          <h6 style="float: right">{{ item.total }}</h6>
        </div>
        <br>
        <div class="bar" :class="customClassBg" :style="{width: item.total}">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CardStandard",
    props:{
      relevance:{
        type: Array
      },
      total:{
        type: String
      },
      customClassBg:{
        type: String
      },
      customClass:{
        type: String
      }
    }
  }
</script>

<style scoped>
  .card {
    margin: 4em auto auto;
    width: 250px;
    height: 420px;
    border-radius: 10px;
    box-shadow: 0 10px 25px 5px rgba(0, 0, 0, 0.2);
    background: var(--susblack);
    overflow: hidden;
    box-sizing: border-box;
  }
  .ds-top {
    margin: auto;
    width: 250px;
    height: 30px;
    text-align: center;
    padding-top: 10px;
  }
  .ds-top span {
    color: var(--white);
    text-decoration: none;
    font-weight: 700;
    font-size: 16px;
  }
  .name {
    margin: 20px auto;
    width: 100px;
    height: 100px;
    text-align: center;
    animation: fadeIn 2s ease-in;
    border-radius: 50%;
    border: solid 2px var(--white);
  }
  .name span {
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;
    display: inline-block;
    margin-top: 39px;
  }

  .ds-skill {
    margin: auto;
    width: 200px;
    animation: mvBottom 1.5s;
  }
  .ds-skill h6 {
    margin: 20px 0;
    font-weight: 700;
    font-size: 0.8em;
    text-transform: uppercase;
  }
  .skill{
    margin-top: 15px;
  }
  .skill h6 {
    font-weight: 400;
    font-size: 10px;
    letter-spacing: 0.05em;
    margin: 4px 0;
    color: var(--white);
  }
  .bar {
    height: 5px;
    text-align: right;
  }
  .bar p {
    color: var(--white);
    font-size: 10px;
    padding-top: 5px;
    animation: fadeIn 5s;
  }

  @keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }

  .reddy-bg{
    background: var(--crimson);
  }
  .reddy{
    color: var(--crimson);
  }

  .greened-bc{
    background: var(--green);
  }
  .greened{
    color: var(--green);
  }

</style>
