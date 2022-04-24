<template>
    <div class="container">
        <h6 class="text-header">지금 친구 3명을 초대하면?</h6><img class="img1" src="/assets/img/icons/chat1.svg" alt="">
        <h6 class="text">템플릿 평생 무료!</h6><img class="img2" src="/assets/img/icons/chat2.svg" alt="">
    </div>
</template>

<script>
    export default {
        name:"FriendsInvitation"
    }
</script>

<style scoped>
.text {
    font-weight: bold;
}
.text-header{
    z-index: inherit;
}
.container {
    background-color: #FAD7E5;
    width: 21%;
    margin: 60px 103px;
    padding: 13px 25px;
}
.img1{
    position: absolute;
    width: 86.58px;
    height: 32.43px;
    margin: -33px 149px;
    opacity: 0.4;

}
.img2{
    position: absolute;
    width: 56.58px;
    height: 15.82px;
    margin: -22px 182px;
    opacity: 0.4;
}
</style>