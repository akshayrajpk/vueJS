<template>
    <div class="row m-0">
        <div class="col-sm-5">
            <div class="contract-preview">
                <img class="search-image" src="../images/searchImage.png"/>
                <div class="floater">
                    <signup-floater
                        heading="해당 계약서의 미리보기 전체 이미지는 회원가입 후 확인 가능하십니다."
                        message="무료 회원 가입 후 다양한 기능을 이용해보세요."
                        buttonName="회원가입"
                    />
                </div>
            </div>            
        </div>
        <div class="col-sm-7 right-content">
            <offer-banner data="지금 친구 3명을 초대하면? 템플릿 평생 무료!"/> 
            <div class="header-content">
                <p class="m-0">SW종사자 표준근로계약서(표준계약서, 기간제/단시간)</p>
                <hr/>
                <div class="price-display">
                    <contract-pricing-catalogue 
                    category="고용/취업"
                    volume="3page"
                    amount="10,000원"
                    discount="5,000원 [50%]"/>
                </div>
                <hr/>
                <div class="social-media-componenet">
                    <offer-buttons buttonName="결제하기"/>
                </div>
            </div>           
        </div>
    </div>
</template>
<script>
import OfferBanner from './ContractDetailsOfferBanner.vue'
import SignupFloater from './ContractDetailsSignupFloater'
import ContractPricingCatalogue from './ContractPricingCatalogue'
import OfferButtons from './ContractDetailsOfferButtons'
export default {
    components :{
       "offer-banner" : OfferBanner,
       "signup-floater" : SignupFloater,
       "contract-pricing-catalogue": ContractPricingCatalogue,
       "offer-buttons": OfferButtons,
        OfferButtons
    }
}
</script>
<style scoped>
.contract-preview{
    background-size: cover;
    height: 100%;
    display: flex;
    align-content: center;
    align-items: center;
    position: relative;
    min-height: 570px;
    background-image: linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 50%),
    url("../images/contractpreview.png");

}
.right-content{
    height: 100%;
    min-height: 570px;
}
.floater{
    position: absolute; 
    bottom: 0;
    margin: 20px;
    align-content: center;
}
.search-image{
    max-width: 50%;
    margin-left: 35%;

}
.header-content{
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 30px;
    margin-bottom: 0px;
}
.header-content p{
    font-family: Noto Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 48px;
    color: #000000;
}
hr {
  display: block;
  height: 4px;
  border: 0;
  margin: 1em 0;
  padding: 0;
  font-size: 22px;
  background: #0BDBAF;
}
.price-display{
    margin-top: 15px;
    margin-bottom: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
}
.social-media-componenet{
    margin-top: 35px;
}
</style>