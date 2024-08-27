<template>
    <div class="container"></div>
    <p>Listado y Acciones</p>
    <ListarMateria/>
    
    
  </template>
  
  <script>
    import ListarMateria from '@/components/ListarMateria.vue';
  export default {
    components:{
        ListarMateria
    }
    
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
    }
  
  </style>
  