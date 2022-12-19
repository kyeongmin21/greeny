<template>
  <div class="join">
    <div class="join_cont">
      <div class="join_input">
        <h3>Join</h3>
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
                <InputWithValidation
                  rules="required|password"
                  type="text"
                  title="비밀번호"
                  name="form.password"
                  v-model="form.password"
                  autocomplete="off"
                  ref="pw"
                  placeholder="비밀번호(8-20자 이내, 영문, 숫자 포함)"/>
                <InputWithValidation
                  rules="required|password"
                  type="password"
                  title="비밀번호"
                  name="form.password"
                  v-model="form.password"
                  autocomplete="off"
                  ref="pw"
                  placeholder="비밀번호 확인"/>
                <InputWithValidation rules="required|email"
                                     type="email"
                                     title="이메일"
                                     name="form.id"
                                     v-model="form.username"
                                     autocomplete="off"
                                     placeholder="닉네임을 입력해주세요."/>
              </b-form>
            </ValidationObserver>
          </li>
        </ul>
      </div><!--join_input-->

      <div class="agreement_wrap">
        <input type="checkbox"
               id="all-agree"
               v-model="totalAgreeCheck"
               @change="totalCheck"><label for="all-agree"> 전체 동의</label>
        <div class="agreement">
          <ul>
            <li>
              <input type="checkbox" id="personal-agree" v-model="personalAgree">
              <label for="personal-agree"> 개인정보 수집 및 이용 동의</label><span>(필수)</span>
            </li>
            <li>
              <input type="checkbox" id="location-agree" v-model="locationAgree">
              <label for="location-agree"> 위치기반서비스 이용약관 동의</label><span>(필수)</span>
            </li>
            <li>
              <input type="checkbox" id="age-agree" v-model="ageAgree">
              <label for="age-agree">만 14세 이상입니다.</label><span>(필수)</span>
            </li>
            <li>
              <input type="checkbox" id="marketing-agree" v-model="marketingAgree">
              <label for="marketing-agree">마케팅 정보 수진 동의</label><span>(필수)</span>
            </li>
          </ul>
        </div>
        <p>약관보기</p>
      </div><!--agreement_wrap-->


      <div class="btn_wrap">
        <b-button variant="outline-secondary">취소</b-button>
        <b-button variant="secondary">회원가입</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import {ValidationObserver} from 'vee-validate'
import InputWithValidation from '@/components/common/validations/inputbox'

export default {
  name: "Join",
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
      totalAgreeCheck: false,
      personalAgree: false,
      locationAgree: false,
      ageAgree: false,
      marketingAgree: false,
    }
  },
  methods: {
    resetForm() {
      requestAnimationFrame(() => {
        this.$refs.observer.reset()
      })
    },
    totalCheck() {
      if (this.totalAgreeCheck) {
        this.personalAgree = true;
        this.locationAgree = true;
        this.ageAgree = true;
        this.marketingAgree = true;
        this.totalAgreeCheck = true;
      } else {
        this.personalAgree = false;
        this.locationAgree = false;
        this.ageAgree = false;
        this.marketingAgree = false;
        this.totalAgreeCheck = false;
      }
    },
  }
}
</script>

<style scoped>

</style>