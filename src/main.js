import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/css/fonts.css';
import '@/assets/css/normalize.css';
import '@/assets/css/variables.css';
import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');