<template>

<div class="container">
        <h1>Listado de Materias</h1>
        <button class="btn" @click="consultar">CONSULTAR</button>
        <table>
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Nombre</th>
                    <th>Accion</th>
                    <th>Accion</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="materia in materias" :key="materia.codigo">
                    <td>{{ materia.codigo }}</td>
                    <td>{{ materia.nombre }}</td>
                    <td>
                        <router-link :to="'/actualizarMateria/'+ materia.codigo">ACTUALIZAR</router-link>
                    </td>
                    <td>
                        <button class="btnEliminar" @click="eliminar(materia.codigo)">ELIMINAR</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="mensaje" v-if="mensaje">
            <p>Materia Borrada Exitosamente</p>
        </div>
    </div>
    
</template>

<script>

import { buscarTodosFachada, borrarFachada } from '@/client/ClienteMateria';
export default {
    data(){
        return{
            materias:[],
            mensaje:false
        }
    },
    methods:{
        async consultar(){
            const data = await buscarTodosFachada();
            this.materias=data;
            console.log("Datos Cagados Correctamente");
        },

        async eliminar(cedula){
            await borrarFachada(cedula);
            console.log("Datos de Materia Borrados Correctamente");
            this.mensaje=true;
            this.consultar();

            setTimeout(()=>{
                this.mensaje=false;
            }, 3000);
        }
    }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  th{
    padding: 10px;
    background: #dad7cd;
  }
  td{
    padding: 10px;
    background: #a3b18a;

  }
  a{
    text-decoration: none;
    border: 1px solid black;
    padding: 5px;
    border-radius: 5px ;
    background: rgb(46, 99, 16);
    color: white;
  }
  .btn{
    margin-top: 30px;
    padding: 10px;
    background: #344e41;
    color: white;
    margin-bottom: 30px;
    
   }
   .btn:hover{
    background: #dad7cd;
    color: rgb(20, 18, 18);
   }
  .btnEliminar{
    background: rgb(214, 76, 76);
    padding: 5px;
    border-radius: 5px ;

  }
  .a:hover{
    color: white;
    background: black;
  }
  p{
    font-size: 20px;
    color: red;
  }


</style>