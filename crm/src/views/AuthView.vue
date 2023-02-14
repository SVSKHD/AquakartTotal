<template>
  <div class="window-height window-width row justify-center items-center">
    <q-card class="shadow-24" style="width: 400px; height: 340px">
      <q-card-section class="text-center">
        <q-img
          src="../LogoImages/logo.png"
          style="height: 140px; max-width: 150px"
        />
        <div class="text-h6">Signin To Aqua-Crm</div>
        <hr />
      </q-card-section>
      <q-card-section>
        <q-btn color="orange-10" flat class="full-width" icon="eva-google-outline"  size="25px" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>
