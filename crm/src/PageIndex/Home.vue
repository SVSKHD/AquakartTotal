<template>
  <div class="row q-pa-md">
    <div v-for="item in onlineMenu" :key="item">
      <HomeCard :title="item" />
    </div>
    <div v-for="item in offlineMenu" :key="item">
      <HomeCard :title="item.name" :icon="item.icon" :path="item.path" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import HomeCard from "@/components/cards/HomeCard.vue";
export default {
  components: { HomeCard },
  setup() {
    let onlineMenu = ref([]);
    let offlineMenu = ref([
      {
        name: "Invoices",
        path: "/invoices",
        icon: "eva-browser-outline",
      },
    ]);
    return {
      onlineMenu,
      offlineMenu,
    };
  },
};
</script>
