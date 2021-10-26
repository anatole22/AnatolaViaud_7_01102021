<template>
    <div id="app">
      <NavHeader></NavHeader>
      <router-view></router-view>
      <Footer></Footer>
    </div>
</template>

<script>
import NavHeader from "./components/NavHeader"
import Footer from "./components/Footer"

export default {
    name: "App",
    components: { 
        NavHeader,
        Footer
    }
}
</script>

<style>
  body {
      background-image: url(https://wallpaperaccess.com/full/643379.jpg);
      background-size: cover;
  }
</style>
