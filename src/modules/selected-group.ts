import { ReeneeModule } from ".";
import { useAppStore } from "../helpers/stores/AppStore";

/**
 * @function
 * @name onBeforeRouteChange
 * @param {object} to
 * @param {object} from
 * @param {function} next
 * @returns {void}
 */

export default <ReeneeModule>{
  onBeforeRouteChange(to, from, next, router) {
    const appStore = useAppStore();

    if (to.name?.toString().includes("groups-id")) {
      appStore.setCurrentGroupId(to.params.id.toString());
    }

    if (to.name === "index") {
      return router.replace(`/groups/${appStore.currentGroupId}`);
    }

    next();
  },
};
