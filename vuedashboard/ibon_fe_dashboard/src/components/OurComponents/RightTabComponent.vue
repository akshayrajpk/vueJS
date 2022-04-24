<template>
  <div class="notification-toggle">
    <div
      v-if="this.$store.state.isNotification"
      style="width: 100%; display: flex"
    >
      <div class="toggle-switch-notification" @click="toggleToNotification">
        Notifications
      </div>
      <div class="toggle-switch-comments" @click="toggleToComments">
        Comments
      </div>
    </div>

    <div
      v-if="!this.$store.state.isNotification"
      style="width: 100%; display: flex"
    >
      <div class="toggle-switch-notification2" @click="toggleToNotification">
        Notifications
      </div>
      <div class="toggle-switch-comments2" @click="toggleToComments">
        Comments
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { isNotificatione: true };
  },
  beforeMount() {
    console.log(`At this point, vm.$el has not been created yet.`);
  },
  computed: {
    texts() {
      return this.$store.state.isNotification;
    },
  },
  methods: {
    toggleToNotification() {
      this.$store.state.isNotification = false;
    },
    toggleToComments() {
      this.$store.state.isNotification = true;
    },
  },
};
</script>

<style scoped>
.toggle-switch-notification2 {
  width: 50%;
  height: 100%;
  background: black;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 700;
  color: white;
}
.toggle-switch-comments2 {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 700;
}
.toggle-switch-comments {
  width: 50%;
  height: 100%;
  background: black;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 700;
  color: white;
}
.toggle-switch-notification {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 700;
}
.notification-wrapper {
  padding: 15px;
  background: white;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}
</style>