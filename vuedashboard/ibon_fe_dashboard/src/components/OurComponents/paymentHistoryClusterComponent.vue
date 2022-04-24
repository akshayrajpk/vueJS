<template>
    <div class="container-fluide"> 
       

<b-card class="card mt-4">
    <h6 id="text1" > 서명권 이용내역 </h6>
     <div  class="row">
       <h6  id="text2" > 일시 </h6>
        <h6  id="text3"> 이용내역 </h6>
         <h6  id="text4"> 이용권 증감 </h6>
          <h6  id="text5"> 잔여 이용권 수 </h6>
       
     </div>    
     <hr >

     
    </b-card>



       
        
    </div>


    
</template>

<script>
export default {
    name:" PaymentHistory"
}
</script>

<style scoped>
h5{
    font-weight: bolder;
}
.card{
    width: 652px;
    height: 246px;
    border: 1px solid rgb(224, 221, 221);
    margin-top: 18px;
   box-shadow:  0px 5px 0px 0px #e0e0e0;
}

#text1{
    font-size: 15px;
    font-weight: bolder;
     background-color:rgba(235, 232, 57, 0.5);
     width: 112px;
}
#text2{
    font-size: 12px;
    margin-left: 20px;
    margin-top: 15px;
}
#text3{
    font-size: 12px;
    margin-left:75px;
    margin-top: 13px;
}
#text4{
    font-size: 12px;
    margin-left:90px;
    margin-top: 13px;
}
#text5{
    font-size: 12px;
    margin-left:150px;
    margin-top: 13px;
}


</style>















