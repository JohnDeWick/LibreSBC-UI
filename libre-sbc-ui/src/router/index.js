import { createRouter, createWebHistory } from 'vue-router';
import Home from '../features/Home.vue';
import Settings from '../features/settings/index.vue';
import SettingCodec from '../features/settings/codec/index.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
    children: [
      {
        path: 'codec',
        name: 'settingCodec',
        component: SettingCodec,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
