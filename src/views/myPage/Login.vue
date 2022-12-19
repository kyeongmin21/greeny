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
                                     placeholder="비밀번호를 입력해주세요."/>
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
            <div>
              <input type="checkbox"
                     id="pw-toggle"
                     @change="passwordShow">
              <label @click.prevent="passwordShow" for="pw-toggle" class="ml05"> 비밀번호 표시</label>
            </div>
            <div>
              <input type="checkbox" id="auto-login">
              <label for="auto-login" class="ml05">자동 로그인</label>
            </div>
          </li>
          <li>
            <b-button variant="light">로그인</b-button>
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
          <li>
            <router-link to="/join"><a href="">회원가입</a></router-link>
          </li>
        </ul>
      </div>

      <div class="login_oauth">
        <h5>간편 로그인</h5>
        <ul>
          <li id="naverIdLogin"><img src="/images/svg/naver.svg" alt="네이버로그인"></li>
          <li @click="kakaoLogin"><img src="/images/svg/kakao.svg" alt="카카오로그인"></li>
        </ul>
        <ul>
          <li @click="logout">네이버 로그아웃</li>
          <li @click="logout">카카오 로그아웃</li>
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
    InputWithValidation,
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
      naverLogin: null,
    }
  },
  mounted() {
    this.naverLogin = new window.naver.LoginWithNaverId({
      clientId: 'EInqwV8yZaaAV_Y685W8',
      callbackUrl: "http://localhost:8080",
      isPopup: false,
      callbackHandle: true,
      loginButton: {color: 'green', type: 1, height: 40},
    })
    this.naverLogin.init()

    this.naverLogin.getLoginStatus((status) => {
      if (status) {
        const email = this.naverLogin.user.getEmail()
        if (email === undefined || email === null) {
          console.log('이메일은 필수정보 입니다.')
          this.naverLogin.reprompt()
          return
        } else {
          console.log('callback 처리에 실패하였습니다.')
        }
      }
    })
  },
  methods: {
    resetForm() {
      requestAnimationFrame(() => {
        this.$refs.observer.reset()
      })
    },
    passwordShow() {
      const pw = document.getElementById('pw-toggle')
      this.togglePassword = !this.togglePassword

      if (this.togglePassword) {
        this.$refs.pw.$attrs.type = 'text'
        pw.checked = true
      } else {
        this.$refs.pw.$attrs.type = 'password'
        pw.checked = false
      }
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
          const kakao_account = res.kakao_account
          const nickname = kakao_account.profile.nickname
          console.log('nickname', nickname)
          window.location.replace('/')
        },
      })
    },
    logout() {
      localStorage.clear();
      window.location.replace('/')
      // window.Kakao.API.request({url: '/v1/user/unlink'})
    },
  }
}
</script>

<style scoped>

</style>