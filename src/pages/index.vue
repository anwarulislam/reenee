<template>
  <a href="/groups/add"> Add Group </a>

  <div v-if="selectedGroup">
    <GroupView :group="selectedGroup" @updateGroup="onUpdateGroup" />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Group } from "../helpers/model/group";
import { useGroupStore } from "../helpers/stores/GroupStore";

const groupStore = useGroupStore();

const selectedGroup = ref<Group | null>(groupStore.currentGroup);

const onUpdateGroup = (group: Group) => {
  const groupIndex = groupStore.groups.findIndex((g) => {
    return g.id === group.id;
  });
  let newGroups = [...groupStore.groups];
  newGroups[groupIndex] = { ...group };

  groupStore.setGroups(newGroups);
};
</script>
