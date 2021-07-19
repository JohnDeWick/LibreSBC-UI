import {
  createApp,
} from 'vue';
import App from './App.vue';
import router from './router';
import tracingPlugin from './plugins/tracing';
import '../node_modules/@tabler/core/dist/js/tabler.min';

createApp(App)
  .use(router)
  .use(tracingPlugin)
  .mount('#app');
