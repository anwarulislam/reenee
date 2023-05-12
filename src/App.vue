<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { getReeneeState, setReeneeState } from "./helpers/state";
import { useAppStore } from "./helpers/stores/AppStore";
import { useGroupStore } from "./helpers/stores/GroupStore";
import { REENEE_MODULES } from "./modules";

const defaultLayout = "default";

// Run module root component setup code
REENEE_MODULES.forEach((mod) => mod.onRootSetup?.());

const { currentRoute } = useRouter();

const layout = computed(
  () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
);

const groupStore = useGroupStore();
const appStore = useAppStore();
watch(
  appStore.$state,
  (state) => {
    setReeneeState(state);
  },
  { deep: true }
);

onMounted(() => {
  const state = getReeneeState();
  appStore.initialize(state);
});
</script>
