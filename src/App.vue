<template>
  <div id="app">
    <the-layout>
      <div id="nav">
        <router-view/>
      </div>
    </the-layout>
  </div>
</template>

<script>
import TheLayout from "@/layouts/Thelayout";

export default {
  components: {
    TheLayout
  }
}
</script>

<style lang="scss">
@import 'assets/css/style.css';
</style>