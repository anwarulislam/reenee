<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { useGroupStore } from "./helpers/stores/GroupStore";

const defaultLayout = "default";

const { currentRoute } = useRouter();

const layout = computed(
  () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
);

const groupStore = useGroupStore();
watch(
  groupStore.$state,
  (state) => {
    console.log(state);
    localStorage.setItem("__reenee_state", JSON.stringify(state));
  },
  { deep: true }
);

onMounted(() => {
  const state = getReeneeState();
  groupStore.setGroups(state?.groups || []);
  groupStore.setCurrentGroupId(
    state?.currentGroupId || state?.groups[0]?.id || null
  );
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
