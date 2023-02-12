<template>
  <input
    v-model="groupName"
    type="text"
    name="group_name"
    placeholder="Enter group name"
  />

  <button @click="addGroup">Add</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Group } from "../model/group";

const props = defineProps<{
  groups: Group[];
}>();

const groupName = ref("");

const addGroup = () => {
  const group: Group = {
    name: groupName.value,
    id: Date.now().toString(),
    members: [],
    transactions: [],
  };

  const payload = [...props.groups, group];

  localStorage.setItem("groups", JSON.stringify(payload));
  location.reload();
};
</script>
