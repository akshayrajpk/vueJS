<template>
  <div>
    <div class="notification-banner-container">
      <NotificationBanner />
    </div>
    <div class="notification-banner-container">
      <NotificationBanner />
    </div>
    <div class="notification-banner-container">
      <NotificationBanner />
    </div>
        <div class="notification-banner-container">
      <NotificationBanner />
    </div>
  </div>
</template>
<script>
import NotificationBanner from "./NotificationBanner";
export default {
  components: {
    NotificationBanner,
  },
};
</script>

<style scoped>
.notification-banner-container {
    padding:8px;
}
</style>