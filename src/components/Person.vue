<template>
  <li
    class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600"
  >
    {{ name }}
  </li>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>
