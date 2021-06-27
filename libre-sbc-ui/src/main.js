require('dotenv').config()

import {
  createApp
} from 'vue';
import App from './App.vue';
import router from './router'
import '../node_modules/@tabler/core/dist/js/tabler.min.js'

createApp(App).use(router).mount('#app');
