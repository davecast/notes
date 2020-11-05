import React from "react";

import { Article, Titulo, Texto, Fecha } from "./styled";

const Note = ({ titulo, texto, fecha, color }) => {
  return (
    <Article back={color}>
      <Titulo>{titulo}</Titulo>
      <Texto>{texto}</Texto>
      <Fecha>{fecha}</Fecha>
    </Article>
  );
};

export default Note;
