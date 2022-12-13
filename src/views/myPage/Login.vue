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
                <InputWithValidation rules="required|password"
                                     type="password"
                                     title="비밀번호"
                                     name="form.password"
                                     v-model="form.password"
                                     placeholder="비밀번호를 입력해주세요."/>

                <span class="text-danger"> {{ invalidMessage }}</span>
              </b-form>
            </ValidationObserver>
          </li>
          <li>
            <label for="auto-login">
              <i class="fa fa-eye fa-lg"></i>
              <i class="fa fa-angle-right"></i>
              <font-awesome-icon icon="fa-light fa-eye" />
              <input type="checkbox" id="auto-login"> ㅋㅋ자동 로그인
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
          <li><img src="/images/svg/kakao.svg" alt="카카오로그인"></li>
          <li><img src="/images/svg/google.svg" alt="구글로그인"></li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import {ValidationObserver} from 'vee-validate'
import InputWithValidation from '@/components/common/validations/inputbox'

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
      invalidMessage: ''
    }
  },
  methods: {
    resetForm() {
      requestAnimationFrame(() => {
        this.$refs.observer.reset()
      })
    },
    login() {
    }
  }
}
</script>

<style scoped>

</style>