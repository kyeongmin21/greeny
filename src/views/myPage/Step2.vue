<template>
  <div class="step2">

    <div class="step2_wrap">
      <ValidationObserver ref="observer" v-slot="{ passes }" tag="div">
        <b-form @submit.prevent="passes(onSubmit);" @reset="resetForm" class=" ">
          <p><span>●</span> 아이디</p>
          <InputWithValidation rules="required|id"
                               ref="obs1"
                               type="text"
                               title="아이디"
                               name="form.id"
                               v-model="form.id"
                               autocomplete="off"
                               placeholder="아이디 (2-14자 이내, 영문, 숫자 포함)"/>
          <p><span>●</span> 비밀번호</p>
          <InputWithValidation rules="required|password"
                               type="text"
                               title="비밀번호"
                               name="form.password"
                               v-model="form.password"
                               autocomplete="off"
                               ref="pw"
                               placeholder="비밀번호 (8-20자 이내, 영문, 숫자 포함)"/>
          <p><span>●</span> 비밀번호 확인</p>
          <InputWithValidation rules="required|password"
                               type="password"
                               title="비밀번호 확인"
                               name="form.confirmPassword"
                               v-model="form.confirmPassword"
                               autocomplete="off"
                               ref="confirmPassword"
                               placeholder="비밀번호를 재입력해주세요."/>
          <p><span>●</span> 이름</p>
          <InputWithValidation rules="required|name"
                               type="text"
                               title="이름"
                               name="form.name"
                               v-model="form.name"
                               autocomplete="off"
                               placeholder="이름을 입력하세요."/>
          <p><span>●</span> 이메일</p>
          <InputWithValidation rules="required|email"
                               type="text"
                               title="이메일"
                               name="form.email"
                               v-model="form.email"
                               autocomplete="off"
                               placeholder="이메일을 입력해주세요."/>
        </b-form>
      </ValidationObserver>
    </div>

    <div class="btn_wrap">
      <ul>
        <li class="mr5">
          <router-link to="/join/step1">
            <b-button variant="outline-secondary">취소</b-button>
          </router-link>
        </li>
        <li>
          <router-link to="/join/step3">
            <b-button variant="secondary" @click="joinSuccess" :disabled="inputValidation">회원가입</b-button>
          </router-link>
        </li>
      </ul>


    </div>
  </div>
</template>

<script>
import {ValidationObserver} from 'vee-validate'
import InputWithValidation from '@/components/common/validations/inputbox'

export default {
  name: "Step2",
  components: {
    ValidationObserver,
    InputWithValidation,
  },
  data() {
    return {
      form: {
        id: '',
        password: '',
        confirmPassword: '',
        name: '',
        email: '',
      },
    }
  },
  computed: {
    inputValidation() {
      return !(this.form.id !== '' && this.form.password !== '' && this.form.name !== '' && this.form.email !== '')
    }
  },
  methods: {
    resetForm() {
      requestAnimationFrame(() => {
        this.$refs.observer.reset()
      })
    },

    joinSuccess() {
    }
  }
}
</script>

<style scoped>

</style>