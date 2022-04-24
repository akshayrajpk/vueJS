<template>
    <div class="row banner-header">
        <div class="col-6 paragraph-div">
            <p>{{data}}</p>
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
</template>
<script>
export default {
    props: ['data'],
}
</script>
<style scoped>
p {
    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    margin-bottom: 0px;
    color: #FFFFFF;
}
.paragraph-div{
    padding-left: 35px;
    padding-top: 5px;
    padding-bottom: 5px;
    display: flex;
    align-items: center;
    z-index: 95;
}
.banner-header{
    background-color: rgba(105, 141, 255, 1);
    height: 100px;
    margin-bottom: 10px;
}
.images{
    /* display: flex; */
    height: 100%;
}
.first-img{
    padding-top: 5%;
}
.second-img{
    padding-left: 20%;
    padding-top: 3px;
}
</style>