import './bootstrap';

import { createApp } from 'vue';
import App from './components/App.vue';
import Products from './components/Products.vue';
import Maska from './components/Maska.vue';
import List from './components/List.vue';

import mask from 'vue-the-mask';

const app = createApp();
app.use(mask);

app.component('app', App);
app.component('products', Products);
app.component('maska', Maska);
app.component('list', List);

app.mount('#app')
