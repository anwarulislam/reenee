<template>
  <div v-if="!groups.length">
    <AddGroup :groups="groups" />
  </div>

  <div v-if="selectedGroup">
    <GroupView :group="selectedGroup" @updateGroup="onUpdateGroup" />
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Group } from "./model/group";

const groups = ref<Group[]>([]);

const selectedGroup = ref<Group | null>(null);

onMounted(() => {
  groups.value = getAllGroupsFromStorage();
  selectedGroup.value = groups.value[0];

  console.log(selectedGroup.value);
});

const getAllGroupsFromStorage = () => {
  const groups = localStorage.getItem("groups");
  if (groups) {
    return JSON.parse(groups);
  }
  return [];
};

const onUpdateGroup = (group: Group) => {
  const groupIndex = groups.value.findIndex((g) => {
    return g.id === group.id;
  });
  let newGroups = [...groups.value];
  newGroups[groupIndex] = { ...group };
  groups.value = newGroups;
  localStorage.setItem("groups", JSON.stringify(newGroups));
  location.reload();
};
</script>
