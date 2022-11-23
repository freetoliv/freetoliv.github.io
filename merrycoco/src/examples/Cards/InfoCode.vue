<template>
<div class=" container card rounded   shadow-lg bg-white mt-2 pt-2 mb-5 mx-auto cardwid4 d-flex flex-row justify-content-around">
        
        <div>
            <img class="imgsize1" src='../../assets/code1.jpg' alt="code">
            <p class="imgtitle">Report & Registration f...</p>
        </div>
        
        <div>
            <img class="imgsize2" src='../../assets/code2.jpg' alt="code">
            <p class="imgtitle1">Vaccination records</p>
        </div>
        <div>
            <img class="imgsize3" src='../../assets/code3.jpg' alt="code">
            <p class="imgtitle2">Nucleic acid test results</p>
        </div>
        <div>
            <img class="imgsize4" src='../../assets/code4.jpg' alt="code">
            <p class="imgtitle3">Inquiry COVI... testing point</p>
        </div>
    </div>
    <div>
        <p class="footer">Hotline: 0571-12345-6<br />
        - This sevice is provided by the local goverment-<br />
        <span class="langu1">中文</span>/<span class="langu2">English</span></p>
    </div>
</template>
<script>
  export default {
    name: "InfoCode"
  }
</script>
<style>
  .langu1 {
    font-size: 12px;
    line-height: 40px;
  }
  .langu2 {
    font-size:12px;
    color: black;
  }
  .footer {
    text-align: center;
    font-size: 10px;
    font-weight:400;
    color:grey;
    margin-top:-30px
  }
  .cardwid4 {
    width:295px;
    height:80px
}
  .imgsize1 {
    width:30px;
    height:auto;
    margin-left:10px
  }
  .imgsize2 {
    width:30px;
    height:auto;
    margin-left:10px
  }
  .imgsize3 {
    width:30px;
    height:auto;
    margin-left:24px
  }
  .imgsize4 {
    width:30px;
    height:auto;
    margin-left:32px
  }
  .imgtitle {
    font-size: 10px;
    text-align:center;
    font-weight: 450;
    margin-left:-8px;
  }
  .imgtitle1 {
    font-size: 10px;
    text-align:center;
    font-weight: 450;
    margin-left:-3px;
  }
  .imgtitle2 {
    font-size: 10px;
    text-align:center;
    font-weight: 450;
    margin-left:5px;
  }
  .imgtitle3 {
    font-size: 10px;
    text-align:center;
    font-weight: 450;
    margin-left:8px;
  }
</style>