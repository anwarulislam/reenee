import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { REENEE_MODULES } from "./modules";

// Top-level await is not available in our targets
(async () => {
  const app = createApp(App);

  // Initialize modules
  REENEE_MODULES.forEach((mod) => mod.onVueAppInit?.(app));

  app.mount("#app");
})();
