<template>
  <div class="q-pa-md">
    <BalanceCard title="Balance On Present Day" />
  </div>
  <div class="q-pa-md">
    <StockCard title="Stock As Of Today" total="30000">
      <q-btn
        align="between"
        class="btn-fixed-width"
        color="accent"
        label="create stock position"
        icon="eva-smartphone-outline"
        @click="manipulateDialog"
      />
      <q-item v-for="data in stockData" :key="data">
        <q-item-section avatar top>
          <q-icon name="eva-shopping-bag-outline" color="black" size="34px" />
        </q-item-section>

        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm"
            >Name : {{ data.stockName }}</q-item-label
          >
        </q-item-section>

        <q-item-section top>
          <q-item-label lines="1">
            <span class="text-weight-medium"
              >Quantity : {{ data.stockCount }}</span
            >
          </q-item-label>
        </q-item-section>
      </q-item>
    </StockCard>
    <aqua-dialog v-model="stockDialog">
      <form @submit.prevent="handleSubmit">
        <q-input
          v-model="stockDataPost.stockName"
          label="Stock-Name"
          outlined
          dense
        />
        <br />
        <q-input
          v-model="stockDataPost.stockDescription"
          label="Stock-Description"
          outlined
          dense
        />
        <br />
        <q-input
          v-model="stockDataPost.stockValue"
          label="Stock-Value"
          outlined
          dense
        />
        <br />
        <q-input
          v-model="stockDataPost.stockCount"
          label="Stock-Count"
          outlined
          dense
        />
        <br />
        <q-btn label="submit" type="submit" />
      </form>
    </aqua-dialog>
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
import { ref, onBeforeMount } from "vue";
import HomeCard from "@/components/cards/HomeCard.vue";
import BalanceCard from "@/components/cards/BalanceCard.vue";
import StockCard from "@/components/cards/StockCard.vue";
import StockOperations from "@/Services/Stock";
import NotificationHelpers from "../helpers/notificationHelpers";
export default {
  components: { HomeCard, BalanceCard, StockCard },
  setup() {
    const { createSuccessNotification, createErrorNotification } =
      NotificationHelpers;
    const { getStock, createStock } = StockOperations();
    let onlineMenu = ref([]);
    let offlineMenu = ref([
      {
        name: "Invoices",
        path: "/invoices",
        icon: "eva-browser-outline",
      },
    ]);
    let stockLoading = ref(false);
    let stockData = ref([]);
    let totalStockValue = ref("");
    let stockDialog = ref(false);
    let stockDataPost = ref({
      stockName: "",
      stockCount: "",
      stockDescription: "",
      stockValue: "",
    });
    const handleSubmit = () => {
      console.log(stockDataPost.value);
      createStock(stockDataPost.value)
        .then(() => {
          createSuccessNotification("Successfully Created Stock");
          stockDialog.value = false;
          stockData.value = [];
          getStock().then((data) => {
            let apiData = data.data;
            apiData.map((d) => {
              stockData.value.push(d);
            });
          });
        })
        .catch(() => {
          createErrorNotification("Please try again");
        });
    };
    const manipulateDialog = () => {
      stockDialog.value = !stockDialog.value;
    };

    const loadStock = onBeforeMount(() => {
      getStock().then((data) => {
        let apiData = data.data;
        apiData.map((d) => {
          stockData.value.push(d);
        });
        //  totalStockValue.value=stockData.value.reduce((a,b)=>)
      });
    });

    return {
      onlineMenu,
      offlineMenu,
      stockLoading,
      loadStock,
      stockData,
      totalStockValue,
      stockDialog,
      manipulateDialog,
      stockDataPost,
      handleSubmit,
    };
  },
};
</script>
