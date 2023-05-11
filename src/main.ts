import { createApp } from "vue";
import "./style.css";
import { VueFire, VueFireAuth } from "vuefire";
import App from "./App.vue";
// the file we created above with `database`, `firestore` and other exports
import { firebaseApp } from "./helpers/firebase";

import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
} from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";
import { readonly, ref } from "vue";

const routes = setupLayouts(generatedRoutes);

import { createPinia } from "pinia";
const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
// app.use(VueFire, {
//   // imported above but could also just be created here
//   firebaseApp,
//   modules: [
//     // we will see other modules later on
//     VueFireAuth(),
//   ],
// });

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);

app.mount("#app");
