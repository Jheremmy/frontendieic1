import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export const Pagina2 = () => {
const [nombre, setnombre] = useState(Joselito)
const [apellido, setapellido] = useState(Vaca)
const[eNombre,setENombre] = useState('')
const validarNombre 0 (valor:string)=>{
  if(valor.length<4){
    setENombre('debes ingresar 4 caracteres')
  }else{
    setENnombre('')
  }
  setNombre(valor)
}

  return (
    <>
    <h1>Registro</h1>
    <h2>Bienvenido {nombre} {apellido}</h2>
    <Form>
      <Form.Group>  
        <Form.Label>Nombre: </Form.Label>
        <Form.Control
         type='text' 
         placeholder='Ingrese su nombre'/>
         onChange={(e)=> vaidarNombre(e.currentTarget.value)}
      </Form.Group>
      <form.text>
        {eNombre}
      </form.text>
      <Form.Group>  
        <Form.Label>Apellido: </Form.Label>
        <Form.Control 
        type='text' 
        placeholder='Ingrese su apellido'/>
        onChange={(e)=> setApellido(e.currentTarget.value)}

      </Form.Group>  

    </Frorm>
  
  )
}
export default Pagina2