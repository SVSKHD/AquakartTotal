<template>
  <q-layout view="lHh lpR fFf">
    <q-header elevated class="bg-white text-white">
      <q-toolbar>
        <q-btn dense flat color="black" :icon="icon" @click="drawerClick" />
        <q-btn dense flat color="black" icon="eva-home-outline" to="/home" />
        <q-space />
        <q-chip square>
          <q-avatar
            icon="eva-globe-outline"
            color="grey-10"
            text-color="white"
          />
          {{ browserName }}
        </q-chip>
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
import { ref, watch, onBeforeMount } from "vue";
import DeviceDetector from "device-detector-js";

export default {
  setup() {
    let miniState = ref(true);
    let drawer = ref(false);
    let icon = ref("eva-arrowhead-left");
    let browserName = ref("");
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

    //lifecycle
    const BrowserDetect = onBeforeMount(() => {
      const deviceDetector = new DeviceDetector();
      const userAgent = navigator.userAgent;
      const device = deviceDetector.parse(userAgent);
      browserName.value = device.client.name;
      console.log("browser", browserName.value);
    });

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
      browserName,
      //functions
      drawerClick,
      BrowserDetect,
    };
  },
};
</script>
