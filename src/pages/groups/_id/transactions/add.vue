<template>
  <form>
    <label for="trdetail">Title</label>
    <input
      id="trdetail"
      v-model="transactionDetail"
      type="text"
      placeholder="Enter details"
    />

    <label for="amount">Amount</label>
    <input
      v-model="amount"
      id="amount"
      type="text"
      placeholder="Enter amount"
    />

    <label for="paidby">Paid By</label>

    <select id="paidby" v-model="paidBy">
      <option v-for="member in members" :value="member.id">
        {{ member.name }}
      </option>
    </select>

    <ul>
      <li v-for="member in members">
        {{ member.name }} - {{ amount && amount / members.length }}
      </li>
    </ul>

    <button type="button" @click.prevent="addTransaction">Add</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useGroupStore } from "./../../../../helpers/stores/GroupStore";
import { storeToRefs } from "pinia";
import { Transaction } from "./../../../../helpers/model/transaction";
import { useRouter } from "vue-router";

const router = useRouter();

const groupStore = useGroupStore();
const { members } = storeToRefs(groupStore);

const transactionDetail = ref("new transaction");
const amount = ref(30);
const paidBy = ref("");

const addTransaction = () => {
  const transaction: Transaction = {
    amount: amount.value,
    date: Date.now(),
    id: Date.now().toString(),
    paidBy: [paidBy.value],
    paidByAmounts: [amount.value],
    paidFor: members.value.map((m) => m.id),
    paidForAmounts: members.value.map(
      (m) => amount.value / members.value.length
    ),
    title: transactionDetail.value,
    description: transactionDetail.value,
  };

  groupStore.addTransaction(transaction);

  router.push("/");
};
</script>
