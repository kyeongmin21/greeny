<template>
  <div>
    <b-modal id="modal-personal-agree" title="● 개인정보 수집 및 이용 동의" size="sm"  hide-footer>
      <p>
        <b>1. 개인정보 수집목적 및 이용목적</b>
        가. 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산
        콘텐츠 제공 , 구매 및 요금 결제 , 물품배송 또는 청구지 등 발송 , 금융거래 본인 인증 및 금융 서비스<br>
        나. 회원 관리
        <br><br>

        <b>2. 회원제 서비스 이용에 따른 본인확인 , 개인 식별 , 불량회원의 부정 이용 방지와 비인가 사용 방지 ,
          가입 의사 확인 , 연령확인 , 만14세 미만 아동 개인정보 수집 시 법정 대리인 동의여부 확인, 불만처리 등 민원처리 , 고지사항 전달</b>
        <br>

        <b>3. 수집하는 개인정보 항목 : 이름 , 로그인ID , 비밀번호 , 이메일 , 14세미만 가입자의 경우 법정대리인의 정보</b>
        <br>

        <b>4. 개인정보의 보유기간 및 이용기간</b>
        원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.
        가. 회사 내부 방침에 의한 정보 보유 사유<br>
        o 부정거래 방지 및 쇼핑몰 운영방침에 따른 보관 : OO년<br>
        나. 관련 법령에 의한 정보보유 사유 <br>
        o 계약 또는 청약철회 등에 관한 기록<br><br>

        -보존이유 : 전자상거래등에서의소비자보호에관한법률
      </p>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "ModalPersonalAgree",
}
</script>

<style>


</style>