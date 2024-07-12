import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Persona } from '@/interface/Interfaces';
import { registrarPersona } from '@/firebase/Promesas';


const initialStatePersona:Persona = {
    nombre:"",
    apellido:"",
    rut:"",
    edad:0,
    fechaNacimiento:"",
    correo:""
}

const Pagina3 = () => {
    const [persona, setPersona] = useState<Persona>(initialStatePersona)

    const validarLargoMinimo =(nombre:string,value:string)=>{
        setPersona({...persona,[nombre]:value})
    }
    const registrar=()=>{
        registrarPersona(persona).then(()=>{
            alert("Se registró con exito")
        }).catch((e)=>{alert("Algo ocurrió")})
    }
  return (
    <>

    <Form>

        <Form.Group>
            <Form.Label>nombre</Form.Label>
            <Form.Control type='text' placeholder='Ingrese su nombre'
            name='nombre'
            onChange={(e)=>{validarLargoMinimo(e.currentTarget.name,e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Apellido</Form.Label>
            <Form.Control type='text' placeholder='Ingrese su Apellido'
            name='apellido'
            onChange={(e)=>{validarLargoMinimo(e.currentTarget.name,e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Edad</Form.Label>
            <Form.Control type='number' placeholder='Ingrese su edad'
            name='edad'
            onChange={(e)=>{validarLargoMinimo(e.currentTarget.name,e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>RUT</Form.Label>
            <Form.Control type='text' placeholder='Ingrese su RUT'
            name='rut'
            onChange={(e)=>{validarLargoMinimo(e.currentTarget.name,e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Correo</Form.Label>
            <Form.Control type='email' placeholder='Ingrese su correo'
            name='correo'
            onChange={(e)=>{validarLargoMinimo(e.currentTarget.name,e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control type='date' placeholder='Ingrese su fecha de nacimiento'
            name='fechaNacimiento'
            onChange={(e)=>{validarLargoMinimo(e.currentTarget.name,e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>
        <Button variant="primary" onClick={registrar}>
          Registrar
        </Button>
    </Form>
    </>
  )
}
export default Pagina3