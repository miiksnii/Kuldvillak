import 'bulma/css/bulma.min.css';

// Import Vue and the main App component
import { createApp } from 'vue';  // Importing createApp from Vue
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import Login from "./components/Login.vue";
import SignIn from "./components/SignIn.vue";
import Kuldvillak from './pages/Kuldvillak.vue';

const routes = [
    { path: '/', component: Login, name: "Login" },
    { path: '/SignIn', component: SignIn, name: "Sign in" },
    { path: '/kuldvillak', component: Kuldvillak, name: "kuldvillak" },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);  // Creating the Vue app with the App component

app.use(router);
app.mount('#app');  // Mounting Vue to the element with the id 'app'
