import { defineStore } from "pinia";
import { Member } from "../model/member";
import { Transaction } from "../model/transaction";
import { Group } from "../model/group";

export const useGroupStore = defineStore({
  id: "GroupStore",
  state: () => ({
    id: <string>"",
    name: <string>"",
    members: <Member[]>[],
    transactions: <Transaction[]>[],
  }),
  actions: {
    setGroup(group: Group | null) {
      if (!group) return;
      this.id = group.id;
      this.name = group.name;
      this.members = group.members;
      this.transactions = group.transactions;
    },
    addMember(member: Member) {
      this.members.push(member);
    },
    deleteMember(id: string) {
      this.members = this.members.filter((m) => m.id != id);
    },
    getMember(id: string) {
      return this.members.find((m) => m.id == id)!;
    },
    //adjust balance will receive affected members and their amount
    adjustBalance(affectedMembers: Map<string, number>) {
      // adjust all members balance and update the store
      this.members.forEach((member) => {
        if (member.balance === undefined) {
          member.balance = 0;
        }

        if (affectedMembers.has(member.id)) {
          member.balance += affectedMembers.get(member.id)!;
        }
      });
    },
    addTransaction(transaction: Transaction) {
      console.log(transaction);

      const affectedMembers = new Map();
      transaction.paidBy.forEach((tr) => {
        affectedMembers.set(tr.id, tr.amount);
      });

      transaction.paidFor.forEach((tr) => {
        if (affectedMembers.has(tr.id)) {
          affectedMembers.set(tr.id, affectedMembers.get(tr.id) - tr.amount);
        } else {
          affectedMembers.set(tr.id, -tr.amount);
        }
      });

      console.log(affectedMembers);

      this.adjustBalance(affectedMembers);

      // this.transactions.push(transaction);
    },
  },
});
