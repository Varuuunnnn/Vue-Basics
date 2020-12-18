Vue.component('plan',{
    template:'#plan-template',
      props: ['name']
});

Vue.component('plan-picker',{
   template: '#plan-picker-template',
   data(){
       return{
           plans:['Premium', 'The Single','The Family','The Couple']
       }
   }

})


var app = new Vue({
     el:'#app'

})