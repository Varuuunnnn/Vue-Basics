Vue.component('plan',{
    template:'#plan-template',
      props: ['name']
      
      
      

});

var app = new Vue({
     el:'#app',
     data:{
         plans:['Premium', 'The Single','The Family','The Couple'],
     }

})