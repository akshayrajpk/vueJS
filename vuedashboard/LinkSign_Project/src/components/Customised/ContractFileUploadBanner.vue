<template>
        <div class="card card-main mb-4 pt-0 pb-0" >
            <b-row class="row-class">
                <b-col cols="2" class="left-column">
                     <div class="certificate-image">
                        <img src="../../assets/customassets/images/certificate.png"/>
                    </div>
                    <div class="chat-image">
                        <img src="../../assets/customassets/images/chat.png"/>
                    </div>
                </b-col>
                <b-col class="centerFlex" cols="8">
                        <h3>{{label}}</h3>
                        <p>{{label}}</p>
                        <b-button class="buttonClass" variant="dark">{{buttonName}}
                            <i class="iconsminds-upload"></i>
                        </b-button>
                </b-col>
                <b-col cols="2">
                </b-col>
            </b-row>
        </div>
</template>

<script>
export default {
 props: ['buttonName','label']
}
</script>

<style scoped>
.row-class{
    height: 100%;
    padding: 0;
}
.centerFlex {
    display: flex;
    align-items:center;
    flex-direction: column;
    justify-content: center;
    background-image: url('../../assets/customassets/images/chatType2.png');
    background-repeat: no-repeat;
    background-position: 30% 35%;
}
.left-column{
    position: relative;
}
.chat-image{
    position: absolute;
    z-index: 20;
    bottom: 0;
    right: 0;
}
.card-main {
    background-repeat: no-repeat;
    background-position: right bottom;
    background-image: url('../../assets/customassets/images/cardImageBG.png');
    height: 200px;
    padding-left: 10px;
}
.card-right-arrow p{
    font-size: 30px;
}

.buttonClass{
    border-radius: 4px;
    text-align: center;
    z-index: 99;
}


@media (max-width: 510px) {
    .card-right-arrow p{
        font-size: 25px;
    }
}
</style>