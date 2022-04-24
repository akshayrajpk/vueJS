<template>
    <div>
        <div class="header">
            <p><span>{{header}}</span></p>
        </div>
        <div class="description">
            <p>{{description}}</p>
        </div>
        <div class="sub-container">
            <div class="left-component">
                <img class="image" src="../images/filesearch.png"/>
            </div>
            <div class="hr-div d-flex">
                <hr/>
            </div>
            <div class="right-component">
                <p>{{message}}</p>
                <div>
                    <button class="button-class">{{button1}} <i class="simple-icon-arrow-right"></i></button>
                    <button class="button-class">{{button2}} <i class="simple-icon-arrow-right"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['header','description','message','button1','button2']
}
</script>
<style scoped>
.header p{
    font-family: Noto Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 30px;
    letter-spacing: -0.06em;
    color: #000000;
}
.header p span{
    background-color: #EEFC9A;
}
.description{
    padding:15px 15px 15px 0px;
}
.description p{
    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
    margin: 0px;
}
.left-component{
    background-color: #71BAE4;
    display:flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    height:100%;
    height: inherit;
}
.right-component{
    border: 3px solid #AEAEAE;
    box-sizing: border-box;
    border-radius: 10px;
    width:70%;
    padding:20px;
}
hr{
    width: 100%;
    border: 3px solid;
    color: #AEAEAE;
}
.hr-div{
    width:10%;
    align-items: center;
}
.image{
    padding: 10px;
}
.sub-container{
    display: flex;
}
.right-component p{
    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 28px;
}
.button-class{
    background: #0BDBAF;
    border-radius: 6px;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 32px;
    border: 0px;
    color: #FFFFFF;
    text-align: center;
    padding: 15px;
    margin-left:10px ;
    margin-top:10px ;
}
</style>