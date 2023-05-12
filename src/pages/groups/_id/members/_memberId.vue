<template>
  <div>Person details</div>

  <h1>
    {{ member?.name }}
  </h1>

  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et repudiandae
    consectetur cumque blanditiis porro magnam enim quod, distinctio aut
    consequatur quasi impedit inventore iusto ipsum iure totam pariatur maxime
    in?
  </p>

  <button @click="deleteMember">Delete</button>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useGroupStore } from "./../../../../helpers/stores/GroupStore";

const route = useRoute();
const router = useRouter();

const groupStore = useGroupStore();

const memberId = route.params.memberId.toString();
const member = groupStore.getMember(memberId);

const deleteMember = () => {
  groupStore.deleteMember(memberId);

  router.push("/");
};
</script>
