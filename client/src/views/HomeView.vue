<template>
  <div class="home">
    <AppStone msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppStone from "@/components/AppStone.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    AppStone,
  },
});
</script>
