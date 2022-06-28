<template>
  <div>
    <!--<AppStone></AppStone>-->
    <h1>Добавление оборудования</h1>
    <AddEquipment></AddEquipment>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import AppStone from "@/components/AppStone.vue"; // @ is an alias to /src
import AddEquipment from "@/components/equipment/AddEquipment.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    // AppStone,
    AddEquipment,
  },
});
</script>
