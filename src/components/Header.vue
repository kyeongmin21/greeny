<template>
  <div class="header">
    <ul class="left_gnb">
      <li>
        <router-link to="/"><img src="/images/svg/logo_green.svg" alt="로고"></router-link>
      </li>
    </ul>
    <ul class="gnb">
      <li>
        <router-link to="/challenge"><a href="" >CHALLENGE</a></router-link>
      </li>
      <li>
        <router-link to="/magazine"><a href="">MAGAZINE</a></router-link>
      </li>
      <li>
        <router-link to="/dailylook"><a href="">DAILYLOOK</a></router-link>
      </li>
      <li>
        <router-link to="/event"><a href="">EVENT</a></router-link>
      </li>
    </ul>
    <ul class="right_gnb">
      <li @click="modalSearch" v-b-modal.modal-search><img src="/images/svg/search.svg" alt="검색"></li>
      <li>
        <router-link to="/login">
          <img src="/images/svg/my.svg" alt="로그인">
        </router-link>
      </li>
      <li><img src="/images/svg/noti.svg" alt="알림"></li>
      <li><img src="/images/svg/write.svg" alt="글쓰기"></li>
    </ul>
    <div class="top_btn" v-show="visible" @click="goTop">
      <img src="/images/svg/top_btn.svg" alt="위로가기버튼">
    </div>

    <ModalSearch v-model="modalSearchShow"/>
  </div>
</template>

<script>
import ModalSearch from "@/components/modal/ModalSearch";
export default {
  name: "Header",
  components: {
    ModalSearch,
  },
  data() {
    return {
      visible: false,
      modalSearchShow: false,
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
      if (!this.visible) {
        this.visible = window.scrollY > 100;
      } else if (window.scrollY < 90) {
        this.visible = !this.visible;
      }
    },
    goTop() {
      window.scrollTo({top:0, left:0, behavior:'smooth'});
    },
    modalSearch() {
      this.$nextTick(() => {
        this.modalSearchShow = !this.modalSearchShow;
      })
    },
  }
}
</script>

<style scoped>

</style>