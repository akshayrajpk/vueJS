<template>
  <div>
    <div
      class="collapse-head"
      v-b-toggle="collapseId"
      v-on:click="myFilter"
      v-bind:class="{ collapseHeadWhite: isCollapsed }"
    >
      <div class="collapse-head-content-wrapper">
        <div
          class="collapse-head-label-first"
          v-bind:class="{ collapseHeadLabelFirstBlack: isCollapsed }"
        >
          Lorem
        </div>
        <div
          class="collapse-head-label-second"
          v-bind:class="{ collapseHeadLabelSecondBlack: isCollapsed }"
        >
          <div class="last-update-text">Last update</div>
          <div class="date-text">05-02-21</div>
          <div class="arrow-icon-wrapper">
            <i
              v-bind:class="[
                isCollapsed
                  ? 'simple-icon-arrow-down '
                  : 'simple-icon-arrow-up',
              ]"
              :style="styleBackgroundColr"
            />
          </div>
        </div>
      </div>
    </div>

    <b-collapse
      :visible="this.isAcive === 'true'"
      v-bind:id="collapseId"
      class="NotificationSubItem-container"
    >
      <PledgeBanner />
      <PledgeBanner />
    </b-collapse>
  </div>
</template>


<script>
import PledgeBanner from "./PledgeBanner";
export default {
  props: ["isAcive"],

  components: {
    PledgeBanner,
  },
  data() {
    return {
      collapseId:
        "ui-" +
        new Date().getMilliseconds().toString() +
        Math.random().toString(16).substr(2, 8),
      isCollapsed: this.isAcive === "true" ? false : true,
    };
  },
  beforeMount() {},
  methods: {
    myFilter: function () {
      this.isCollapsed = !this.isCollapsed;
      // some code to filter users
    },
  },
  computed: {
    styleBackgroundColr() {
      if (this.isCollapsed)
        return "font-size: 12px; color: black; font-weight: 80";
      else return "font-size: 12px; color: white; font-weight: 80";
    },
  },
};
</script>

<style  scoped>
.collapse-head {
  height: 50px;
  background: #08090c;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 6px 6px 0px 0px;
}

.collapseHeadWhite {
  height: 54px;
  background: white;
  border: 1px solid #e6e6e7;
  box-sizing: border-box;
  border-radius: 6px;
}

.collapse-head-content-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
}
.colorBlack {
  color: black;
}
.collapse-head-label-first {
  width: 40%;
  font-size: 14px;
  color: white;
  padding-left: 10px;
}

.collapseHeadLabelFirstBlack {
  width: 40%;
  font-size: 14px;
  color: black;
  padding-left: 10px;
}

.collapseHeadLabelSecondBlack {
  width: 60%;
  font-size: 10px;
  color: black !important;
  display: flex;
  justify-content: flex-end;
}

.collapse-head-label-second {
  width: 60%;
  font-size: 10px;
  color: white;
  display: flex;
  justify-content: flex-end;
}
.last-update-text {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 7px;
}
.date-text {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 7px;
}
.arrow-icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 15px 0px 5px;
}
.NotificationSubItem-container {
  border: 1px solid #e6e6e7;
  box-sizing: border-box;
  border-radius: 0px 0px 6px 6px;
  /* padding: 8px; */
}
</style>
