<template>
    <div class="card image-courosal">
        <div v-bind:class="`${classBinder}`" >
            <div class="main-content">
                <div class="file-image">
                    <img :src="require(`./images/${imageSource}`)"/>
                </div>
                <div class="button-content">
                    <button > {{buttonlabel}} </button>
                </div>
            </div>
            <div class="text-aligner">
                <p class="body-text">{{data}}</p>
            </div>
        </div>
        <div class="text-content">
            <p>{{data}}</p>
        </div>
    </div>
</template>
<script>
export default {
 props: ['data','templateid','buttonlabel'],
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
    border-radius: 15px;
}
.text-aligner{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
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
    height: 70%;
    border-radius: inherit;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
}
.image-content-dark{
    background-image: linear-gradient(to right top, #7fa1f2, #74a9f1, #6eb0ed, #6db6e9, #72bbe3);    mix-blend-mode: normal;
    height: 70%;
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
button{
    background: rgba(255, 255, 255, 0.25);
    border-radius: 22px;
    color: white;
    border: 0px;
    font-size: 12px;
}
img{
    width:100%;
    height:100%;
}
.button-content{
    padding-top: 8%;
    padding-left: 10px;
}
.text-content{
    height: 30%;
    text-align: center;
    padding: 10px;
}
.text-content p{
    margin: 0px;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 24px;  
}
.main-content{
    display: flex;
    padding-top: 15px;
    padding-left: 10px;
}
</style>