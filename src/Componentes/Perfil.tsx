import React from 'react'
import { Permisos } from './Permisos'
interface Props{
    nombre:string,
    apellido:string,
    edad?:number   
const Perfil = (props:Props) => {
  return (
    {
    <>
    <h1>Hola!</h1>
    <p>Nombre: {props.nombre}</p>
    <p>Apellido: {props.apellido}</p>
    <p>Edad: {props.edad}</p>  
    </>
    } 
    
    { <>
      props.edad!=undefined &&
        props.edad = 18 &&
        <p>Tienes permitido pasar</p>
        <Permisos permiso1='Beber' permiso2='Conducir'
     </>
    }     
    
      {
        <>
      props.edad!=undefined &&
      props.edad > 18 &&
      <p>Tienes permitido pasar</p>
      <Permisos permiso1='Tomar leche' permiso2='Divertirse'
      </>
      }
    </>
  )
}
export default Perfil