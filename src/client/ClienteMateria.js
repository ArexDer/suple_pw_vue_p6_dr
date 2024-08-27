import axios from 'axios';

const guardar =async  (body)=>{
    const data = axios.post(`http://localhost:8080/API/v1.0/Matricula/materias`, body)
    .then(r =>r.data);
    return data;
}

const actualizar = async (body, codigo)=>{
    const data = axios.put(`http://localhost:8080/API/v1.0/Matricula/materias/${codigo}`, body)
    .then(r =>r.data);
    return data;
}

const borrar = async (codigo)=>{
    const data = axios.delete(`http://localhost:8080/API/v1.0/Matricula/materias/${codigo}`)
    .then(r =>r.data);
    return data;
}

const buscar = async (codigo)=>{
    const data = axios.get(`http://localhost:8080/API/v1.0/Matricula/materias/${codigo}`)
    .then(r =>r.data);
    return data;
}

const buscarTodos = async ()=>{
    const data = axios.get(`http://localhost:8080/API/v1.0/Matricula/materias`)
    .then(r =>r.data);
    return data;
}

//FACHAS....................................


 export const guardarFachada =async  (body)=>{
    
    return await guardar(body);
}

export const actualizarFachada = async (body, codigo)=>{
    
    return await actualizar(body,codigo);
}

export const borrarFachada = async (codigo)=>{
    
    return await borrar(codigo);
}

export const buscarFachada = async (codigo)=>{
   
    return await buscar(codigo);
}

export const buscarTodosFachada = async ()=>{
   
    return await buscarTodos();
}





