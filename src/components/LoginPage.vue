<template>
  <HeaderNav :logged="false"/>
  <div class="login" @keyup.enter="login">
    <img class="logo" src="../assets/images/logo.png" alt="logo-financial-stats"/>
    <h1>Login</h1>
    <div class="input-container ic1">
      <input id="user" class="input" type="text" placeholder="" autocomplete="off" v-model="user" />
      <div class="cut"></div>
      <label for="user" class="placeholder">User</label>
    </div>
    <div class="input-container ic1" style="margin-bottom: 40px">
      <i class="hideShowPassword" @mousedown="switchVisibility" @mouseup="switchVisibility">👀</i>
      <input id="password" class="input" :type="passwordFieldType" placeholder="" autocomplete="off" v-model="password" />
      <div class="cut"></div>
      <label for="password" class="placeholder">Password</label>
    </div>
    <ButtonStandard label="Login 🔒" @click="login" />
    <div class="error" v-if="error">
      Login Error!
    </div>
  </div>
</template>

<script>
  // TODO: make custom logo
import HeaderNav from "@/components/HeaderNav";
import ButtonStandard from "@/components/ButtonStandard";
import {ref} from "vue";
import { useRouter } from 'vue-router'
export default {
  name: "LoginPage",
  components: {ButtonStandard, HeaderNav},
  setup(){

    const user = ref(null);
    const password = ref(null);
    const error = ref(false);
    const passwordFieldType = ref("password");
    const router = useRouter();


    const switchVisibility = () => {
      passwordFieldType.value = passwordFieldType.value === "password" ? "text" : "password";
    };

    const login = () => {
      if(user.value === 'admin' && password.value === 'Gino23'){
        localStorage.setItem('user-info', 'admin');
        router.push({
          name: 'Home'
        });
      }else{
        error.value = true;
      }
    };

    return {user, password, error, passwordFieldType, login, switchVisibility}
  }
}
</script>

<style scoped>
  .hideShowPassword{
    position: absolute;
    top: 25%;
    right: 5%;
    border-radius: 20px;
    border: solid 1px var(--aliceblue);
    padding: 0 15px;
  }
</style>
