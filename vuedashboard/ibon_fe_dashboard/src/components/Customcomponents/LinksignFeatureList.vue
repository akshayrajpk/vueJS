<template>
  <div>
    <div class="header-div">
        <hr>
    </div>
    <div class="row">
      <div class="col-6 col-md-3">
        <LinksignFeatureComponent
          v-bind:data="$t('custom-text.label-text')"
          :templateid="1"
        />
      </div>
      <div class="col-6 col-md-3">
        <LinksignFeatureComponent
          v-bind:data="$t('custom-text.label-text')"
          :templateid="2"
        />
      </div>
      <div class="col-6 col-md-3">
        <LinksignFeatureComponent
          v-bind:data="$t('custom-text.label-text')"
          :templateid="3"
        />
      </div>
      <div class="col-6 col-md-3">
        <LinksignFeatureComponent
          v-bind:data="$t('custom-text.label-text')"
          :templateid="3"
        />
      </div>
    </div>
  </div>
</template>
<script>
import LinksignFeatureComponent from "./LinksignFeatureComponent";

export default {
  components: {
    LinksignFeatureComponent,
  },
};
</script>
<style scoped>
hr {
  display: block;
  height: 2px;
  border: 0;
  border-top: 2px solid #ccc;
  margin: 1em 0;
  padding: 0;
  font-size: 22px;
}
hr:after {
    background: #fff;
    content: 'Advantages of signing up for link sign';
    padding: 0 4px;
    position: relative;
    top: -13px;
}
.header-div {
  text-align: center;
}
</style>