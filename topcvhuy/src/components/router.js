import LoginForm from '../components/LoginForm.vue';
import MainForm from '../components/firestoreExample.vue';

import CvForm from '../components/CvForm.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { createRouter, createWebHistory } from 'vue-router';

// import { IonIcon } from '@ionic/vue';


const routes = [
  {
    path: '/',
    name: 'main',
    component: MainForm
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginForm
  }, 
  {
  path: '/cv',
    name: 'cv',
    component: CvForm
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
