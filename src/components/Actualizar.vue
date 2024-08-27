<template>
    <div class="container">
        <h1>Datos a Actualizar</h1>

        <form >
            <ul>
                <li>
                    <label for="codigo">Codigo</label>
                    <input type="text" id="codigo" v-model="materia.codigo" disabled>
                </li>

                <li>
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" v-model="materia.nombre">
                </li>

                <li>
                    <label for="descripcion">Descripción</label>
                    <input type="text" id="descripcion" v-model="materia.descripcion">
                </li>

                <li>
                    <label for="numeroDeCredito">Numero de Creditos</label>
                    <input type="number" id="numeroDeCredito" v-model="materia.numeroDeCredito">
                </li>
                <div>
                    <button  class="btn" @click="actualizar(materia.codigo)">ACTUALIZAR</button>
                </div>
            </ul>
        </form>
        <div class="mensaje" v-if="mensaje">
            <p>Datos de Materia Actualizados Exitosamente</p>
        </div>
        <button class="btn" @click="regresar">Regresar</button>
    </div>
    
   </template>
   
   <script>
 
 import { buscarFachada, actualizarFachada } from '@/client/ClienteMateria';
   export default {
    data(){
        return{

            materia:{
                codigo:"",
                nombre: "",
                descripcion:"",
                numeroDeCredito:0,

            },
            
            mensaje:false


        }
    },
    async mounted(){
        const codigo = this.$route.params.codigo;
        const data = await buscarFachada(codigo);
        this.materia=data;

    },
    methods:{
        async actualizar(codigo){
            const bodyMateria={
                codigo:this.materia.codigo,
                nombre:this.materia.nombre,
                descripcion:this.materia.descripcion,
                numeroDeCredito:this.materia.numeroDeCredito

            }
            const data =await actualizarFachada(bodyMateria,codigo);
            this.mensaje=true;
            console.log("Datos Actualizados");
        },

        regresar(){
            this.$router.push('/listarMateria');
        }
    }

   
    
    
   }
   </script>
   
   <!-- Add "scoped" attribute to limit CSS to this component only -->
   <style scoped>
     
   .container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
   }
   
   form ul{
    border: 2px solid black;
    justify-content: center;
    align-items: center;
    padding: 30px;
    list-style-type:none;
    border-radius: 8px;

   }

   
   li{
    display: flex;
    flex-direction: column;
    padding: 5px;
    

   }
   label{
    display: flex;
    justify-content: left;
   }
   input{
    border-radius: 5px;
   }

   .btn{
    margin-top: 30px;
    padding: 10px;
    background: #344e41;
    color: white;
    
   }
   p{
    color: green;
   }

   .btn:hover{
    background: #dad7cd;
    color: rgb(20, 18, 18);
   }
   
   
   </style>