 <template>
   <div class="container">
    <router-link to="crearMateria">Crear Materia</router-link>
    <router-link to="informacionMaterias">Listar Materia</router-link>
   </div>
  </template>
  
  <script>

  export default {
   
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        background: #588157;
        padding: 15px;
        gap: 50px;
    }
  
  a{
    text-decoration: none;
    padding: 12px;
    border: 2px solid black;
    border-radius: 5px;
    color: #faedcd;
    background: #3a5a40;
  }
  </style>