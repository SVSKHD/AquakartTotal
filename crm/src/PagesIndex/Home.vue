<template>
  <div class="q-pa-md">
    <BalanceCard title="Balance On Present Day"/>
  </div>
  <div class="q-pa-md">
    <StockCard title="Stock As Of Today"/>
  </div>
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
import BalanceCard from "@/components/cards/BalanceCard.vue";
import StockCard from "@/components/cards/StockCard.vue";
export default {
  components: { HomeCard, BalanceCard, StockCard },
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
