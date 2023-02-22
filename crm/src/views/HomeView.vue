<template>
  <div class="home">
    <Home />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/PagesIndex/Home.vue";
import returnUrls from "@/Services/constants";
export default {
  name: "HomeView",
  components: { Home },
  setup(){
    const {url} = returnUrls()
    console.log(url)
  }
};
</script>
