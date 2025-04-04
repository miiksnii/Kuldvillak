import 'bulma/css/bulma.min.css';

// Import Vue and the main App component
import { createApp } from 'vue';  // Importing createApp from Vue
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import Main from './pages/Main.vue';

import Login from "./components/Login.vue";
import SignIn from "./components/SignIn.vue";
import DisplayKuldvillak from './components/DisplayKuldvillak.vue';

const routes = [
    { path: '/', component: Main },
    { path: '/Login', component: Login },
    { path: '/SignIn', component: SignIn },
    { path: '/kuldvillak', component: DisplayKuldvillak },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);  // Creating the Vue app with the App component

app.use(router);
app.mount('#app');  // Mounting Vue to the element with the id 'app'
