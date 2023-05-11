<template>
  <li
    class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600"
  >
    <RouterLink :to="'/members/' + pid">
      <span class="underlined">{{ name }}</span>
    </RouterLink>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  pid: string;
}>();
</script>
