<template>
  <input
    v-model="memberName"
    type="text"
    name="member_name"
    placeholder="Enter member name"
  />

  <button @click="addMember">Add</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useGroupStore } from "../../helpers/stores/GroupStore";

const groupStore = useGroupStore();

const memberName = ref("");

const addMember = () => {
  if (!memberName.value) return alert("Please enter a name");

  const member = {
    name: memberName.value,
    id: Date.now().toString(),
  };

  groupStore.addMember(member);
};
</script>
