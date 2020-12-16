

var app = new Vue({
   el:'#app',

   data:{
    rate:5,
    time:3,
    interest:'',
   },
   methods:{
    calInterest:function(){
     this.interest= this.$refs.principal.value*this.time*this.rate/100;
    },
   },

})