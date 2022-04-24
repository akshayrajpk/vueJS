<template>
    <div class="row main-layout">
        <div class="col-sm-5">
            <b-button class="buttonClass" variant="dark">
                    {{buttonName}}
            </b-button>
        </div>

        <div class="col-sm-7 d-flex">
            <button class="social-media-button">
                <img class="social-media-icon" src="../images/linklogo.png"/>
            </button>
             <button class="social-media-button">
                <img class="social-media-icon" src="../images/chatlogo.png"/>
            </button>
             <button class="social-media-button">
                <img class="social-media-icon" src="../images/twitterlogo.png"/>
            </button>
             <button class="social-media-button">
                <img class="social-media-icon" src="../images/facebooklogo.svg"/>
            </button>
        </div>
    </div>
</template>
<script>
export default {
    props:['buttonName']
}
</script>
<style scoped>
.buttonClass{
    letter-spacing: -0.06em;
    border-radius: 8px;
    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    align-items: center;
    text-align: center;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 30px;  
    padding: 15px;  
}
.social-media-button{
    border-radius: 50%;
    border: 0px;
    padding: 0;
    width: 50px;
    height: 50px;
    background-color: inherit;
    margin-right: 10px;
    padding: 10px;
}
.social-media-icon{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.main-layout{
    max-width: 100%;
}
</style>