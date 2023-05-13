<template>
  <div v-if="group">
    <h1>{{ group.name }}</h1>

    <button @click="toggle = !toggle">
      {{ toggle ? "Show Members" : "Show Transactions" }}
    </button>

    <div v-if="!toggle && group.members.length">
      <h2>Members</h2>

      <Persons>
        <Person
          v-for="member in group.members"
          :key="member.id"
          :groupId="groupId"
          :person="member"
        />
      </Persons>
    </div>

    <div v-if="toggle && group.transactions.length">
      <h2>Transactions</h2>

      <ul>
        <li v-for="transaction in group.transactions" :key="transaction.id">
          {{ transaction.title }}
        </li>
      </ul>
    </div>
  </div>

  <div>
    <RouterLink :to="groupId + '/members/add'"> Add Member </RouterLink>
    <RouterLink :to="groupId + '/transactions/add'">
      Add Transaction
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useGroupStore } from "../helpers/stores/GroupStore";
import { useRoute } from "vue-router";

const groupStore = useGroupStore();

const group = groupStore;

const toggle = ref(false);

const route = useRoute();

const groupId = route.params.id.toString();
</script>
