<template>
  <div id="app">
    <Header />
    <div id="nav">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import 'assets/css/style.css';
</style>