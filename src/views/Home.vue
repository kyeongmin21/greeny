<template>
  <div class="home">
    <div class="banner_wrap">
      <swiper class="swiper" :options="swiperOption" v-if="width > 480" >
        <swiper-slide><img src="/images/top_banner01.png" alt="메인배너1"></swiper-slide>
        <swiper-slide><img src="/images/top_banner02.png" alt="메인배너2"></swiper-slide>
        <swiper-slide><img src="/images/top_banner01.png" alt="메인배너1"></swiper-slide>
        <!-- pagination -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <swiper class="swiper" :options="swiperOption" v-else >
        <swiper-slide><img src="/images/m_top_banner01.jpg" alt="메인배너1"></swiper-slide>
        <swiper-slide><img src="/images/m_top_banner02.jpg" alt="메인배너2"></swiper-slide>
        <swiper-slide><img src="/images/m_top_banner01.jpg" alt="메인배너1"></swiper-slide>
        <!-- pagination -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

      <div class="title mt50">
        <h2>
          <img src="/images/svg/home_title01.svg" alt="챌린지 타이틀">
        </h2>
      </div>
      <section>
        <div class="best_challenge">
          <ul>
            <li class="mb30">
              <div class="img_wrap">
                <img src="/images/home_img01.png" alt="챌린지 이미지1">
                <img src="/images/svg/best.svg" alt="베스트아이콘" class="best_icon">
              </div>
              <h3>[한달나기] 블랙 코트 하나로 일주일 코디하기</h3>
              <div class="icon_wrap">
                <img :src="heartImg"
                     class="heart_icon"
                     @click="changeHeartImg"
                     alt="좋아요아이콘">
                <img :src="bookmarkImg"
                     @click="changeBookmarkImg"
                     class="bookmark_icon"
                     alt="책갈피아이콘">
              </div>
            </li>
            <li>
              <div class="img_wrap">
                <img src="/images/home_img02.png" alt="챌린지 이미지2">
                <img src="/images/svg/best.svg" alt="베스트아이콘" class="best_icon">
              </div>
              <h3>[일주일챌린지] 최애 카페에서 텀블러 이용해서 할인받고 선물도 받기</h3>
              <div class="icon_wrap">
                <img :src="heartImg"
                     class="heart_icon"
                     @click="changeHeartImg"
                     alt="좋아요아이콘">
                <img :src="bookmarkImg"
                     @click="changeBookmarkImg"
                     class="bookmark_icon"
                     alt="책갈피아이콘">
              </div>
            </li>
          </ul>
          <router-link to="/challenge">
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

      <div class="title">
        <h2><img src="/images/svg/home_title03.png" alt="브랜드 타이틀"></h2>
      </div>
      <section>
        <div class="daily_look">
          <ul>
            <li>
              <img src="/images/home_daily01.png" alt="">
              <p>[여름철필수] 스판 골지 나시1</p>
              <p>
                <span><img :src="heartImg" alt="좋아요아이콘"></span>
                <span>USERNAME</span>
              </p>
            </li>
            <li>
              <img src="/images/home_daily01.png" alt="">
              <p>[여름철필수] 스판 골지 나시2</p>
              <p>
                <span><img :src="heartImg" alt="좋아요아이콘"></span>
                <span>USERNAME</span>
              </p>
            </li>
            <li>
              <img src="/images/home_daily01.png" alt="">
              <p>[여름철필수] 스판 골지 나시</p>
              <p>
                <span><img :src="heartImg" alt="좋아요아이콘"></span>
                <span>USERNAME</span>
              </p>
            </li>
            <li>
              <img src="/images/home_daily01.png" alt="">
              <p>[여름철필수] 스판 골지 나시</p>
              <p>
                <span><img :src="heartImg" alt="좋아요아이콘"></span>
                <span>USERNAME</span>
              </p>
            </li>
            <li>
              <img src="/images/home_daily01.png" alt="">
              <p>[여름철필수] 스판 골지 나시</p>
              <p>
                <span><img :src="heartImg" alt="좋아요아이콘"></span>
                <span>USERNAME</span>
              </p>
            </li>
            <li>
              <img src="/images/home_daily01.png" alt="">
              <p>[여름철필수] 스판 골지 나시</p>
              <p>
                <span><img :src="heartImg" alt="좋아요아이콘"></span>
                <span>USERNAME</span>
              </p>
            </li>
            <li>
              <img src="/images/home_daily01.png" alt="">
              <p>[여름철필수] 스판 골지 나시</p>
              <p>
                <span><img :src="heartImg" alt="좋아요아이콘"></span>
                <span>USERNAME</span>
              </p>
            </li>
            <li>
              <img src="/images/home_daily01.png" alt="">
              <p>[여름철필수] 스판 골지 나시</p>
              <p>
                <span><img :src="heartImg" alt="좋아요아이콘"></span>
                <span>USERNAME</span>
              </p>
            </li>
          </ul>
          <router-link to="/dailyLook">
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
              <img src="/images/home_img03-1.png" alt="브랜드 이미지1">
            </li>
            <li>
              <div>
                <h3><span>Pleuvoir</span></h3>
                <p>기분 좋은 하루의 끝과 시작</p>
                <span>
                ‘쏟아지듯 내리는 비'란 뜻의 플르부아는 계절의 끝과 시작을 알리는 비처럼
                자연의 향기를 담아요. 플르부아의 베스트 제품을 12월 한 달간 만나볼 수 있어요.
              </span>
                <router-link to="/brand">
                  <div class="more"></div>
                </router-link>
              </div>
            </li>
          </ul>

          <ul class="brand_content02">
            <li>
              <div>
                <h3><span>톤28</span></h3>
                <p>아낌없이, 원재료 그대로</p>
                <span>
                제절 원료를 그때그때 따서 소량 신선하게 생산하고 없는 재료는
                가장 좋은 성분을 선정하여 거짓 없이 단단히 사용하고 있습니다.
              </span>
                <router-link to="/brand">
                  <div class="more"></div>
                </router-link>
              </div>
            </li>
            <li>
              <img src="/images/home_img04-1.png" alt="브랜드 이미지2">
            </li>
          </ul>
        </div>
      </section>


        <div class="popup"
             v-if="this.show"
             ref="popupImg"
             @drag="onDrag($event)"
             @dragend="onDragEnd($event)">
          <img src="/images/event_banner01.jpg"
               alt="이벤트 팝업">
          <div class="popup_btn_wrap">
            <button @click="todayClose">오늘 그만보기</button>
            <button @click="close">닫기</button>
          </div>
        </div><!-- popup -->

    </div><!-- banner_wrap -->
  </div><!-- home -->
