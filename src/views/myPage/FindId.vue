<template>
  <div class="findId">
    <h6>ID를 잊으셨나요?</h6>
    <span>아래 정보를 입력해주세요.</span>

    <div class="mt30">
      <ValidationObserver ref="observer" v-slot="{ passes }" tag="div">
        <b-form @submit.prevent="passes(onSubmit);" @reset="resetForm" class=" ">
          <p>이름</p>
          <InputWithValidation rules="required|name"
                               type="text"
                               title="이름"
                               name="form.name"
                               v-model="form.name"
                               autocomplete="off"
                               placeholder="이름을 입력하세요."/>
          <p>이메일</p>
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

    <div class="btn_wrap mt30">
      <b-button variant="secondary">확인</b-button>
      <router-link to="/join/step1"><p>회원가입</p></router-link>
    </div>

  </div>
</template>

<script>
import {ValidationObserver} from "vee-validate";
import InputWithValidation from "@/components/common/validations/inputbox.vue";

export default {
  name: "FindId",
  components: {
    ValidationObserver,
    InputWithValidation,
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
      },
    }
  },
  methods: {
    resetForm() {
      requestAnimationFrame(() => {
        this.$refs.observer.reset()
      })
    },
  }
}
</script>

<style>

</style>