import { ReeneeModule, REENEE_MODULES } from ".";
import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
} from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";
import { readonly, ref } from "vue";

const routes = setupLayouts(generatedRoutes);

/**
 * A reactive value signifying whether we are currently navigating
 * into the first route the application is routing into.
 * Useful, if you want to do stuff for the initial page load (for example splash screens!)
 */
const _isLoadingInitialRoute = ref(false);

/**
 * Says whether a given route looks like an initial route which
 * is loaded as the first route.
 *
 * NOTE: This function assumes Vue Router represents that initial route
 * in the way we expect (fullPath == "/" and name == undefined). If this
 * function breaks later on, most probs vue-router updated its semantics
 * and we have to correct this function.
 */
function isInitialRoute(route: RouteLocationNormalized) {
  return route.fullPath === "/" && route.name === undefined;
}

/**
 * A reactive value signifying whether we are currently navigating
 * into the first route the application is routing into.
 * Useful, if you want to do stuff for the initial page load (for example splash screens!)
 *
 * NOTE: This reactive value is READONLY
 */
export const isLoadingInitialRoute = readonly(_isLoadingInitialRoute);

export default <ReeneeModule>{
  onVueAppInit(app) {
    const router = createRouter({
      history: createWebHistory(),
      routes,
    });

    router.beforeEach((to, from, next) => {
      _isLoadingInitialRoute.value = isInitialRoute(from);

      REENEE_MODULES.forEach((mod) => {
        mod.onBeforeRouteChange?.(to, from, next, router);
      });
    });

    // Instead of this a better architecture is for the router
    // module to expose a stream of router events that can be independently
    // subbed to
    router.afterEach((to) => {
      // we can track here

      _isLoadingInitialRoute.value = false;

      REENEE_MODULES.forEach((mod) => {
        mod.onAfterRouteChange?.(to, router);
      });
    });

    app.use(router);

    REENEE_MODULES.forEach((mod) => mod.onRouterInit?.(app, router));
  },
};
