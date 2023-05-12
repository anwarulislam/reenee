<template>
  <ul>
    <li v-for="group in appStore.groups">
      <RouterLink :to="'/groups/' + group.id">
        <span>{{ group.name }}</span>
      </RouterLink>
    </li>
  </ul>

  <RouterLink to="/groups/add"> Add Group </RouterLink>
</template>

<script setup lang="ts">
import { useAppStore } from "~/helpers/stores/AppStore";

const appStore = useAppStore();
</script>
