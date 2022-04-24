<template>
  <div class="card card-item">
    <div class="row h-100 m-0">
      <div class="col-3 icon-wrapper-col">
        <div class="icon-wrapper" :style="styleBackgroundColr">
          <img
            :src="require(`@/components/OurComponents/images/${imageSource}`)"
          />
        </div>
      </div>
      <div class="col-6">
        <div class="text-wrapper">
          <p class="mb-1" style="font-size: 16px; font-weight: 600">Lorem</p>
          <p class="m-0" style="font-size: 14px; font-weight: normal">100xx.</p>
        </div>
      </div>
      <div class="col-3 right-arrow-icon-wrapper-col">
        <div class="right-arrow-icon-wrapper">
          <i
            class="simple-icon-arrow-right"
            style="font-size: 12px; color: black; font-weight: 800"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["iconType", "label", "value", "iconBgColor"],
  computed: {
    styleBackgroundColr() {
      return "background-color: " + this.iconBgColor;
    },
    imageSource() {
      if (this.iconType === "man") return "man-transparent.svg";
      //   else if (this.imageType === "off-black")
      //     return "letter-delivery.svg";
      else return "off-black.svg";
    },
  },
};
</script>



<style  scoped>
.card-item {
  height: 85px;
  border-radius: 15px;
}
.icon-wrapper {
  background: #c6f3fe;
  padding: 10px;
  border-radius: 15px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-wrapper-col {
  display: flex;
  justify-self: center;
  align-items: center;
}
.text-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  height: 100%;
}
.right-arrow-icon-wrapper-col {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 700;
}
.right-arrow-icon-wrapper {
  /* background: #f5f5f9; */
  border-radius: 50%;
  width: 34px;
  height: 34px;

  background: #f3f3f8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>