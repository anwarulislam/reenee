<template>
  <div>
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
          :name="member.name"
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
    <a href="/members/add">Add Member</a>
    <a href="/transactions/add">Add Transaction</a>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useGroupStore } from "../helpers/stores/GroupStore";

const groupStore = useGroupStore();

const group = groupStore.currentGroup!;

const toggle = ref(false);
</script>
