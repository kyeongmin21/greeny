<template>
  <div class="category">
    <ul class="navbar_cate">
      <li>
        <router-link to="/challenge"><a href="">CHALLENGE</a></router-link>
      </li>
      <li>
        <router-link to="/magazine"><a href="">MAGAZINE</a></router-link>
      </li>
      <li>
        <router-link to="/dailylook"><a href="">DAILYLOOK</a></router-link>
      </li>
      <li>
        <router-link to="/event"><a href="">EVENT</a></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Category",
}
</script>

<style scoped>

</style>