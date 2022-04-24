<template>
    <div>
        <banner v-bind:label=" $t('custom-text.label-text') " :buttonName=" $t('custom-text.label-text') "/>
        <div class="row">
            <div class="col-6 ">
                <contractCreation v-bind:data=" $t('custom-text.label-text') " :templateid="1"/> 
            </div>
            <div class="col-6 ">
                <contractCreation v-bind:data=" $t('custom-text.label-text') " :templateid="2"/> 
            </div>
        </div>
    </div>
</template>
<script>
import ContractFileUploadBanner from './ContractFileUploadBanner'
import ContractCreationBanner from './ContractCreationBanner'
export default {
    components: {
        banner: ContractFileUploadBanner,
        contractCreation: ContractCreationBanner
    }
}
</script>