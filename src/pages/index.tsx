import Perfil from "@/Componentes/Perfil";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <nav>
      <Link href='/Pagina1'><Pagina1></Link>
      <Link href='/Pagina2'><Registrar></Link>
    </nav>
    <Perfil nombre='Joselito' apellido='Vaca' edad={20}/>
    <Perfil nombre="Melon" apellido='Demon' edad={22}/>
    </>
  );
}
