import 'bulma/css/bulma.min.css';

// Import Vue and the main App component
import { createApp } from 'vue';  // Importing createApp from Vue
import App from './App.vue';


const app = createApp(App);  // Creating the Vue app with the App component
app.mount('#app');  // Mounting Vue to the element with the id 'app'