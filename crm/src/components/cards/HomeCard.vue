<template>
  <q-card class="my-card">
    <q-card-section>
      <q-icon :name="icon" size="3em" />
      <div class="text-h6">{{ title }}</div>
    </q-card-section>

    <q-separator />

    <q-card-actions>
      <q-btn flat round icon="eva-navigation-2-outline" :to="path" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  emits: [],
  props: ["title", "icon", "path"],
};
</script>
