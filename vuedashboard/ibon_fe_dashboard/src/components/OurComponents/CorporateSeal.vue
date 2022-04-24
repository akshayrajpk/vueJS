<template>
    <div class="main">
        <h1 class="header">comake</h1>
         

        <h6><span>도장:</span>코메이크 법인 인감<b-icon icon="trash"></b-icon></h6>
    </div>
</template>
 
<script>
    export default {
        name:"CorporateSeal"
    }
</script>

<style scoped>
.main{
    border: 1px solid rgb(211, 210, 210);
    width: 18%;
    border-radius: 5px;
    
}
.header{
    text-align: center;
    margin: 0px 0px;
    padding: 88px 65px;
    font-weight: bold;
    font-family: -webkit-pictograph;
}
h6{
    margin: 0px 38px;
    font-size: 13px;

}
span{
    font-weight: bold;
}
</style>