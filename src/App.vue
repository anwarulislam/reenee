<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { REENEE_MODULES } from "./modules";

const defaultLayout = "default";

const { currentRoute } = useRouter();

const layout = computed(
  () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
);

// Run module root component setup code
REENEE_MODULES.forEach((mod) => mod.onRootSetup?.());
</script>
