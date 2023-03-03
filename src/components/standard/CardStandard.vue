<template>
  <div class="card">
    <div class="ds-top">
      <span>Saldo Attuale</span>
    </div>
    <div class="name">
      <span>90.00</span>
    </div>
    <div class="ds-skill">
      <h6>Relevance</h6>
      <div v-for="item in relevance" :key="item" class="skill">
        <div>
          <h6 style="float: left">{{item.id}}</h6>
          <h6 style="float: right">{{item.value}}</h6>
        </div>
        <br>
        <div class="bar" :style="{width: item.value}">
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
      }
    },
    setup(props){
      props.relevance.forEach(
          (el) => {
            el.value = `${el.value}%`;
          }
      );
    }
  }
</script>

<style scoped>
  .card {
    margin: 4em auto auto;
    width: 250px;
    height: 400px;
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
    background: var(--crimson);
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
    color: var(--white);
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;
    display: inline-block;
    margin-top: 39px;
  }
  .name:hover span{
    color: var(--crimson);
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
    color: var(--crimson);
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
    background: var(--crimson);
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
</style>
