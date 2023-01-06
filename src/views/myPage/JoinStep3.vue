<template>
  <div class="step3">
    <div class="step3_wrap">
      <h5>회원가입이 완료 되었습니다</h5>
      <p>example@grny.com</p>
      <div class="mb20">
        환영합니다<br>
        그리니와 함께 지금 바로 챌린지에 도전해 보세요
      </div>

      <router-link to="/login">
        <b-button variant="dark">로그인</b-button>
      </router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: "JoinStep3"
}
</script>

<style scoped>

</style>