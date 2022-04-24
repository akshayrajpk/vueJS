<template>
    <div class="container">
        <b-card class="card">
            <h6 class="card-header"><span class="card-header-name">권진주</span>님, 반갑습니다.</h6>
            <img src="/assets/img/icons/women2.svg" alt="">
        </b-card>
        <div class="btn-section">
            <b-text class="text-first">쿠폰<span>10장</span></b-text>
            <hr />
            <b-text class="text-second">크레딧<span>10P</span></b-text>
        </div>
    </div>
</template>

<script>
    export default {
        name:"MyUserProfileImageComponent"
    }
</script>

<style scoped>
.card {
   
    width: 275px;
    height: 323px;

    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.card img{
    margin: 40px 43px;
    
    
}
.card-header {
    text-align: center;
    padding: 0px 0px;
}
.card-header-name {
    font-weight: 1000;
    background-color: rgb(253, 253, 154);
}
.btn-section{
    position: absolute;
    width: 275px;
    height: 54px;

    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
}
.btn-section b-text {
    position: absolute;
    width: 61px;
    height: 30px;

    font-family: Noto Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 30px;
   

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.06em;

    color: #000000;
}
hr{
    position: absolute;
    width: 54px;
    height: 0px;
    margin: 24px 103px;
    border: 1px solid #353535;
    transform: rotate(90deg);
}
.text-first{
    margin: 13px 32px;
}
.text-first span {
    color: cyan;
    font-weight: bold;
    padding: 0px 0px;
    margin: 0px 6px;

}
.text-second{
    margin: 13px 169px;
}
.text-second span {
    color: cyan;
    font-weight: bold;
    padding: 0px 0px;
    margin: 0px 2px;

}
</style>