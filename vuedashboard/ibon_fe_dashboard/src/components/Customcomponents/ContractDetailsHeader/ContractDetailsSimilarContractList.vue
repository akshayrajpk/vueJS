<template>
    <div class="list-view">
        <p>{{$t('custom-text.label-text')}}</p>
        <div class="row">
            <div class="col-12 col-sm-6 col-md-3">
                <LinksignPopularContractComponent v-bind:data=" $t('custom-text.label-text') " :templateid="2" v-bind:taglabel=" $t('custom-text.tag-text') " v-bind:paragraphdata=" $t('custom-text.paragraph-text')"/>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
                <LinksignPopularContractComponent v-bind:data=" $t('custom-text.label-text') " :templateid="2" v-bind:taglabel=" $t('custom-text.tag-text') " v-bind:paragraphdata=" $t('custom-text.paragraph-text')"/>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
                <LinksignPopularContractComponent v-bind:data=" $t('custom-text.label-text') " :templateid="1" v-bind:taglabel=" $t('custom-text.tag-text') " v-bind:paragraphdata=" $t('custom-text.paragraph-text')"/>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
                <LinksignPopularContractComponent v-bind:data=" $t('custom-text.label-text') " :templateid="2" v-bind:taglabel=" $t('custom-text.tag-text') " v-bind:paragraphdata=" $t('custom-text.paragraph-text')"/>
            </div>
        </div>
    </div>
</template>
<script>
import LinksignPopularContractComponent from './ContractDetailsSimilarContractComponent'
export default {
    components:{
        LinksignPopularContractComponent
    }
}
</script>
<style scoped>
p{
    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 30px;
    margin: 0px;
    padding-left:15px;    
}
.list-view{
    background: rgba(192, 195, 255, 0.5);
    padding: 20px;
}
</style>