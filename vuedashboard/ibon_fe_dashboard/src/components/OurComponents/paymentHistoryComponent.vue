<template>
    <div class="container-fluide"> 
        <div class=" ml-4 mt-4" >
            
       <h5> 결제 및 이용내역</h5> 
       <!-- <div class="ml-5"> </div>
       <h6>전체보기 ></h6> -->
       </div>

<b-card class="card mt-3">
    <h6 id="text">서명권  결제내역</h6>
     <div  class="row">
       <h6  id="text2" >일시</h6>
        <h6  id="text2">결제내역</h6>
         <h6  id="text2">금액</h6>
          <h6  id="text2">구매이용권 수</h6>
       
     </div>    
     <hr class="line">

     
    </b-card>



       
        
    </div>
</template>

<script>
export default {
    name:"Payment"
}
</script>

<style scoped>
h5{
    font-weight: bolder;
}
.card{
    width: 312px;
    height: 246px;
    border: 1px solid rgb(224, 221, 221);

}
#text{
    font-size: 15px;
    font-weight: bolder;
     background-color:rgba(235, 232, 57, 0.5);
     width: 112px;
}
#text2{
    font-size: 12px;
    margin: 12px;
}
.line{
   
   background-color: rgb(34, 34, 34);
}
</style>















