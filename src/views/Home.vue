<template>
  <div class="home">
    <div class="banner_wrap">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide><img src="/images/home/top_banner01.png" alt="메인배너1"></swiper-slide>
        <swiper-slide><img src="/images/home/top_banner02.png" alt="메인배너2"></swiper-slide>
        <swiper-slide><img src="/images/home/top_banner01.png" alt="메인배너1"></swiper-slide>
        <!-- pagination -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>


      <div class="title mt50">
        <h2><img src="/images/svg/home_title01.svg" alt="챌린지 타이틀"></h2>
      </div>

      <section>
        <div class="best_challenge">
          <ul>
            <li class="mb30">
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
          <router-link to="/challenge">
            <div class="more"></div>
          </router-link>
        </div>
      </section>


      <div class="title">
        <h2><img src="/images/svg/home_title02.png" alt="브랜드 타이틀"></h2>
      </div>
      <section>
        <div class="brand">
          <ul class="brand_content01">
            <li>
              <img src="/images/home/home_img03.png" alt="브랜드 이미지1">
            </li>
            <li>
              <h3><span>Pleuvoir</span></h3>
              <p>기분 좋은 하루의 끝과 시작</p>
              <span>
                ‘쏟아지듯 내리는 비'란 뜻의 플르부아는 계절의 끝과 시작을 알리는 비처럼<br>
                자연의 향기를 담아요. 플르부아의 베스트 제품을 12월 한 달간 만나볼 수 있어요.<br>
                플르부아로 기분 좋은 하루의 끝과 시작을 함께하세요.
              </span>
              <router-link to="/brand">
                <div class="more"></div>
              </router-link>
            </li>
          </ul>

          <ul class="brand_content02">
            <li>
              <h3><span>톤28</span></h3>
              <p>아낌없이, 원재료 그대로</p>
              <span>
                제절 원료를 그때그때 따서 소량 신선하게 생산하고 없는 재료는
                가장 좋은 성분을 선정하여 거짓 없이 단단히 사용하고 있습니다.
                평균 플라스틱 용기 대비 90%까지 플라스틱 사용량을 줄였습니다.
              </span>
              <router-link to="/brand">
                <div class="more"></div>
              </router-link>
            </li>
            <li>
              <img src="/images/home/home_img04.png" alt="브랜드 이미지2">
            </li>
          </ul>
        </div>
      </section>




      <div class="title">
        <h2><img src="/images/svg/home_title03.png" alt="브랜드 타이틀"></h2>
      </div>
      <section>
        <div class="daily_look">
          <ul>
            <li>
              <img src="/images/home/home_daily01.png" alt="">
              <p>[여름철필수] 스판 골지 나시</p>
              <p>
                <span><img src="/images/svg/heart.svg" alt="좋아요아이콘"></span>
                <span>USERNAME</span>
              </p>
            </li>
            <li>
              <img src="/images/home/home_daily01.png" alt="">
              <p>[여름철필수] 스판 골지 나시</p>
              <p>
                <span><img src="/images/svg/heart.svg" alt="좋아요아이콘"></span>
                <span>USERNAME</span>
              </p>
            </li>
            <li>
              <img src="/images/home/home_daily01.png" alt="">
              <p>[여름철필수] 스판 골지 나시</p>
              <p>
                <span><img src="/images/svg/heart.svg" alt="좋아요아이콘"></span>
                <span>USERNAME</span>
              </p>
            </li>
            <li>
              <img src="/images/home/home_daily01.png" alt="">
              <p>[여름철필수] 스판 골지 나시</p>
              <p>
                <span><img src="/images/svg/heart.svg" alt="좋아요아이콘"></span>
                <span>USERNAME</span>
              </p>
            </li>
            <li>
              <img src="/images/home/home_daily01.png" alt="">
              <p>[여름철필수] 스판 골지 나시</p>
              <p>
                <span><img src="/images/svg/heart.svg" alt="좋아요아이콘"></span>
                <span>USERNAME</span>
              </p>
            </li>
            <li>
              <img src="/images/home/home_daily01.png" alt="">
              <p>[여름철필수] 스판 골지 나시</p>
              <p>
                <span><img src="/images/svg/heart.svg" alt="좋아요아이콘"></span>
                <span>USERNAME</span>
              </p>
            </li>
            <li>
              <img src="/images/home/home_daily01.png" alt="">
              <p>[여름철필수] 스판 골지 나시</p>
              <p>
                <span><img src="/images/svg/heart.svg" alt="좋아요아이콘"></span>
                <span>USERNAME</span>
              </p>
            </li>
            <li>
              <img src="/images/home/home_daily01.png" alt="">
              <p>[여름철필수] 스판 골지 나시</p>
              <p>
                <span><img src="/images/svg/heart.svg" alt="좋아요아이콘"></span>
                <span>USERNAME</span>
              </p>
            </li>
          </ul>

          <router-link to="/dailyLook">
            <div class="more"></div>
          </router-link>
        </div>
      </section>

      <section>
        <div class="event">
          <ul>
            <li>
              <h3><span>옷장 관리</span>, 그리니가 도와줄게요</h3>
              <p>춥고 건조한 계절, 옷장 구석에 있는 옷들까지 활용할 수 있는 팁을 공유해보세요 !</p>
              <router-link to="/event">
                <div class="more"></div>
              </router-link>
            </li>
          </ul>
        </div>
      </section>
    </div>

  </div>
</template>

<script>
import {Swiper, SwiperSlide} from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
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
