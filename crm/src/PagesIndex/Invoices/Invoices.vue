<template>
  <div class="q-pa-md">
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="Invoices" label="Invoices" />
        <q-tab name="Gst-Invoices" label="Gst-Invoices" />
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="Invoices">
          <div class="q-pa-md row justify-evenly">
            <div class="col-lg-5 col-md-5 col-xs-12 col-sm-12">
              <q-card>
                <q-card-section></q-card-section>
              </q-card>
            </div>
            <div class="col-lg-6 col-md-6 col-xs-12 colsm-12">
              <q-card>
                <q-card-section></q-card-section>
              </q-card>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="Gst-Invoices"> </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let tab = ref("invoices");
    return {
      tab,
    };
  },
};
</script>
