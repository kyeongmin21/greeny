<template>
  <div class="step1">

    <div class="step1_wrap">
      <input type="checkbox"
             id="all-agree"
             v-model="totalAgreeCheck"
             @change="totalCheck"><label for="all-agree"> 전체 동의</label>

      <div class="agreement">
        <ul>
          <li>
            <input type="checkbox" id="age-agree" v-model="ageAgree">
            <label for="age-agree">만 14세 이상입니다. (필수)</label><span></span>
          </li>
          <li>
            <input type="checkbox" id="personal-agree" v-model="personalAgree">
            <label for="personal-agree"> 이용약관 동의 (필수)</label>
            <span v-b-modal.modal-agree>보기</span>
          </li>
          <li>
            <input type="checkbox" id="location-agree" v-model="locationAgree">
            <label for="location-agree"> 개인정보 수집 및 이용 동의 (필수)</label>
            <span v-b-modal.modal-personal-agree>보기</span>
          </li>

          <li>
            <input type="checkbox" id="marketing-agree" v-model="marketingAgree">
            <label for="marketing-agree">마케팅 정보 수진 동의 (선택)</label>
            <span v-b-modal.modal-marketing-agree>보기</span>
          </li>
        </ul>
      </div><!-- agreement -->

      <div class="btn_wrap mt30">
        <ul>
          <li>
            <router-link to="/join/step2">
              <b-button variant="secondary" :disabled="inputValidation">
                동의하고 가입하기
              </b-button>
            </router-link>
          </li>
        </ul>
      </div>


    </div><!--agreement_wrap  -->

    <ModalAgree />
    <ModalPersonalAgree />
    <ModalMarketingAgree />

  </div>
</template>

<script>
import ModalAgree from "@/components/modal/ModalAgree.vue";
import ModalPersonalAgree from "@/components/modal/ModalPersonalAgree.vue";
import ModalMarketingAgree from "@/components/modal/ModalMarketingAgree.vue";

export default {
  name: "Step1",
  components: {
    ModalAgree,
    ModalPersonalAgree,
    ModalMarketingAgree,
  },
  data() {
    return {
      totalAgreeCheck: false,
      personalAgree: false,
      locationAgree: false,
      ageAgree: false,
      marketingAgree: false,
    }
  },
  computed: {
    inputValidation() {
      return !(this.personalAgree && this.locationAgree && this.ageAgree)
    }
  },
  methods: {
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

<style >

</style>