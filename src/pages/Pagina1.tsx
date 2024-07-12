import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Pagina1 = () => {
  const [nombre, setNombre] = useState("Joselito");
  const [apellido, setApellido] = useState("Vacca");
  const [enombre, setEnombre] = useState("");
  const validarNombre = (valor: string) => {
    if (valor.length > 4) {
      setEnombre("");
    } else {
      setEnombre("Debes ingresar al menos 4 caracteres");
    }
    setNombre(valor);
  };
  const registrar = () => {
    console.log(nombre + " " + apellido);
    alert("regitraste:" + nombre + " " + apellido);
  };
  return (
    <>
      <Form>
        <h1>
          Bienvenido {nombre} {apellido}
        </h1>
        <Form.Group>
          <Form.Label>Nombre: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu nombre"
            onChange={(e) => {
              validarNombre(e.currentTarget.value);
            }}
          />
          <Form.Text>{enombre}</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Apellido: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu apellido"
            onChange={(e) => {
              setApellido(e.currentTarget.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" onClick={registrar}>
          Registrar
        </Button>
      </Form>

      <form>
        <label> Nombre:</label>
        <input type="text" placeholder="ingresa nombre" />
        <label> Apellido:</label>
        <input type="text" placeholder="ingresa apellido" />
        <button type="button">Registrar</button>
      </form>
    </>
  );
};

export default Pagina1;
