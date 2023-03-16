<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar>
      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar>
        Aquakart
      </q-toolbar-title>
      <q-btn dense flat icon="eva-shopping-cart-outline">
        <q-badge color="white" class="text-black" floating rounded>
          1
        </q-badge>
      </q-btn>
      <q-btn dense flat round icon="eva-person-outline" @click="toggleRightDrawer" />
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  emits:["toggleDrawer"],
  setup(props,context){
    const toggleRightDrawer = (e) =>{
      context.emit("toggleDrawer",e.target.value)
    }
    return{
      toggleRightDrawer
    }
  }
}
</script>
