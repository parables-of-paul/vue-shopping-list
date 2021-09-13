import { createApp } from 'vue'
import App from './App.vue'
import ListHeading from './components/ListHeading.vue'
import ListBody from './components/ListBody.vue'
import Header from './components/Header.vue'
import MainTray from './components/MainTray.vue'
import InputDraw from './components/InputDraw.vue'
import ListTray from './components/ListTray.vue'
import * as _vue from 'vue'

const app = _vue.createApp({});

app.component('ListHeading', ListHeading);
app.component('ListBody', ListBody);
app.component('Header', Header);
app.component('MainTray', MainTray);
app.component('InputDraw', InputDraw);
app.component('ListTray', ListTray);

createApp(App).mount('#app')