<template>
    <q-layout view="hHh lpR fFf">
  
<aqua-header @toggle-drawer="toggleRightDrawer"/>
  
      <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
        <!-- drawer content -->
      </q-drawer>
  
      <q-page-container>
        <router-view />
      </q-page-container>
  
<aqua-footer/>
  
    </q-layout>
  </template>
  
  <script>
  import { ref } from 'vue'
  import AquaHeader from "./Header.vue"
  import AquaFooter from "./footer.vue"
  export default {
    components:{AquaHeader , AquaFooter},
    setup () {
      const rightDrawerOpen = ref(false)
  
      return {
        rightDrawerOpen,
        toggleRightDrawer () {
          rightDrawerOpen.value = !rightDrawerOpen.value
        }
      }
    }
  }
  </script>
