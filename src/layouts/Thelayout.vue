<template>
  <component :is="layout">
    <div>
      <slot/>
    </div>
  </component>
</template>

<script>

export default {
  name: "TheLayout",
  computed: {
    layout () {
      const layout = 'DefaultLayout'
      return () => import(`@/layouts/${layout}.vue`)
    }
  }
}
</script>

<style scoped>

</style>