<template>
<div class="card-right-arrow">
        <div class="card bottomMargin">
            <b-row class="row-contents">
                <b-col cols="10">
                    <p>{{data}}</p>
                </b-col>
                <b-col cols="2">
                    <i class="simple-icon-arrow-right"></i>
                </b-col>
            </b-row>
        </div>
  </div>
</template>

<script>
export default {
 props: ['data']
}
</script>

<style scoped>
.card-right-arrow{
    height: 42%;
    /* align-items: center;
    display: flex;
    padding: 5px; */
}
.row-contents{
    display: flex;
    align-items: center;
}
.card-right-arrow p{
    font-size: 20px;
    margin: 0px;
}
.bottomMargin{
    margin-top: 5px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50px;
}

@media (max-width: 950px) {
    .card-right-arrow p{
        font-size: 20px;
        margin: 0px;
    }
}
</style>