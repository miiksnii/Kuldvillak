import 'bulma/css/bulma.min.css'; // ✅ Now valid
// Import Vue and the main App component
import { createApp } from 'vue';  // Importing createApp from Vue
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import RegPage from "./pages/RegPage.vue";
import Login from "./pages/Login.vue";
import SignIn from "./pages/SignIn.vue";
import DisplayKuldvillak from './components/DisplayKuldvillak.vue';

const routes = [
    { path: '/', component: RegPage },
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