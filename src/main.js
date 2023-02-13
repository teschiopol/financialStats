import { createApp } from 'vue'
import App from './App.vue'
import router from "@/routers";

// import css
import './assets/css/global.css';
import './assets/css/form.css';
import './assets/css/login.css';
import './assets/css/color.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
