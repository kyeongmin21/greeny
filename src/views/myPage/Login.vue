<template>
  <div class="login">
    <div class="login_cont">

      <div class="login_input">
        <h3>LOGIN</h3>
        <ul>
          <li><input type="email" placeholder="이메일을 입력하세요"></li>
          <li><input type="password" placeholder="비밀번호를 입력하세요"></li>
          <li>
            <label for="auto-login"><input type="checkbox" id="auto-login"> 자동 로그인</label>
          </li>
          <li><b-button variant="light" @click="login">로그인</b-button></li>
        </ul>
      </div>

      <div class="login_process">
        <ul>
          <li>이메일 찾기</li>
          <span>| </span>
          <li>비밀번호 찾기</li>
        </ul>
        <ul>
          <li>회원가입</li>
        </ul>
      </div>

      <div class="login_oauth">
        <h5>간편 로그인</h5>
        <ul>
          <li><img src="/images/svg/naver.svg" alt="네이버로그인"></li>
          <li><img src="/images/svg/kakao.svg" alt="카카오로그인"></li>
          <li><img src="/images/svg/google.svg" alt="구글로그인"></li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {}
  },
  methods: {
    login() {
      console.log('로그인!!')
    }
  }
}
</script>

<style scoped>

</style>