<template>
  <div class="challenge challenge_list">

    <div class="cate_title">
      <img src="/images/challenge_h1.png" alt="챌린지타이틀">
    </div>

    <section>
      <b-tabs content-class="mt-3">
        <b-tab title="최신순" active>
          <ul>
            <li>
              <router-link to="/challenge/detail">
                <span></span>
                <img src="/images/challenge_01.jpg" alt="챌린지이미지1">
                <h3>챌린지 제목</h3>
                <p>챌린지 내용을 입력하는 자리입니다. 챌린지 내용을 입력하는 자리입니다.</p>
              </router-link>
                <p class="mt05"><b>~2022.11.25</b></p>

              <div class="icon_wrap">
                <img class="heart" src="/images/svg/heart.svg" alt="하트아이콘">
                <img class="bookmark" src="/images/svg/bookmark.svg" alt="북마크아이콘">
              </div>
            </li>
            <li><span></span><img src="/images/challenge_02.jpg" alt="챌린지이미지"></li>
            <li><span></span><img src="/images/challenge_03.jpg" alt="챌린지이미지"></li>
            <li><span></span><img src="/images/challenge_04.jpg" alt="챌린지이미지"></li>

            <li><span></span><img src="/images/challenge_05.jpg" alt="챌린지이미지"></li>
            <li><span></span><img src="/images/challenge_06.jpg" alt="챌린지이미지"></li>
            <li><span></span><img src="/images/challenge_07.jpg" alt="챌린지이미지"></li>
            <li><span></span><img src="/images/challenge_08.jpg" alt="챌린지이미지"></li>

            <li><span></span><img src="/images/challenge_09.jpg" alt="챌린지이미지"></li>
            <li><span></span><img src="/images/challenge_10.jpg" alt="챌린지이미지"></li>
            <li><span></span><img src="/images/challenge_11.jpg" alt="챌린지이미지"></li>
            <li><span></span><img src="/images/challenge_12.jpg" alt="챌린지이미지"></li>
          </ul>
        </b-tab>

        <b-tab title="인기순">
          <p>I'm the second tab</p>
        </b-tab>
      </b-tabs>
    </section>


  </div>
</template>

<script>
export default {
  name: "List"
}
</script>

<style scoped>

</style>