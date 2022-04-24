<template>
  <div class="notifi-banner-container">
    <div class="notifi-banner-first-row">
      <div>
        <img src="./images/alarm_document.svg" />
      </div>
      <div class="notifi-banner-title">Lorem lspsem</div>
    </div>
    <div class="notifi-banner-second-row">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
.notifi-banner-first-row {
  display: flex;
  /* padding: 5px; */
}
.notifi-banner-container {
  padding: 10px;
  height: 86px;
  background: #fafafa;
  border: 1px solid #d4d4d4;
  box-sizing: border-box;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}

.notifi-banner-title {
  /* font-family: Noto Sans; */
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 22px;
  /* identical to box height, or 200% */
  display: flex;
  align-items: center;
  letter-spacing: -0.06em;
  color: #676565;
  padding-left: 5px;
}
.notifi-banner-second-row {
  padding-top: 8px;
  height: 30px;
  /* font-family: Roboto; */
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
}
</style>
