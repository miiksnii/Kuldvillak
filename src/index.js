import 'bulma/css/bulma.min.css';
import { createApp } from 'vue';  // Importing createApp from Vue
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import Login from "./components/Login.vue";
import SignIn from "./components/SignIn.vue";
import Kuldvillak from './pages/Kuldvillak.vue';

// Define your routes
const routes = [
    { path: '/', component: Login, name: "Login" },
    { path: '/SignIn', component: SignIn, name: "Sign in" },
    {
        path: '/kuldvillak',
        component: Kuldvillak,
        name: "kuldvillak",
        meta: { requiresAuth: true } // Mark this route as requiring authentication
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
