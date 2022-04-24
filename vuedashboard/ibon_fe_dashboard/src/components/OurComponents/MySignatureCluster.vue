<template>
<div class="main">
    <hr />
    <div class="header">
    <h2 >서명/도장</h2>
    <h6>전체보기 ></h6>
    </div>
    <div class="components">
        <MySignatureComponent />
        <Seal />
    </div>
    <div class="components">
        <KnownSignature/>
        <CorporateSeal />
    </div>
</div>
</template>

<script>

import MySignatureComponent from './mySignatureComponent'
import Seal from './Seal'
import KnownSignature from './KnownSignature'
import CorporateSeal from './CorporateSeal'
    export default {
        name:"MySignatureCluster",
        components:{
            MySignatureComponent,
            Seal,
            KnownSignature,
            CorporateSeal
        }
    }
</script>

<style scoped>
.components {
    display: flex;
}

.header{
    display: flex;
    border: 2px;
}
.header h2{
    font-weight: bold;
}
.header h6{
    margin: 0px 445px;
}
.main{
    margin: 15px 15px;
}
</style>