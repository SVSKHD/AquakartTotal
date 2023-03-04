<template>
  <q-dialog v-model="dialog" class="dialog" :persistent="persistent">
    <q-card css="w100">
      <template #header-right>
        <q-btn dense flat icon="close" v-close-popup class="close"> </q-btn>
      </template>
      <q-card-section :style="'max-height: ' + height + ''" class="scroll">
        <slot />
      </q-card-section>

      <q-card-actions align="right">
        <slot name="footer">
          <q-btn :label="l.cancel" outline color="primary" v-close-popup />
          <q-btn :label="l.ok" color="primary" @click="$emit('ok', $event)" />
        </slot>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script>
export default {
  name: "CDialog",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    persistent: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    height: {
      type: String,
      default: "50vh",
    },
    lbl: {
      type: Object,
      default() {
        return {
          cancel: "Cancel",
          ok: "Ok",
        };
      },
    },
  },
  data() {
    return {
      dialog: false,
      l: {
        cancel: "Cancel",
        ok: "Ok",
      },
    };
  },
  watch: {
    dialog() {
      this.$emit("input", this.dialog);
    },
    value() {
      this.dialog = this.value;
    },
    lbl: {
      handler() {
        this.l = {
          ...this.l,
          ...this.lbl,
        };
      },
      deep: true,
    },
  },
  mounted() {
    this.dialog = this.value;
  },
};
</script>
