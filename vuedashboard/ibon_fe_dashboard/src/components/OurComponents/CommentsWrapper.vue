<template>
    <div>
         <div class="notification-item-wrapper">
        <ContractCommentBanner isAcive="true" />
      </div>
      <div class="notification-item-wrapper">
        <ContractCommentBanner />
      </div>
      <div class="notification-item-wrapper">
        <ContractCommentBanner />
      </div>
      <div class="notification-bottom-buttons">
        <div class="notification-button-1-wrapper">
          <div class="notification-button">Read All</div>
        </div>

        <div class="notification-button-2-wrapper">
          <div class="notification-button">Clear All</div>
        </div>
      </div>
    </div>
</template>

<script>
import ContractCommentBanner from "./ContractCommentBanner";
export default {
  components: {
    ContractCommentBanner,
  },
};
</script>

<style scoped>


.notification-item-wrapper {
  margin-top: 5px;
}

.notification-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;
  color: #000000;
}
.notification-bottom-buttons {
  width: 100%;
  height: 40px;
  display: flex;
  /* main / white */

  background: #ffffff;
  margin-top: 25px;
}
.notification-button-1-wrapper {
  width: 50%;
  padding: 0px 5px 0px 2px;
}
.notification-button-2-wrapper {
  width: 50%;
  padding: 0px 2px 0px 5px;
}
</style>