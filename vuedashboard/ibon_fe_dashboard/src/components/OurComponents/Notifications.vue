<template>
  <div style="padding: 0px 20px">
    <p class="today-summary-head">Notifications</p>
    <div class="notification-wrapper">
      <RightTabComponent />
      <div class="divider"></div>
      <div class="">
        <div v-if="this.$store.state.isNotification">
          <CommentsWrapper />
        </div>
        <div v-if="!this.$store.state.isNotification">
          <NotificationItemWrapper />
        </div>
      </div>
    </div>
    <div style="height: 30px"></div>
  </div>
</template>


<script>
import CommentsWrapper from "./CommentsWrapper";
import RightTabComponent from "./RightTabComponent";
import NotificationItemWrapper from "./NotificationItemWrapper";
export default {
  components: {
    CommentsWrapper,
    RightTabComponent,
    NotificationItemWrapper,
  },
};
</script>



<style  scoped>
.summery-item {
  padding-bottom: 15px;
}
.today-summary-head {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
}
.notification-toggle {
  height: 44px;
  border: 1px solid black;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25),
    inset 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  display: flex;
}
.notification-item-wrapper {
  margin-top: 5px;
}
.divider {
  /* border-top: 1px solid AEAEAE; */
  height: 2px;
  margin-top: 15px;
  margin-bottom: 15px;
  background: #aeaeae;
  opacity: 0.3;
  border-radius: 10px;
  transform: rotate(-180deg);
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
.notification-wrapper {
  padding: 15px;
  background: white;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}
</style>