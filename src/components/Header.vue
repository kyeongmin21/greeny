<template>
  <div class="header">
    <ul class="navbar_logo">
      <li>
        <router-link to="/"><img src="/images/svg/logo_green.svg" alt="로고"></router-link>
      </li>
    </ul>
    <ul class="hamburger" v-b-toggle.my-sidebar @click.prevent>
      <img src="/images/svg/symbol.svg" alt="모바일햄버거버튼">
    </ul>

    <b-sidebar id="my-sidebar" shadow>
      <div class="px-3 py-2">
        <Menu/>
        <Category/>
      </div>
    </b-sidebar>

    <Category/>
    <Menu/>

    <div class="top_btn" v-show="visible" @click="goTop">
      <img src="/images/svg/top_btn.svg" alt="위로가기버튼">
    </div>

    <ModalSearch v-model="modalSearchShow"/>
  </div>
</template>

<script>
import ModalSearch from "@/components/modal/ModalSearch";
import Category from "@/components/Category";
import Menu from "@/components/Menu";

export default {
  name: "Header",
  components: {
    Menu,
    Category,
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
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    },

  }
}
</script>

<style scoped>

</style>