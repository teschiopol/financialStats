import { createApp } from 'vue'
import App from './App.vue'
import router from "@/routers";
import mixinTitle from './mixins/title';

import '@fortawesome/fontawesome-free/js/all';

// import css
import './assets/css/global.css';
import './assets/css/form.css';
import './assets/css/login.css';
import './assets/css/color.css';

const app = createApp(App);
app.use(router);
app.mixin(mixinTitle);
app.mount('#app');
