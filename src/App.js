import React from "react";

import Note from "./components/Note";

import GlobalStyled, { Container, Grid } from "./styled";

const notes = [
  {
    titulo: "Health",
    texto:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has.",
    fecha: "20 may",
    color: "#ffe3e3",
  },
  {
    titulo: "Pasear",
    texto:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has.",
    fecha: "10 Jun",
    color: "#fae0ff",
  },
  {
    titulo: "Comprar comida",
    texto:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has.",
    fecha: "10 Jul",
    color: "#f9ffe0",
  },
  {
    titulo: "Reunion",
    texto:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has.",
    fecha: "20 Jul",
    color: "#e0fff1",
  },
  {
    titulo: "Entrega proyecto",
    texto:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has.",
    fecha: "1 Ago",
    color: "#f2e0ff",
  },
];

function App() {
  return (
    <Container>
      <GlobalStyled />
      <Grid>
        {notes.map(({ titulo, texto, fecha, color }, index) => {
          return (
            <Note titulo={titulo} texto={texto} fecha={fecha} color={color} />
          );
        })}
      </Grid>
    </Container>
  );
}

export default App;
