<template>
    <div class="row main-div">
        <div class="col-6">
            <div class="row banner-header">
                <div class="col-6 paragraph-div">
                    <p>{{firstmessage}}</p>
                </div>
                <div class="col-6">
                    <div class="images">
                        <div class="first-img">
                            <img src="../images/chat.png">
                        </div>
                        <div class="second-img">
                            <img src="../images/chat.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div class="col-6 d-flex">
             <div class="row banner-header">
                <div class="col-9 paragraph-div">
                    <p>{{secondmessage}}</p>
                </div>
                <div class="col-3 image-div">
                    <img src="../images/anouncement.png">
                </div>
             </div>
        </div>

    </div>
</template>
<script>
export default {
    props: ['firstmessage','secondmessage'],
}
</script>
<style scoped>
.main-div{
    background: linear-gradient(112deg, #fad7e5 50%, #7bb6d8 50%);
}
.images{
    height: inherit;
}
.second-img{
    padding-left: 20%;
    padding-top: 3px;
}
.banner-header{
    height: 100px;
    margin-bottom: 10px;
    padding: 10px;
}
.paragraph-div p{
    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: -0.06em;
    color: #000000;
    margin-bottom: 0px;
}
.image-div{
    display: flex;
    align-items: center;
}
</style>