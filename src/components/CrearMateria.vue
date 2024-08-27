<template>
    <div class="container">
        <h1>Ingrese una Materia</h1>

        <form >
            <ul>
                <li>
                    <label for="codigo">Código</label>
                    <input type="text" id="codigo" v-model="codigo" >
                </li>

                <li>
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" v-model="nombre">
                </li>

                <li>
                    <label for="descripcion">Descripción</label>
                    <input type="text" id="descripcion" v-model="descripcion">
                </li>

                <li>
                    <label for="numeroDeCredito">Numero de Creditos</label>
                    <input type="number" id="numeroDeCredito" v-model="numeroDeCredito">
                </li>
                <div>
                    <button class="btn"  @click="guardar">GUARDAR</button>
                </div>
            </ul>
        </form>
        <div class="mensaje" v-if="mensaje">
            <p>Datos de Materia Guardados Exitosamente</p>
        </div>
    </div>
    
   </template>
   
   <script>
 
 import { guardarFachada } from '@/client/ClienteMateria';
   export default {
    data(){
        return{
            codigo:"",
            nombre: "",
            descripcion:"",
            numeroDeCredito:0,
            mensaje:false


        }
    },
    methods:{
        async guardar(){
            const bodyMateria={
                codigo:this.codigo,
                nombre:this.nombre,
                descripcion:this.descripcion,
                numeroDeCredito:this.numeroDeCredito

            }
            const data = await guardarFachada(bodyMateria);
            console.log("Datos guardados correctamente");

            this.mensaje=true;

            this.codigo="";
            this.nombre="";
            this.descripcion="";
            this.numeroDeCredito=0;

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
    font-size: 20px;
   }

   .btn:hover{
    background: #dad7cd;
    color: rgb(20, 18, 18);
   }
   
   </style>