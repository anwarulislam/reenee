<template>
  <main class="flex flex-1 w-full" role="main">
    <RouterView v-slot="{ Component }" class="flex flex-1">
      <Transition name="fade" appear>
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>
