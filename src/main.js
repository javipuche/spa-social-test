import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createHead } from "unhead";

createHead();

createApp(App).mount("#app");
