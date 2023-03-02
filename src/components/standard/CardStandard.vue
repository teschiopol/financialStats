<template>
  <div class="card">
    <div class="ds-top">
      <span>Totale Speso</span>
    </div>
    <div class="name">
      <span>90.00</span>
    </div>
    <div class="ds-skill">
      <h6>Relevance</h6>
      <div class="skill html">
        <h6>Essential</h6>
        <div class="bar bar-html">
          <p>95%</p>
        </div>
      </div>
      <div class="skill css">
        <h6>Useful</h6>
        <div class="bar bar-css">
          <p>90%</p>
        </div>
      </div>
      <div class="skill javascript">
        <h6>Useless</h6>
        <div class="bar bar-js">
          <p>75%</p>
        </div>
      </div>
      <div class="skill javascript">
        <h6>Regret</h6>
        <div class="bar bar-js">
          <p>10%</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // TODO: handle data with props
  export default {
    name: "CardStandard"
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
  .bar-html {
    width: 95%;
    animation: htmlSkill 1s;
    animation-delay: .4s;
  }
  .bar-css {
    width: 90%;
    animation: cssSkill 2s;
    animation-delay: .4s;
  }
  .bar-js {
    width: 75%;
    animation: jsSkill 3s;
    animation-delay: .4s;
  }

  @keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }

  @keyframes htmlSkill {
    0% {width: 0;}
    100% {width: 95%;}
  }

  @keyframes cssSkill {
    0% {width: 0;}
    100% {width: 90%;}
  }

  @keyframes jsSkill {
    0% {width: 0;}
    100% {width: 75%;}
  }

  @keyframes mvBottom {
    0% {bottom: -150px;}
    100% {bottom: 10px;}
  }
</style>
