<template>
  <form @submit.prevent="addTransaction">
    <input
      v-model="transactionDetail"
      type="text"
      placeholder="Enter details"
    />
    <input v-model="amount" type="text" placeholder="Enter amount" />

    <button type="submit">Add</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useGroupStore } from "@helpers/stores/GroupStore";

const groupStore = useGroupStore();

const transactionDetail = ref("");
const amount = ref(0);

const addTransaction = () => {
  if (!transactionDetail.value) return alert("Please enter a name");

  const member = {
    name: transactionDetail.value,
    id: Date.now().toString(),
  };

  groupStore.addMember(member);
};
</script>
