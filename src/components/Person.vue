<template>
  <li
    class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600"
  >
    <RouterLink :to="memberRoute">
      <span class="underlined">{{ person.name }}</span>

      <span>
        {{ person.balance }}
      </span>
    </RouterLink>
  </li>
</template>

<script setup lang="ts">
import { Member } from "../helpers/model/member";

const props = defineProps<{
  person: Member;
  groupId: string;
}>();

const memberRoute = `${props.groupId}/members/${props.person.id}`;
</script>
