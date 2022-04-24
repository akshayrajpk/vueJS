<template>
    <div class="main">
        <h1 class="header">test</h1>
         

        <h6><span>서명:</span> 권진주 서명<b-icon icon="trash"></b-icon></h6>
    </div>
    
</template>

<script>
    export default {
        name:"MySignatureComponent"
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
    padding: 88px 89px;
    font-family: cursive;
}
h6{
    margin: 7px 44px;
    padding: 3px 0px;
    font-size: 13px;

}
span{
    font-weight: bold;
}
</style>