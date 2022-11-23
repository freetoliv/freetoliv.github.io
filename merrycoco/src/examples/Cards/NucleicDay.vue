<template>
    <div class=" container card rounded   shadow-lg bg-white mt-2 mx-auto cardwid d-flex flex-row box">
        
        <div class="p-2 me-3 mt-3">
            <div class="countpic rounded">
                <h1>≤1 <span class="neg">Neg</span>
                    <button class=" btnmore rounded-pill"><span class="btntext">more</span></button>
                </h1>
                
            </div>
                
        </div>
        <hr class="vertical" />
        <div class="p-2">
            <h6>Itinerary</h6>
            <p class="visiare">Visited an area at risk in the last 7 days?<br><button type="button" class="bg-primary  rounded-pill text-white"><span>Check now</span></button></p>
        </div>
    
    </div>
  </template>
  <script>
     export default {
    name: "NucleicDay"
     }
  </script>
  <style>
  .cardwid {
      width:295px;
      
  }
  .box{
    margin-bottom:-22px
  }

  .countpic {
    width:117px;
    height: 82px;
    background: linear-gradient(to top right, #33ccff 0%, #00ff99 100%);
    margin-top: -11px;
    margin-left:-5px


  }
  .neg {
    font-size:15px;
  }
  .btnmore {
    border: 1.34px solid white;
    background-color: transparent;
  }
  .btntext {
    font-size: 12px;
    font-weight: 500;
    color:white
  }
  .vertical {
    border-left: 1px solid black;
    height: 95px;
    position: absolute;
    left:50%;
    margin-top:12px
  }

  h1 {
    text-align: center;
    color:white;
  }
  h6 {
    text-align: center;
    margin-top:10px;
    line-height: 1px;
    font-size: 14px;
  }
  .visiare {
    font-size:12.3px;
    text-align: center;
    line-height: 15px;
    color:grey;
    font-weight: 400;
  }
  button {
    height: 19px;
    width:73px;
    font-size:10px;
    border: none;
    margin-top:5px;
    padding-bottom:18px;
    padding-top:3px
  }
  span{
    font-size:10px;
    
  }
</style>