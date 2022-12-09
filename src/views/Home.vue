<template>
  <div class="home">

    <div class="banner_wrap">
      <swiper class="swiper" :options="swiperOption" >
        <swiper-slide><img src="/images/home/top_banner01.png" alt="메인배너1"></swiper-slide>
        <swiper-slide><img src="/images/home/top_banner02.png" alt="메인배너2"></swiper-slide>
        <swiper-slide><img src="/images/home/top_banner01.png" alt="메인배너1"></swiper-slide>
        <!-- pagination -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>


    <section>
      <div class="best_challenge">
        <h2><img src="/images/home/title01.png" alt="챌린지 타이틀"></h2>
        <ul>
          <li>
            <img src="/images/home/home_img01.png" alt="챌린지 이미지1">
            <p><b>[한달나기] 블랙 코트 하나로 일주일 코디하기</b></p>
            <span>자꾸자꾸 손이 가는 겨울 데일리 아이템! 블랙 코트로 스타일링 꿀!팁!</span>
          </li>
          <li>
            <img src="/images/home/home_img02.png" alt="챌린지 이미지2">
            <p><b>[일주일챌린지] 최애 카페에서 텀블러 이용해서 할인받고 선물도 받기</b></p>
            <span>최애 카페에서 제공하는 텀블러 이벤트에 참여해서 할인도 받고 선물도...</span>
          </li>
        </ul>
      </div>

        <router-link to="/challenge">
          <div class="more"></div>
        </router-link>
    </section>
    </div>

  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: 'Home',
  components:	{
    Swiper,
    SwiperSlide
  },
  data() {
    return{
      swiperOption: {
        loop: true,
        spaceBetween: 0,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
      }
    }
  },

}
</script>

<style>

</style>
