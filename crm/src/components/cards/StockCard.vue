<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">{{ title }}</div>
      <hr />
    </q-card-section>

    <q-card-section>
      <slot />
    </q-card-section>
    <q-separator vertical />
    <q-card-section>
      <div class="text-h6">
        Total Stock Value -- <span class="text-green">{{ total }}/-</span>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: ["total", "title"],
  setup() {
    return {};
  },
};
</script>
