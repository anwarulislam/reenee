<template>
  <div v-if="component === 'main'">
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
          {{ transaction.name }}
        </li>
      </ul>
    </div>
  </div>

  <div v-if="component === 'main'">
    <button @click="component = 'add-member'">Add Member</button>
    <button @click="component = 'add-tr'">Add Transaction</button>
  </div>

  <div v-if="component === 'add-member'">
    <input
      v-model="memberName"
      type="text"
      name="member_name"
      placeholder="Enter member name"
    />

    <button @click="addMember">Add</button>
  </div>

  <div v-if="component === 'add-tr'">
    <input
      v-model="memberName"
      type="text"
      name="member_name"
      placeholder="Enter member name"
    />

    <button @click="addMember">Add</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Group } from "../model/group";

const toggle = ref(false);

const component = ref<"main" | "add-member" | "add-tr">("main");

const props = defineProps<{
  group: Group;
}>();

const emits = defineEmits(["updateGroup"]);

const memberName = ref("");

const addMember = () => {
  if (!memberName.value) return alert("Please enter a name");

  const member = {
    name: memberName.value,
    id: Date.now().toString(),
  };

  const payload = {
    ...props.group,
    members: [...props.group.members, member],
  };

  emits("updateGroup", payload);
};
</script>
