<template>
  <router-view />
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Group } from "../helpers/model/group";
import { useAppStore } from "../helpers/stores/AppStore";
import { useRouter } from "vue-router";

const groupStore = useAppStore();

const selectedGroup = ref<Group | null>(groupStore.currentGroup);
const router = useRouter();
onMounted(() => {
  router.replace(`/groups/${selectedGroup.value?.id}`);
});
</script>
