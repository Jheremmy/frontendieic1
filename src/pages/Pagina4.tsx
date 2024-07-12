import { obtenerPersonas } from '@/firebase/Promesas'
import React, { useEffect } from 'react'

export default function Pagina4() {
    const traerDatos = ()=>{
        obtenerPersonas().then((personas)=>{
            console.log(personas)
        })
    }
    useEffect(()=>{
        traerDatos()
    },[])


  return (
    <>
    
    </>
  )
}
