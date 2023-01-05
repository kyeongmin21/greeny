<template>
  <div class="join">
    <div class="join_cont">
      <div class="join_input">
        <h3>
          회원가입
          <p><JoinTab /></p>
        </h3>

        <router-view />



<!--
        <section>
          <b-tabs content-class="mt-3">
            <b-tab title="약관동의" active>
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
              </div>&lt;!&ndash;agreement_wrap&ndash;&gt;
            </b-tab>

            <b-tab title="정보입력">

            </b-tab>

            <b-tab title="가입완료">
              <p>I'm the second tab</p>
            </b-tab>
          </b-tabs>
        </section>
-->

      </div><!--join_input-->


    </div>
  </div>
</template>

<script>

import JoinTab from "@/views/myPage/JoinTab.vue";
export default {
  name: "Join",
  components: {
    JoinTab
  },
  data() {
    return {
      invalidMessage: '',
      totalAgreeCheck: false,
      personalAgree: false,
      locationAgree: false,
      ageAgree: false,
      marketingAgree: false,
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

<style scoped>

</style>
