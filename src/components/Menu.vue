<template>
  <div class="Menu">
    <ul class="navbar_menu">
      <li @click="modalSearch" v-b-modal.modal-search><img src="/images/svg/search.svg" alt="검색"></li>
      <li>
        <router-link to="/login"><img src="/images/svg/my.svg" alt="마이페이지"></router-link>
      </li>
      <li><img src="/images/svg/noti.svg" alt="알림"></li>
      <li><img src="/images/svg/write.svg" alt="글쓰기"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      modalSearchShow: false,
    }
  },
  methods: {
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