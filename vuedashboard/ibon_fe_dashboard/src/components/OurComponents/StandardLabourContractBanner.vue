<template>
  <div class="icon-row-item">
    <div class="mb-3 tab-list-container" :style="styleBackgroundColr">
      <div class="row">
        <div class="col-12 col-lg-6 pr-0">
          <div class="icon-text-wrapper">
            <div class="list-item-first-icon">
              <img
                :src="
                  require(`@/components/OurComponents/images/${imageSource}`)
                "
                width="38px"
                height="38px"
              />
            </div>
            <div class="list-item-text-container">
              <p class="mb-1" style="font-size: 20px; font-weight: 600">
                Lorem ipsum
              </p>
              <p class="m-0" style="font-size: 16px; font-weight: normal">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="row h-100">
            <div class="col-6">
              <div class="user-container">
                <!-- <b-tooltip v-bind:target="tooltipId"
                      >Disabled tooltip</b-tooltip> -->
                <div class="item-one-wrapper">
                  <div
                    class="user-item-one"
                    v-if="userCount > 0"
                    tabindex="0"
                    title="Lorem one"
                  >
                    <img src="./images/woman.svg" />
                    <!-- <b-tooltip v-bind:target="tooltipId" placement="top">
    Hello <strong>World!</strong>
  </b-tooltip> -->
                  </div>
                </div>
                <div class="item-one-wrapper">
                  <div
                    id="my-image2"
                    class="user-item-one"
                    title="Lorem two"
                    v-if="userCount > 1"
                  >
                    <img src="./images/man.svg" />
                  </div>
                </div>
                <div class="item-one-wrapper">
                  <div
                    class="user-item-one"
                    v-if="userCount > 2"
                    style="background: #f6ce7b"
                    title="View all"
                  >
                    <span style="font-size: 18px; font-weight: 700"
                      >+{{ userCount - 2 }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6 list-action-container-col">
              <div class="list-action-container">
                <div class="list-action-item item-one">
                  <img src="./images/writing.svg" />
                </div>
                <div class="list-action-item item-two">
                  <img src="./images/off.svg" />
                </div>
                <div class="list-action-item item-three">
                  <b-dropdown
                    right="true"
                    size="sm"
                    variant="link"
                    toggle-class="text-decoration-none"
                    no-caret
                  >
                    <template #button-content>
                      <img src="./images/Union.svg" />
                    </template>
                    <b-dropdown-item href="#"
                      >Request for lawyer review</b-dropdown-item
                    >
                    <b-dropdown-item href="#"
                      >Audit trail certification</b-dropdown-item
                    >
                    <!-- <b-dropdown-item href="#"
                      >more</b-dropdown-item
                    > -->
                  </b-dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  props: ["bgColor", "image-type", "userCount"],
  data() {
    return {
      tooltipId:
        "ui-" +
        new Date().getMilliseconds().toString() +
        Math.random().toString(16).substr(2, 8),
      isCollapsed: this.isAcive === "true" ? false : true,
    };
  },
  computed: {
    styleBackgroundColr() {
      return "background-color: " + this.bgColor;
    },
    imageSource() {
      if (this.imageType === "documents-stack") return "documents-array.png";
      else if (this.imageType === "letter-delivery")
        return "letter-delivery.svg";
      else return "document.svg";
    },
  },
};
</script>

<style  scoped>
.list-item-first-icon {
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 10px;
}
.tab-list-container {
  /* display: flex; */
  border-radius: 10px;
  padding: 8px;
  background: rgb(245, 245, 247);
}
.list-item-text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
}
.list-item-action-container {
  position: absolute;
  right: 35px;
  /* width: 100px; */
  height: 60px;
  /* background: red; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
  width: 150px;
  /* display: flex; */
  justify-content: space-around;
  padding-right: 10px;
}
.list-action-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 43px;
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;
}
.item-one {
  background: #74aeec;
}
.item-two {
  background: #86bb81;
}

.item-three {
  background: #000000;
}
.icon-text-wrapper {
  display: flex;
}
.list-action-container {
  width: 150px;
  display: flex;
  justify-content: space-between;
}
.list-action-container-col {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 30px;
}
.user-container {
  height: 100%;
  display: flex;
  align-items: center;
}
.user-item-one {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-one-wrapper {
  padding: 2px;
}
</style>