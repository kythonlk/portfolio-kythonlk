import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/components/About.vue';
import Resume from '@/components/Resume.vue';
import Contact from '@/components/Contact.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        redirect: 'about',
      },
      {
        path: 'about',
        name: 'About',
        component: About,
      },
      {
        path: 'resume',
        name: 'Resume',
        component: Resume,
      },
      {
        path: 'contact',
        name: 'Contact',
        component: Contact,
      },
    ],
  },
  // Add any additional routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
