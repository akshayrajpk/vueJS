<template>
  <div>
    <b-tabs content-class="mt-3" style="font-size: 18px; font-weight: 700">
      <div class="viewall-container">
        <div class="viewall-button">View all ></div>
      </div>

      <b-tab title="First" active>
        <StandardLabourContractBanner
          image-type="documents-stack"
          user-count="4"
        />
        <StandardLabourContractBanner
          bgColor="#fbfee5"
          image-type="document"
          user-count="1"
        />
        <StandardLabourContractBanner
          image-type="letter-delivery"
          user-count="2"
        />
        <StandardLabourContractBanner user-count="10" />
        <StandardLabourContractBanner
          image-type="letter-delivery"
          user-count="1"
        />
      </b-tab>
      <b-tab title="Second"
        ><p>
          <StandardLabourContractBanner bgColor="#fbfee5" user-count="3" />
          <StandardLabourContractBanner
            image-type="letter-delivery"
            user-count="3"
          /></p
      ></b-tab>
      <b-tab title="Third"><p>I'm a Third tab!</p></b-tab>
    </b-tabs>
  </div>
</template>

<script>
import StandardLabourContractBanner from "./StandardLabourContractBanner";

export default {
  components: {
    StandardLabourContractBanner,
  },
};
</script>
<style scoped>
.viewall-container {
  display: flex;
  justify-content: flex-end;
  margin-top: -48px;
  height: 60px;
  font-size: 14px;
  font-weight: 400;
}
.viewall-button {
  cursor: pointer;
  height: 20px;
}
</style>