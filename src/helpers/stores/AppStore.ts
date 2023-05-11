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
        console.log(this.groups);
        return (
          this.groups?.find((group) => group.id === this.currentGroupId) || null
        );
      }
      return null;
    },
  },
  actions: {
    setGroups(groups: Group[]) {
      console.log(groups);
      this.groups = groups;
    },
    addGroup(group: Group) {
      this.groups.push(group);
    },
    setCurrentGroupId(groupId: string) {
      this.currentGroupId = groupId;
    },
    addMember(member: Member) {
      console.log("addMember", this.groups);
      const currentGroupIndex = this.groups.findIndex(
        (group) => group.id === this.currentGroupId
      );
      this.groups[currentGroupIndex].members.push(member);
    },
    deleteMember(id: string) {
      console.log(id);
      const currentGroupIndex = this.groups.findIndex(
        (group) => group.id === this.currentGroupId
      );
      this.groups[currentGroupIndex].members = this.groups[
        currentGroupIndex
      ].members.filter((m) => m.id !== id);
    },
  },
});
