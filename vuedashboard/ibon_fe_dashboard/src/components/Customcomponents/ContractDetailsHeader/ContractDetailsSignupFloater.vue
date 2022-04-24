<template>
    <div class="main-layout">
        <div class="container">
            <p class="header">{{heading}}</p>
            <p class="content-text">{{message}}</p>
            <b-button class="buttonClass" variant="dark">
                {{buttonName}} 
            </b-button>
        </div>
    </div>
</template>
<script>
export default {
     props: ['buttonName','heading','message']
}
</script>
<style scoped>
.main-layout{
    background-repeat: no-repeat;
    background-position: right bottom;
    background-image: url('../images/anouncementWomen.svg');
    /* height: 200px; */
    padding-left: 10px;
    background-size: 100%;
    background-color: #fff;
    border-radius: 8px;
    width: inherit;
}
.header{
    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    align-items: center;
    text-align: center;
    color: #08090C;
    max-width: 80%;
}
.buttonClass{
    border-radius: 4px;
    align-items: center;
    text-align: center;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 0px;
}
.container{
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-top: 15px;
    padding-bottom: 15px;
    z-index: 99;
    border-radius: 8px;
}
.content-text{
    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    letter-spacing: -0.06em;
    color: #787878;
    opacity: 0.8;
    max-width: 80%;
}
</style>