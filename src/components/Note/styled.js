import styled from "styled-components";

export const Titulo = styled.h2`
  font-size: 18px;
  line-height: 18px;
  margin: 0 0 10px;
  color: #222222;
`;
export const Texto = styled.p`
  font-size: 12px;
  line-height: 22px;
  margin: 0 0 10px;
  color: #717171;
  transition: all 0.3s ease-in;
`;
export const Fecha = styled.small`
  font-size: 12px;
  line-height: 22px;
`;

export const Article = styled.article`
  box-sizing: border-box;
  padding: 15px;
  border-radius: 8px;
  background-color: ${({ back }) => (back ? back : "#ededed")};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    ${Texto} {
      color: #222222;
    }
  }
`;
