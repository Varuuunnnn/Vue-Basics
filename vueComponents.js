Vue.component('mycomponent',{
      template:'<h2>This is my component {{ name }}<br> {{ temperature }}<br> <button v-on:click="changeTemperature()" style="color:green;">+10</button></h2>' ,
      data: function(){
          return {
              name:'User',
              temperature:100,

          }
      },
      methods:{
          changeTemperature: function(){
              this.temperature+=10;
          }
      },

});

var app = new Vue({
     el:'#app',

     data:{

     },
     methods:{

     },

})