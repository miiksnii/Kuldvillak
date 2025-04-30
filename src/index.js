import 'bulma/css/bulma.min.css';
import { createApp } from 'vue';  // Importing createApp from Vue
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import Kuldvillak from './pages/Kuldvillak.vue';
import HomePage from './pages/HomePage.vue';
import Credits from './pages/Credits.vue';


const routes = [
    { path: '/', component: HomePage, name: "HomePage" },
    { path: '/Credits', component: Credits, name: "Credits" },
    { path: '/Kuldvillak', component: Kuldvillak, name: "Kuldvillak" }
];

// Create the router instance
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);  // Creating the Vue app with the App component
app.use(router);  // Add the router to the app
app.mount('#app');  // Mount the app to the DOM