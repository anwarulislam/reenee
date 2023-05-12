<template>
  Person details

  <button @click="deleteMember">Delete</button>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useGroupStore } from "~/helpers/stores/GroupStore";

const route = useRoute();
const router = useRouter();

const groupStore = useGroupStore();

const deleteMember = () => {
  groupStore.deleteMember(route.params.id.toString());

  router.push("/");
};
</script>
