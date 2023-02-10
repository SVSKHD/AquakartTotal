<template>
  <q-layout view="lHh lpR fFf">
    <q-header elevated class="bg-white text-white">
      <q-toolbar>
        <q-btn dense flat color="black" :icon="icon" @click="drawerClick" />
        <q-btn
          dense
          flat
          color="black"
          icon="eva-home-outline"
          to="/"
        />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Aquakart
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="!drawer || miniState"
      @click.capture="drawerClick"
      :breakpoint="500"
      class="bg-white shadow-24"
    >
      <q-list bordered separator>
        <q-item v-for="item in menu" clickable :key="item" v-ripple>
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section>
            {{ item.name }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, watch } from "vue";

export default {
  setup() {
    let miniState = ref(true);
    let drawer = ref(false);
    let icon = ref("eva-arrowhead-left");
    let menu = ref([
      {
        name: "online-operations",
        path: "/online-oprations",
        icon: "eva-shake-outline",
      },
      {
        name: "offline-operations",
        path: "/offline-oprations",
        icon: "eva-clipboard-outline",
      },
    ]);
    //watchers
    watch(miniState, () => {
      miniState.value
        ? (icon.value = "eva-arrowhead-left")
        : (icon.value = "eva-arrowhead-right");
    });
    //functions
    const drawerClick = () => {
      drawer.value = !drawer.value;
      miniState.value = !miniState.value;
    };
    return {
      drawer,
      miniState,
      menu,
      icon,
      //functions
      drawerClick,
    };
  },
};
</script>
