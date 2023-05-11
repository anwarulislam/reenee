<template>
  <RouterLink to="/groups/add"> Add Group </RouterLink>

  <div v-if="selectedGroup">
    <GroupView :group="selectedGroup" />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Group } from "../helpers/model/group";
import { useAppStore } from "../helpers/stores/AppStore";

const groupStore = useAppStore();

const selectedGroup = ref<Group | null>(groupStore.currentGroup);
</script>
