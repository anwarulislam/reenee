<template>
  <div v-if="!groupStore.groups.length">
    <AddGroup :groups="groupStore.groups" />
  </div>

  <div v-if="selectedGroup">
    <GroupView :group="selectedGroup" @updateGroup="onUpdateGroup" />
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { Group } from "../model/group";
import { useGroupStore } from "../stores/GroupStore";

const groupStore = useGroupStore();

const selectedGroup = ref<Group | null>(groupStore.currentGroup);

watch(
  groupStore.$state,
  (state) => {
    console.log(state);
    localStorage.setItem("__reenee_state", JSON.stringify(state));
  },
  { deep: true }
);

onMounted(() => {
  const allGroups = getAllGroupsFromStorage();
  console.log(allGroups);
  groupStore.setGroups(allGroups);
  console.log(groupStore.groups);
});

const getAllGroupsFromStorage = () => {
  const groups = localStorage.getItem("__reenee_state");
  if (groups) {
    return JSON.parse(groups).groups;
  }
  return [];
};

const onUpdateGroup = (group: Group) => {
  const groupIndex = groupStore.groups.findIndex((g) => {
    return g.id === group.id;
  });
  let newGroups = [...groupStore.groups];
  newGroups[groupIndex] = { ...group };

  groupStore.setGroups(newGroups);
};
</script>
