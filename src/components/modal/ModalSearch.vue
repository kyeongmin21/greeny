<template>
  <b-modal hide-footer
           id="modal-search"
           v-model="modalSearchShow">

    <div class="modal_search overlay">
      <div class="search_cont">
        <ul>
          <li><input type="text" placeholder="슬로우 패션 알아보기?!"></li>
          <li><img src="/images/svg/search.svg" alt="검색아이콘"></li>
        </ul>
      </div>

        <div class="search_word">
          <ul>
            <h3>최근 검색어</h3>
            <li>슬로우패션 <img src="/images/svg/close.svg" alt="삭제"></li>
            <li>챌린지 <img src="/images/svg/close.svg" alt="삭제"></li>
            <li>일주일 챌린지 <img src="/images/svg/close.svg" alt="삭제"></li>
            <li>출근룩 <img src="/images/svg/close.svg" alt="삭제"></li>
          </ul>
          <ul>
            <h3>인기 검색어</h3>
            <li><span>01</span> 슬로우 패션</li>
            <li><span>02</span> 챌린지</li>
            <li><span>03</span> 일주일 챌린지</li>
            <li><span>04</span> 출근룩</li>
            <li><span>05</span> 겨울찐템</li>
            <li>06 매거진</li>
            <li>07 이벤트 </li>
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
  methods: {}
}
</script>

<style scoped>

</style>