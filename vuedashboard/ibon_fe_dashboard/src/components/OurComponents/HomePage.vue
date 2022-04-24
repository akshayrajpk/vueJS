<template>
  <div class="container-fluid" style="background: white">
    <div class="row">
      <div class="col-12 col-lg-9" style="padding: 0px 30px">
        <div>
          <b-row>
            <b-col cols="12" sm="8">
              <CardImageButton
                v-bind:label="$t('Lorem ipsum dolor')"
                :buttonName="$t('Lorem ipsum')"
              />
            </b-col>
            <b-col cols="12" sm="4" class="p-0">
              <CardRightArrow v-bind:data="$t('Lorem ipsum dolor')" />
              <CardRightArrow v-bind:data="$t('Lorem ipsum dolor')" />
            </b-col>
          </b-row>
        </div>
        <div>
          <ContractListExposureComponent />
        </div>
      </div>
      <div class="col-12 col-lg-3 p-0">
        <div class="right-components">
          <SummaryComponent />
          <Notifications />
        </div>
      </div>
    </div>
    <div class="home-comp">
      <div>
        <MyUserProfileImageComponent />
        <FriendsInvitation />
      </div>
      <div>
        <MySignatureCluster />
      </div>
    </div>

    <div class="payment">
      <Payment />
      <Payment2 />
    </div>
    <PaymentHistory />
    <AttorneyEnquiries />
  </div>
</template>


<script>
import IconCard from "../Cards/IconCard";
import StandardLabourContractBanner from "./StandardLabourContractBanner";
import ContractListExposureComponent from "./ContractListExposureComponent";
import SummaryComponent from "./SummaryComponent";
import Notifications from "./Notifications";
import CardRightArrow from "../Header/Customised/CardRightArrow";
import CardImageButton from "../Header/Customised/CardImageButton";

import MyUserProfileImageComponent from "./MyUserProfileImageComponent";
import FriendsInvitation from "./FriendsInvitation";
import MySignatureCluster from "./MySignatureCluster";

import Payment from "./paymentHistoryComponent.vue";
import Payment2 from "./paymentHistoryComponent2.vue";
import PaymentHistory from "./paymentHistoryClusterComponent.vue";
import AttorneyEnquiries from "./AttorneyEnquiriesComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "TabRouter",
  components: {
    IconCard,
    StandardLabourContractBanner,
    ContractListExposureComponent,
    SummaryComponent,
    Notifications,
    CardRightArrow,
    CardImageButton,
    MyUserProfileImageComponent,
    FriendsInvitation,
    MySignatureCluster,
    Payment,
    Payment2,
    PaymentHistory,
    AttorneyEnquiries,
  },
  data() {
    return {
      data: {},
    };
  },
};
</script>


<style scoped>
.right-components {
  min-height: 100vh;
  background: #f5f5f7;
}
.tab-heading-style {
  font-size: 20px;
}

.home-comp {
}
.payment {
  display: flex;
}
</style>