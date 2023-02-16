<template>
  <HeaderNav :logged="false"/>
  <div id="particles-js">
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
  </div>
  <VueParticle domId="particles-js" :config="particleConfig"/>
</template>

<script>
  // TODO: make custom logo
import HeaderNav from "@/components/HeaderNav";
import ButtonStandard from "@/components/ButtonStandard";
import VueParticle from 'vue-particlejs';
import {ref} from "vue";
import { useRouter } from 'vue-router'
export default {
  name: "LoginPage",
  title: "Login",
  components: {ButtonStandard, HeaderNav, VueParticle},
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

    const particleConfig =  {
      "particles": {
        "number": {
          "value": 200,
          "density": {
            "enable": true,
            "value_area": 700
          }
        },
        "color": {
          "value": "#37b2b2"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 0.1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 10,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#37b2b2",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    };

    return {user, password, error, passwordFieldType, particleConfig, login, switchVisibility}
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
