<template>
  <div class="window-height window-width row justify-center items-center">
    <q-card class="shadow-24" style="width: 400px; height: 440px">
      <q-card-section class="text-center">
        <q-img
          src="../LogoImages/logo.png"
          style="height: 140px; max-width: 150px"
        />
        <div class="text-h6">Signin To Aqua-Crm</div>
        <hr />
      </q-card-section>
      <q-card-section>
        <form class="q-px-sm q-pt-xl">
          <q-input
            ref="email"
            outlined
            dense
            clearable
            v-model="email"
            type="email"
            lazy-rules
            :rules="[this.required, this.isEmail, this.short]"
            label="Email"
          >
            <template v-slot:prepend>
              <q-icon name="eva-email-outline" />
            </template>
          </q-input>
          <q-input
            ref="email"
            outlined
            dense
            clearable
            v-model="email"
            type="password"
            lazy-rules
            :rules="[this.required, this.isEmail, this.short]"
            label="password"
          >
            <template v-slot:prepend>
              <q-icon name="eva-unlock-outline" />
            </template>
          </q-input>
        </form>
      </q-card-section>

      <q-card-actions class="q-px-lg">
        <q-btn
          unelevated
          color="secondary"
          @click="submit"
          class="full-width text-white"
          label="signin"
        />
      </q-card-actions>
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
