<template>
    <div class="card image-courosal">
        <div v-bind:class="`${classBinder}`" >
            <div class="main-content">
                <div class="file-image">
                    <img class="icon-image" :src="require(`../images/${imageSource}`)"/>
                </div>
                
                <div class="text-aligner">
                    <p class="body-text">{{data}}</p>
                </div>
            </div>
           
        </div>
        <div class="button-content">
            <button class="round-button"> {{taglabel}} </button>
            <button class="round-button"> {{taglabel}} </button>
        </div>
        <div class="text-content">
            <p>{{paragraphdata}}</p>
        </div>
    </div>
</template>
<script>
export default {
 props: ['data','templateid','taglabel','paragraphdata'],
computed: {
    imageSource() {
        if (this.templateid == "1") return "file.png";
        else if (this.templateid == "2") return "file2.png";
        },
    classBinder() {
        if (this.templateid == "1") return "image-content-light";
        else if (this.templateid == "2") return "image-content-dark";
        }
    },
}
</script>
<style scoped>
.image-courosal{
    width:100%;
    height: 100%;
    margin: 10px;
    border-radius: 4px;
}
.text-aligner{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    margin-left: 15px;
}
.text-aligner p{
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: -0.06em;
    color: #FFFFFF;
}
.body-text{
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.06em;
    color: #FFFFFF;
    margin: 0px;
}
.image-content-light{
    background-image: linear-gradient(to right top, #55b6dc, #5ebdde, #67c4e0, #71cbe2, #7cd2e4);
    mix-blend-mode: normal;
    padding-bottom: 10px;
    border-radius: inherit;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
}
.image-content-dark{
    background-image: linear-gradient(to right top, #7fa1f2, #74a9f1, #6eb0ed, #6db6e9, #72bbe3);    
    mix-blend-mode: normal;
    padding-bottom: 10px;
    border-radius: inherit;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
}
.file-image{
    display: flex;
    align-items: right;
    padding-left: 12px;
    padding-top: 5%;
}
.round-button{
    border-radius: 50px;
    color: #787878;
    border: 0px;
    font-size: 12px;
    background: rgba(230, 230, 231, 0.6);
    padding: 4px 12px 4px 10px;
    margin: 2px;
}
.icon-image{
    min-width:35px;
    min-height:54px;
    max-width:54px;
    max-height: 70px;
    /* width: auto;
    height: auto; */
}
.button-content{
    padding-top: 8%;
    padding-left: 10px;
}
.text-content{
    height: 30%;
    text-align: center;
    padding: 10px;
    padding-left: 17px;
}
.text-content p{
    margin: 0px;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
}
.main-content{
    display: flex;
    padding-top: 15px;
    padding-left: 10px;
}
</style>