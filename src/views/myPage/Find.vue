<template>
  <div class="find">
    <div class="find_cont">
      <ul>
        <li>
          <router-link to="/find/id"><a href="">아이디 찾기</a></router-link>
        </li>
        <li>
          <router-link to="/find/pw"><a href="">비밀번호 찾기</a></router-link>
        </li>
      </ul>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "Find"
}
</script>

<style>
</style>