require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';
Vue.use(VueAxios, axios);

import BlogComponent from './components/BlogComponent.vue';
import BlogSingleComponent from './components/BlogSingleComponent.vue';
import CartComponent from './components/CartComponent.vue';
import ContactComponent from './components/ContactComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import ProductComponent from './components/ ProductComponent.vue';
import ShopComponent from './components/ShopComponent.vue';

Vue.component('header',require("./includes/Header.vue"));
Vue.component('subscript',require("./includes/Subscription.vue"));
Vue.component('footer-block',require("./includes/Footer-block.vue"));

const routes = [
  {
      name: 'home',
      path: '/',
      component: HomeComponent
  },
  {
      name: 'cart',
      path: '/cart',
      component: CartComponent
  },
  {
      name: 'blog',
      path: '/blog',
      component: BlogComponent
  },
  {
      name: 'blogsingle',
      path: '/blog/:id',
      component: BlogSingleComponent
  },
  {
      name: 'contact',
      path: '/contact',
      component: ContactComponent
  },
  {
      name: 'product',
      path: '/product/:id',
      component: ProductComponent
  },
  {
      name: 'shop',
      path: '/shop/:id',
      component: ShopComponent
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});
const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');
