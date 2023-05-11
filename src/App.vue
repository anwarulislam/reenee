<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { useAppStore } from "./helpers/stores/AppStore";
import { useGroupStore } from "./helpers/stores/GroupStore";
import { Group } from "./helpers/model/group";

const defaultLayout = "default";

const { currentRoute } = useRouter();

const layout = computed(
  () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
);

const groupStore = useGroupStore();
const appStore = useAppStore();
watch(
  appStore.$state,
  (state) => {
    console.log(state);
    localStorage.setItem("__reenee_state", JSON.stringify(state));
  },
  { deep: true }
);

onMounted(() => {
  const state = getReeneeState();
  appStore.setGroups(state?.groups || []);
  appStore.setCurrentGroupId(
    state?.currentGroupId || state?.groups[0]?.id || null
  );

  if (state?.groups) {
    const currentGroup = state.groups.find(
      (group: Group) => group.id === state.currentGroupId
    );
    groupStore.setGroup(currentGroup);
  }
});

const getReeneeState = () => {
  const groups = localStorage.getItem("__reenee_state");
  console.log(groups);
  if (groups) {
    return JSON.parse(groups);
  }
  return {};
};
</script>
