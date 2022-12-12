<template>
  <b-modal hide-footer
           id="modal-search"
           v-model="modalSearchShow">
    <div class="modal_search overlay"  >
      <div class="container">
        <ul>
          <li>
            <input type="text">
            <span class="icon"><img src="/images/svg/search.svg" alt="검색아이콘"></span>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <h3>최근검색어</h3>
        </ul>
        <ul>
          <h3>인기검색어</h3>
        </ul>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "ModalSearch",
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
   return {
     modalSearchShow: this.value
   }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>