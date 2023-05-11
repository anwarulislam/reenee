<template>
  <main class="flex flex-1 w-full" role="main">
    hello

    <RouterView v-slot="{ Component }" class="flex flex-1">
      <Transition name="fade" mode="out-in" appear>
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>

<script setup lang="ts">
import { RouterView, useRouter } from "vue-router";
</script>
