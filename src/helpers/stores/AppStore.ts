import { defineStore } from "pinia";
import { Group } from "../model/group";
import { Member } from "../model/member";

export const useAppStore = defineStore({
  id: "AppStore",
  state: () => ({
    groups: <Group[]>[],
    currentGroupId: <string | null>null,
  }),
  getters: {
    currentGroupIndex(): number {
      return this.groups.findIndex((group) => group.id === this.currentGroupId);
    },
    currentGroup(): Group | null {
      if (this.currentGroupId) {
        return (
          this.groups?.find((group) => group.id === this.currentGroupId) || null
        );
      }
      return null;
    },
  },
  actions: {
    initialize(state: any) {
      this.setGroups(state?.groups || []);
      this.setCurrentGroupId(
        state?.currentGroupId || state?.groups?.[0]?.id || null
      );
    },
    setGroups(groups: Group[]) {
      this.groups = groups;
    },
    addGroup(group: Group) {
      this.groups.push(group);
    },
    setCurrentGroupId(groupId: string) {
      if (this.currentGroupId !== groupId) this.currentGroupId = groupId;
    },
    updateCurrentGroup(group: Group) {
      this.groups[this.currentGroupIndex] = {
        id: group.id,
        members: group.members,
        name: group.name,
        transactions: group.transactions,
      };
    },
  },
});
