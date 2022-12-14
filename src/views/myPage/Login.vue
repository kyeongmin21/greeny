<template>
  <div class="login">
    <div class="login_cont">

      <div class="login_input">
        <h3>LOGIN</h3>
        <ul>
          <li>
            <ValidationObserver ref="observer" v-slot="{ passes }" tag="div">
              <b-form @submit.prevent="passes(onSubmit);" @reset="resetForm" class=" ">
                <InputWithValidation rules="required|email"
                                     type="email"
                                     title="이메일"
                                     name="form.id"
                                     v-model="form.username"
                                     autocomplete="off"
                                     placeholder="이메일을 입력해주세요."/>
                <InputWithValidation v-if="togglePassword"
                                     rules="required|password"
                                     type="text"
                                     title="비밀번호"
                                     name="form.password"
                                     v-model="form.password"
                                     autocomplete="off"
                                     ref="pw"
                                     placeholder="비밀번호를 입력해주세요."
                                     style="border: 1px solid blue; position:relative; "/>
                <InputWithValidation v-else
                                     rules="required|password"
                                     type="password"
                                     title="비밀번호"
                                     name="form.password"
                                     v-model="form.password"
                                     autocomplete="off"
                                     ref="pw"
                                     placeholder="비밀번호를 입력해주세요."/>
              </b-form>
            </ValidationObserver>
          </li>
          <li>
            <label for="toggle-pw" @click="passwordShow">
              <input type="checkbox" id="toggle-pw" @click="passwordShow"> 비밀번호 표시
            </label>
            <label for="auto-login">
              <input type="checkbox" id="auto-login"> 자동 로그인
            </label>
          </li>
          <li>
            <b-button variant="light" @click="login">로그인</b-button>
          </li>
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
          <li @click="kakaoLogin"><img src="/images/svg/kakao.svg" alt="카카오로그인"></li>
          <li><img src="/images/svg/google.svg" alt="구글로그인"></li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import {ValidationObserver} from 'vee-validate'
import InputWithValidation from '@/components/common/validations/inputbox'
window.Kakao.init('9a15de5db940f8d66cc86f1878c9915c')
export default {
  name: "Login",
  components: {
    ValidationObserver,
    InputWithValidation
  },
  data() {
    return {
      form_: {
        username: '',
        password: ''
      },
      form: {},
      invalidMessage: '',
      togglePassword: false,
    }
  },
  methods: {
    resetForm() {
      requestAnimationFrame(() => {
        this.$refs.observer.reset()
      })
    },
    passwordShow() {
      this.togglePassword = !this.togglePassword
      if (this.togglePassword) this.$refs.pw.$attrs.type = 'text'
      else this.$refs.pw.$attrs.type = 'password'
    },
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: 'profile_nickname',
        success: this.getKakaoAccount
      })
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: res => {
          console.log('res', res)
          const kakao_account = res.kakao_account
          const nickname = kakao_account.profile.nickname
          console.log('nickname', nickname)
          console.log('로그인 성공!')
          window.location.replace('/')
        },
        fail: error => {
          console.log(error)
        }
      })
    },

  }
}
</script>

<style scoped>

</style>