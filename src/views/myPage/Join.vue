<template>
  <div class="join">
    <div class="join_cont">
      <div class="join_input">

        <h3>
          회원가입
          <p><JoinTab /></p>
        </h3>
        <router-view />
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
