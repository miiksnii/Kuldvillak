import 'bulma/css/bulma.min.css';
import { createApp } from 'vue';  // Importing createApp from Vue
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import Login from "./components/Login.vue";
import SignIn from "./components/SignIn.vue";

import Main from './pages/Main.vue'
import Kuldvillak from './pages/Kuldvillak.vue';
import HomePage from './pages/HomePage.vue';
import Updates from './pages/Updates.vue';
import Credits from './pages/Credits.vue';


const routes = [
    { path: '/', component: HomePage, name: "HomePage"},
    { path: '/Main', component: Main, name: "Main"},
    { path: '/Updates', component: Updates, name: "Updates"},
    { path: '/Credits', component: Credits, name: "Credits"},
    { path: '/LogIn', component: Login, name: "Login" },
    { path: '/SignIn', component: SignIn, name: "Sign in" },
    {
        path: '/kuldvillak',
        component: Kuldvillak,
        name: "kuldvillak",
        meta: { requiresAuth: true } 
    }
];

// Create the router instance
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);  // Creating the Vue app with the App component
app.use(router);  // Add the router to the app
app.mount('#app');  // Mount the app to the DOM