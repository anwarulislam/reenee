import { createPinia, storeToRefs } from "pinia";
import { ReeneeModule } from ".";
import { watch } from "vue";
import { useAppStore } from "../helpers/stores/AppStore";
import { useGroupStore } from "../helpers/stores/GroupStore";
import { getReeneeState, setReeneeState } from "../helpers/state";

export default <ReeneeModule>{
  onVueAppInit(app) {
    const pinia = createPinia();
    app.use(pinia);
  },

  onRootSetup() {
    const appStore = useAppStore();
    const { currentGroupId } = storeToRefs(appStore);
    const groupStore = useGroupStore();

    watch(
      appStore.$state,
      (state) => {
        setReeneeState(state);
      },
      { deep: true }
    );

    watch(currentGroupId, (newId, oldId) => {
      console.log(newId, oldId);
      if (newId != oldId) {
        groupStore.setGroup(appStore.currentGroup);
      }
    });

    watch(groupStore.$state, (state) => {
      appStore.updateCurrentGroup(state);
    });

    const state = getReeneeState();
    appStore.initialize(state);
  },
};
