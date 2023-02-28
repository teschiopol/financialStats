<template>
  <HeaderNav :logged="false"/>
    <div class="login">
      <img class="logo" src="../../assets/images/logo_nopo.png" alt="logo-financial-stats"/>
      <h1>Recovery Password</h1>
      <div class="input-container ic1">
        <input id="email" class="input" type="text" placeholder="" autocomplete="off" v-model="email" />
        <div class="cut"></div>
        <label for="email" class="placeholder">Email</label>
      </div>
      <div class="input-container ic1">
        <input id="password" class="input" type="password" placeholder="" autocomplete="off" v-model="password" />
        <div class="cut"></div>
        <label for="password" class="placeholder">New Password</label>
      </div>
      <div class="input-container ic1" style="margin-bottom: 40px">
        <input id="recovery" class="input" type="password" placeholder="" autocomplete="off" v-model="recovery" />
        <div class="cut"></div>
        <label for="recovery" class="placeholder">Repeat Password</label>
      </div>
      <div class="back">
        <router-link to="/login">{{back}}</router-link>
      </div>
      <ButtonStandard label="Reset 🌀" @click="reset" style="float: right;"/>
  </div>
</template>

<script>
  import HeaderNav from "@/components/HeaderNav";
  import ButtonStandard from "@/components/ButtonStandard";
  import {ref} from "vue";
  export default {
    name: "RecoveryPasswordPage",
    title: "Recover Password",
    components: {ButtonStandard, HeaderNav},
    setup(){

      const back = "< Login";
      const email = ref('');
      const password = ref('');
      const recovery = ref('');

      const reset = () => {
  // TODO: reset
        console.log('reset');
      }

      return {back, email, recovery, password, reset};
    }
  }
</script>
