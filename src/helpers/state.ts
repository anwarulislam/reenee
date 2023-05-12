import { watch } from "vue";
import { useAppStore } from "./stores/AppStore";
import { useGroupStore } from "./stores/GroupStore";

export const getReeneeState = () => {
  const groups = localStorage.getItem("__reenee_state");
  if (groups) {
    return JSON.parse(groups);
  }
  return {};
};

export const setReeneeState = (state: any) => {
  localStorage.setItem("__reenee_state", JSON.stringify(state));
};

export const watchAndSelectGroup = () => {
  const appStore = useAppStore();
  const groupStore = useGroupStore();

  watch(appStore.$state, (newId) => {
    console.log(newId);
  });
};
