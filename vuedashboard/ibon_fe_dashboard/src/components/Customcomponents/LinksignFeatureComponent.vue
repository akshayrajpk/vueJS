<template>
    <div class="card image-courosal">
        <div class="image-content">
            <img :src="require(`@/images/${imageSource}`)"/>
        </div>
        <div class="text-content">
            <p>{{data}}</p>
        </div>
    </div>
</template>
<script>
export default {
 props: ['data','templateid'],
computed: {
    imageSource() {
        if (this.templateid == "1") return "courousal3.png";
        else if (this.templateid == "2") return "courousal2.png";
        else return "courousal1.png";
        }
    },
}
</script>
<style scoped>
.image-courosal{
    width:100%;
    height: 100%;
    margin: 10px;
}
.image-content{
    height: 75%;
    border-radius: inherit;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
}
img{
    max-width: 100%;
    max-height: 100%;
    width:100%;
    height:100%;
    border-radius: inherit;
}
.text-content{
    height: 25%;
    text-align: center;
    padding: 10px;
}
.text-content p{
    padding: 0px;
    font-size: 15px;
}
</style>