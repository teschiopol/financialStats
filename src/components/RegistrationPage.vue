<template>
  <HeaderNav :logged="false"/>
    <div class="login" @keyup.enter="signup">
      <img class="logo" src="../assets/images/logo_nopo.png" alt="logo-financial-stats"/>
      <h1>Registration</h1>
      <div class="input-container ic1">
        <input id="email" class="input" type="text" placeholder="" autocomplete="off" v-model="email" />
        <div class="cut"></div>
        <label for="email" class="placeholder">Email</label>
      </div>
      <div class="input-container ic1">
        <input id="user" class="input" type="text" placeholder="" autocomplete="off" v-model="user" />
        <div class="cut"></div>
        <label for="user" class="placeholder">Username</label>
      </div>
      <div class="input-container ic1" style="margin-bottom: 40px">
        <input id="password" class="input" type="password" placeholder="" autocomplete="off" v-model="password" />
        <div class="cut"></div>
        <label for="password" class="placeholder">Password</label>
      </div>
      <div class="back">
        <router-link to="/login">{{back}}</router-link>
      </div>
      <ButtonStandard label="SignUp 👤" @click="signup" style="float: right;"/>
    </div>
</template>

<script>
  import HeaderNav from "@/components/HeaderNav";
  import ButtonStandard from "@/components/ButtonStandard";
  import {ref} from "vue";
  export default {
    name: "RegistrationPage",
    title: "Registration",
    components: {ButtonStandard, HeaderNav},
    setup(){

      const back = "< Login";
      const email = ref('');
      const password = ref('');
      const user = ref('');
  // TODO: signup
      const signup = () => {
        console.log('signup');
      }

      return {back, email, password, user, signup};
    }
  }
</script>
