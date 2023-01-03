<template>
  <div class="eventPopup">
    <img src="/images/event_banner01.jpg" alt="이벤트 팝업">
  </div>
</template>

<script>
export default {
  name: "eventPopup"
}
</script>

<style scoped>
.home {
  border: 1px solid blue;
}
.eventPopup img{
  width: 300px;
  z-index: 100;
  border: 2px solid red;
  position: relative;
  left: 100px;
  right: 100px;
}
</style>