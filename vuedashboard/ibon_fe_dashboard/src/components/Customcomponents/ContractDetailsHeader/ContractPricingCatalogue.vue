<template>
    <div>
        <div class="row">
            <div class="col-6">
                카테고리
            </div>
             <div class="col-6">
                {{category}}
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                분량
            </div>
             <div class="col-6">
                {{volume}}
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                결제금액
            </div>
             <div class="col-6">
                {{amount}}
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                할인 결제금액
            </div>
             <div class="col-6">
                <span class="discount-span">{{discount}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['category','volume','amount','discount'],
}
</script>
<style scoped>
.discount-span{
   color: rgba(237, 55, 16);
}
.row{
    font-family: Noto Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;
}
</style>