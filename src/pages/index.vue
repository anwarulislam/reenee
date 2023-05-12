<template>
  <router-view />
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Group } from "@helpers/model/group";
import { useAppStore } from "./../helpers/stores/AppStore";
import { useRoute, useRouter } from "vue-router";

const groupStore = useAppStore();

const selectedGroup = ref<Group | null>(groupStore.currentGroup);
const router = useRouter();
const route = useRoute();
onMounted(() => {
  console.log(route);
  // router.replace(`/groups/${selectedGroup.value?.id}`);
});
</script>
