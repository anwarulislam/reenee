<template>
  <form @submit.prevent="addMember">
    <input
      v-model="memberName"
      type="text"
      name="member_name"
      placeholder="Enter member name"
    />
    <button type="submit">Add</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useGroupStore } from "./../../../../helpers/stores/GroupStore";
import { useRouter } from "vue-router";

const router = useRouter();

const groupStore = useGroupStore();

const memberName = ref("");

const addMember = () => {
  if (!memberName.value) return alert("Please enter a name");

  const member = {
    name: memberName.value,
    id: Date.now().toString(),
    balance: 0,
  };

  groupStore.addMember(member);

  router.push("/");
};
</script>
