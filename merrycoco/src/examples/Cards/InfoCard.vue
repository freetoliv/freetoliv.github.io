<template>
    <div class=" container card rounded   shadow-lg bg-white mt-3 cardwid">
      <div class="bg-white text-center card-header bodywid  clearfix d-flex justify-content-center">
        <p class="txthead">{{years}}.{{month}}.{{days}}<br>
        <span class="txtgra">{{hours}}:{{minutes}}:{{seconds}}</span></p>
      </div>
      <div class="p-3 text-center card-body">
        <div class="clearfix">
            <span class="float-start wordsize">朱筱雨<a class="show" href="#">show</a></span>
            <span class=" wordsize1 float-end"><a href="#">Update</a></span>
        </div>
        <div>
            <h6 class="text-center">Hangzhou Health Code</h6>
            <img src='../../assets/code.jpg' alt="code">
        </div>
        <div class="rebox rounded-1">
            <p class="remend"><img class="danger"  src='../../assets/danger.jpg' alt="code">Red code: You are not allowed to travel to your d... <i class="arrow down"></i></p>
        </div>
      </div>  
    </div>
  </template>
  
  <script>
import userpic from "@/assets/code.jpg";

  export default {
    name: "DefaultInfoCard",
    props: {
      
    },
    data () {
        return {
            years:0,
            month:0,
            date: 0,
            hours: 0,
            minutes: 0,
            seconds:0,
        }
    },
    methods: {
        setTime() {
            setInterval(() =>{
                const date = new Date()
                this.years = date.getFullYear()
                this.month = this.checkSingleDigit(date.getMonth() + 1)
                this.days = this.checkSingleDigit(date.getDate())
                this.hours = this.checkSingleDigit(date.getHours())
                this.minutes = this.checkSingleDigit(date.getMinutes())
                this.seconds = this.checkSingleDigit(date.getSeconds())
            }, 1000)
        },
        checkSingleDigit (digit) {
            return( '0' + digit).slice(-2)
        }
    },
    mounted() {
        this.setTime()
    }
  }
  </script>
  <style>
    .show {
        font-size:11px;
        margin-left:7px
    }
    .danger {
        width:12px;
        margin-right:5px;
        margin-bottom:2px;
    }
    .arrow {
    border: solid rgb(77, 76, 76);
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 2px;
    margin-bottom:2px
    }
    .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);}

    .rebox {
        background-color:rgb(0, 153, 255, 0.08) ;
        height:25px;
        padding-top:4px;
        margin-top:7px;
        width:262px;
        margin-left:-13px
        
    }
    .remend {
        font-size: 10px;
        margin-bottom: -5px;
        color:rgb(77, 76, 76);
        text-align: center;
    }
    .cardwid {
        width:295px
    }

    .txthead {
        font-size: 32px;
        font-weight: 700;
       
    }
    .txtgra {
        font-size: 42px;
        font-weight: 700;
       
    }
    .wordsize {
        font-weight: 700;
        font-size: 14px;
        margin-left: -16px;
        margin-top: -12px
    }
    .wordsize1 {
       
        font-size: 13px;
        margin-right: -15px;
        margin-top: -12px
    }
    span a {
        text-decoration: none;
    }

    h6 {
        font-size: 13px;
        font-weight: 700;
    }
    img {
        width:150px;
    }
  </style>
  