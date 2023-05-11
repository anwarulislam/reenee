<template>
  <input
    v-model="groupName"
    type="text"
    name="group_name"
    placeholder="Enter group name"
  />

  <button @click="addNewGroup">Add</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Group } from "../helpers/model/group";
import { useGroupStore } from "../helpers/stores/GroupStore";
const { addGroup } = useGroupStore();

const props = defineProps<{
  groups: Group[];
}>();

const groupName = ref("");

const addNewGroup = () => {
  const group: Group = {
    name: groupName.value,
    id: Date.now().toString(),
    members: [],
    transactions: [],
  };

  addGroup(group);
};
</script>
