import 'bulma/css/bulma.min.css';

// Import Vue and the main App component
import { createApp } from 'vue';  // Importing createApp from Vue
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import Main from './pages/Main.vue';

import Login from "./components/Login.vue";
import SignIn from "./components/SignIn.vue";
import DisplayKuldvillak from './components/DisplayKuldvillak.vue';

const routes = [
    { path: '/', component: Main, name: "default" },
    { path: '/Login', component: Login, name: "Login" },
    { path: '/SignIn', component: SignIn, name: "Sign in" },
    { path: '/kuldvillak', component: DisplayKuldvillak, name: "kuldvillak" },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    server: {
        historyApiFallback: true  // Add this line
    }
});

const app = createApp(App);  // Creating the Vue app with the App component

app.use(router);
app.mount('#app');  // Mounting Vue to the element with the id 'app'
