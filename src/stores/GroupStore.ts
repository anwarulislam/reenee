import { defineStore } from "pinia";
import { Group } from "../model/group";
import { Member } from "../model/member";

const getAllGroupsFromStorage = () => {
  const groups = localStorage.getItem("groups");
  if (groups) {
    return JSON.parse(groups);
  }
  return [];
};

export const useGroupStore = defineStore({
  id: "GroupStore",
  state: () => ({
    groups: <Group[]>[...getAllGroupsFromStorage()],
    currentGroupId: <string | null>getAllGroupsFromStorage()[0]?.id ?? null,
  }),
  getters: {
    currentGroup(): Group | null {
      if (this.currentGroupId) {
        return (
          this.groups.find((group) => group.id === this.currentGroupId) || null
        );
      }
      return null;
    },
  },
  actions: {
    setGroups(groups: Group[]) {
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
  },
});
