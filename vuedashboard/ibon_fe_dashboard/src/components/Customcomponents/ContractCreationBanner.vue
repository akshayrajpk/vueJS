<template>
<div class="card card-right-arrow">
        <!-- <div class="card bottomMargin"> -->
            <div class="row">
                <div class="col-9 left-col">
                    <div class="row-contents">
                            <p>{{data}}</p>
                            <i class="simple-icon-arrow-right arrow"></i>
                    </div>
                    <div class="row-contents data-label">
                        <p> Sample text to be changed to dynamic text later, Images rendered based in id's</p>
                    </div>
                </div>
                <div class="col-3 p-0">
                    <img class="image-class" :src="require(`./images/${imageSource}`)"/>
                </div>
            </div>
            
        <!-- </div> -->
</div>
</template>

<script>
export default {
 props: ['data','templateid'],
computed: {
    imageSource() {
        if (this.templateid == "1") return "hand.png";
        else return "files.png";
        }
    },
}
</script>

<style scoped>
.arrow{
    align-items: right;
}
.data-label{
    max-width: 90%;
    padding-top: 10px;
}
.card-right-arrow{
    height: 100%;
    /* align-items: center;
    display: flex;
    padding: 5px; */
    width: 100%;
    padding: 5px;
}
.row-contents{
    display: flex;
    align-items: center;
    max-width: 85%;
    padding-top: 10px;
    padding-bottom: 10px;
}
.row-contents i{
    padding-left: 10px;
}
.card-right-arrow p{
    font-size: 20px;
    margin: 0px;
}
.left-col{
    margin-top: 5px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50px;
    flex-direction: column;
    padding-right: 0px;
}
.image-class{
    max-width: 98%;
    padding-top: 10px;
}

@media (max-width: 300px) {
    .card-right-arrow p{
        font-size: 20px;
        margin: 0px;
    }
}
</style>