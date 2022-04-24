<template>
    <div class="container-fluide"> 
        <div class=" mt-4 " >
            
      <h6 id="text">전체보기 ></h6>
       </div>

<b-card class="card">
    <h6 id="text1">서명권  결제내역</h6>
     <div  class="row">
       <h6  id="text2" > 일시 </h6>
        <h6  id="text2"> 결제내역 </h6>
         <h6  id="text2"> 금액 </h6>
          <h6  id="text2"> 결제수단 </h6>
       
     </div>    
     <hr >

     
    </b-card>



       
        
    </div>
</template>

<script>
export default {
    name:"Payment2"
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
    margin:0px 28px;
    margin-top: 18px;
}
#text{
   font-size:15px ; 
   margin-left:  240px;
}
#text1{
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