</template>

<script>
import "swiper/css/swiper.css";
import {Swiper, SwiperSlide} from "vue-awesome-swiper";

export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      width: 0,
      show: false,
      heartIcon: 'heart',
      bookmarkIcon: 'bookmark',
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
      },
    }
  },
  mounted() {
    const getToday = new Date();
    const getDate = getToday.getDate();
    const getLocalDate = localStorage.getItem('today')
    if (Number(getDate) === Number(getLocalDate)) this.show = false;
    else this.show = true;
    this.width = window.innerWidth;
    window.addEventListener('resize', () => {
      this.width = window.innerWidth;
      console.log(this.width)
    }, true);
  },
  computed: {
    heartImg() {
      return require(`@/assets/images/${this.heartIcon}.svg`)
    },
    bookmarkImg() {
      return require(`@/assets/images/${this.bookmarkIcon}.svg`)
    }
  },
  methods: {
    changeHeartImg() {
      if (this.heartIcon === 'heart') this.heartIcon = 'heart_green_fill'
      else this.heartIcon = 'heart'
    },
    changeBookmarkImg() {
      if (this.bookmarkIcon === 'bookmark') this.bookmarkIcon = 'bookmark_green_fill'
      else this.bookmarkIcon = 'bookmark'
    },
    todayClose() {
      const today = new Date()
      const saveDay = today.getDate();
      localStorage.setItem('today', JSON.stringify(saveDay)); // 로컬스토리지에 현재 날짜 넣기
      this.show = false;
    },
    close() {
      this.show = false;
    },
    onDrag(event) {
      const popup = document.querySelector('.popup')
      popup.style.left = event.pageX - popup.offsetWidth / 2 + 'px';
      popup.style.top = event.pageY - popup.offsetHeight / 2 + 'px';
    },
    onDragEnd(event) {
      document.removeEventListener('mousemove', this.onDrag(event));
    }
  },

}
</script>


<style>


</style>
