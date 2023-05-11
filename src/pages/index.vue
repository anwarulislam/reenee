<template>
  <a href="/groups/add"> Add Group </a>

  <div v-if="selectedGroup">
    <GroupView :group="selectedGroup" />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Group } from "../helpers/model/group";
import { useGroupStore } from "../helpers/stores/GroupStore";

const groupStore = useGroupStore();

const selectedGroup = ref<Group | null>(groupStore.currentGroup);
</script>
