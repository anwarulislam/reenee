<template>
  <RouterLink to="/groups"> Groups </RouterLink>

  <GroupView />
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useAppStore } from "../../../helpers/stores/AppStore";
import { useGroupStore } from "../../../helpers/stores/GroupStore";

// const appStore = useAppStore();
// const groupStore = useGroupStore();

// onBeforeMount(() => {
//   const currentGroup = appStore.currentGroup!;
//   groupStore.setGroup(currentGroup);
// });
</script>
