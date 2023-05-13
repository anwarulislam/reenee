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
      console.log(this.members.filter((m) => m.id != id));
      this.members = this.members.filter((m) => m.id != id);
    },
    getMember(id: string) {
      console.log(this.members.find((m) => m.id == id));
      return this.members.find((m) => m.id == id)!;
    },
    addTransaction(transaction: Transaction) {
      this.transactions.push(transaction);
    },
  },
});
