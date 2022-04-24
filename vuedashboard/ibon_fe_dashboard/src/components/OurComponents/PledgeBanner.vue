<template>
  <div class="notification-subitem-wrapper">
    <div class="d-flex">
      <img :src="require(`@/components/OurComponents/images/${imageSource}`)" />
    </div>
    <div style="padding-left: 15px">
      <p class="m-0">
        Lorem
        <span style="font-size: 10px; color: #aeaeae">{{ "   " }} 6hour</span>
      </p>
      <p class="m-0">Lorem ipsum dolor sit amet</p>
    </div>
    <div></div>
  </div>
</template>
<script>
export default {
  // props:['id'],
  computed: {
    imageSource() {
      if (this.iconType === "man") return "man-transparent.svg";
      //   else if (this.imageType === "off-black")
      //     return "letter-delivery.svg";
      else return "man-transparent.svg";
    },
  },
};
</script>

<style  scoped>
.notification-subitem-wrapper {
  display: flex;
  padding: 10px;
  padding-left: 15px;
  padding-top: 15px;
}
</style>
