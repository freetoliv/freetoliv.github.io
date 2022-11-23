<template>
    <div class=" container card rounded   shadow-lg bg-white mt-2 mx-auto cardwid3 d-flex flex-row">
        
        <div class="flex-grow-1">
            <div class="textes">
                <h5>Recent Nucleic Acid Testing</h5>  
                <p class="report">11.23 12:45  Report Time</p>
            </div>
                
        </div>
        
        <div class="maturity">
           <p class=" text-primary martime">3 Days To Maturity<br><span class="matur1">2</span><span class="matur2">d</span><span class="matur3">16</span><span class="matur4">h</span></p>
        </div>
    
    </div>
</template>
<script>
    export default {
        name: "AcidTesting"
    }
</script>
<style>
.textes {
    margin-top:6px;
    line-height: 10px;
}
.cardwid3 {
    width:295px;
    height:70px
    
}
.matur1,
.matur3 {
    font-size:15px;
    font-weight: 700;
}
.matur2,
.matur4 {
    font-size:7px;
    font-weight: 500;
}

h5 {
    font-size:14px;
    font-weight: 600;
}
.martime{
    font-size:13px;
    font-weight: 499;
    margin-left: 10px;
}

.report {
    font-size: 13px;
    color:rgb(80, 79, 79);
    font-weight: 500;
}

.maturity{
    height: 60px;
    width:120px;
    background-color: rgb(0, 153, 255, 0.08) ;
    margin-top:4px;
    padding-right: 20px;
    border-radius: 5%;  
}



</style>