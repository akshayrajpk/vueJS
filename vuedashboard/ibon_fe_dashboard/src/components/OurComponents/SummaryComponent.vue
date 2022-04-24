<template>
  <div class="today-summary-wrapper">
    <p class="today-summary-head">Today's Summary</p>
    <div class="summery-item">
      <SummeryListComponent icon-bg-color="#c6f3fe" icon-type="off-black" label="testing" value="100qq" />
    </div>
    <div class="summery-item">
      <SummeryListComponent icon-bg-color="#FAE3D0" icon-type="man" label="testing" value="100qq" />
    </div>
  </div>
</template>


<script>
import SummeryListComponent from "./SummeryListComponent";
export default {
  components: {
    SummeryListComponent,
  },
};
</script>



<style  scoped>
.today-summary-wrapper{
  padding: 20px 20px 10px 20px
}
.summery-item {
    padding-bottom:15px;
}
.today-summary-head{
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
}
</style>