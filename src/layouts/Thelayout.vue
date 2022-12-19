<template>
  <component :is="layout">
    <slot/>
  </component>
</template>

<script>

export default {
  name: "TheLayout",
  computed: {
    layout () {
      const layout =  this.$route.meta.layout || 'DefaultLayout'
      return () => import(`@/layouts/${layout}.vue`)
    }
  }
}
</script>

<style scoped>

</style>