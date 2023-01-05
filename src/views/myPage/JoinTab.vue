<template>
  <div class="join_tab">
    <ul>
      <li>
        <router-link to="/join/step1"><a href="">약관동의</a></router-link>
      </li>
      <li>
        <router-link to="/join/step2"><a href="">정보입력</a></router-link>
      </li>
      <li>
        <router-link to="/join/step3"><a href="">가입완료</a></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "JoinTab",
}
</script>

<style scoped>

</style>