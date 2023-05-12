<template>
  <form @submit.prevent="addNewGroup">
    <input
      v-model="groupName"
      type="text"
      name="group_name"
      placeholder="Enter group name"
    />

    <button type="submit">Add</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Group } from "../helpers/model/group";
import { useAppStore } from "../helpers/stores/AppStore";
import { useRouter } from "vue-router";
const { addGroup, setCurrentGroupId } = useAppStore();

const groupName = ref("");

const router = useRouter();

const addNewGroup = () => {
  const group: Group = {
    name: groupName.value,
    id: Date.now().toString(),
    members: [],
    transactions: [],
  };

  addGroup(group);

  setCurrentGroupId(group.id);

  router.push("/groups");
};
</script>
