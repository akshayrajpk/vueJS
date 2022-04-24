<template>
    
<div class="container-fluide">
    <hr class="line1 mt-5">
<div class="row">
     <h5>결제 및 이용내역</h5>
      <h6 id="text">전체보기 ></h6>
</div>
<div>
    <h5 class="text2">변호사에게 문의한 내역이 없습니다.</h5>
</div>
<div>
    <b-button squared class="button">변호사 문의 바로가기></b-button>
</div>


<hr class="line2 ">
    
</div>


</template>

<script>
export default {
    name:"AttorneyEnquiries"
}
</script>

<style scoped>
.line1{
    width: 655px;
    height: 5px;
    margin-left: 0px;
    background-color: black;
}
#text{
   font-size:15px ; 
   margin-left:  420px;
   margin-top: 25px;
}

h5{
    font-weight: bolder;
    margin-top: 25px;
}
.text2{
    margin-left: 170px;
}
.button{
    background-color:black;
    margin-left: 225px;
    margin-top:30px;
    border: black;
    border-radius: 10%;
    

    
}
.line2{
    width: 655px;
    height: 5px;
    margin-left: 0px;
    margin-top:100px;
    background-color: rgb(206, 199, 199);
    box-shadow:  5px 10px 8px 0px #e0e0e0;
    
}
</style>