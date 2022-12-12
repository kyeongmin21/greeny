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
      <li><img src="/images/svg/search.svg" alt="검색"></li>
      <li><img src="/images/svg/my.svg" alt="마이페이지"></li>
      <li><img src="/images/svg/noti.svg" alt="알림"></li>
      <li><img src="/images/svg/write.svg" alt="글쓰기"></li>
    </ul>
    <div class="top_btn" v-show="visible" @click="goTop">
      <img src="/images/svg/top_btn.svg" alt="위로가기버튼">
    </div>
  </div>
</template>

<script>

export default {
  name: "Header",
  data() {
    return {
      visible: false
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
    }
  }
}
</script>

<style scoped>

</style>