import Link from "next/link";
import Perfil from "./components/Perfil";

export default function Home() {
  return (
    <>
      <nav>
        <Link href={"About"}>hola</Link>
        <br></br>
        <Link href={"Pagina1"}>pagina 1</Link>
        <br></br>
        <Link href={"Pagina2"}>Pagina 2</Link>
        <br></br>
        <Link href={"Pagina3"}>Pagina 3</Link>
      </nav>

      {/* buscar: useState y useEffect */}
      {/* es7 react, simple react snippets, typescript react code */}

      <p>hola</p>
      <Perfil Nombre="xanxito" Apellido="gonzalez" Edad={35} />
      <Perfil Nombre="keco" Apellido="jones" Edad={15} />
    </>
  );
}
