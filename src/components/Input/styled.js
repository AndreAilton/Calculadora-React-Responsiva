import styled from 'styled-components';

const Input = styled.input`
  background-color: #4CAF50;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 20px;
  text-align: right;
  width: 100%;
  color: black;
  outline: none;
  padding: 20px;
  border: 20px solid #444;

  /* Efeito de profundidade invertida */
  // border: 2px solid #5cbf2a;
  box-shadow: inset 3px 3px 6px rgba(0, 0, 0, 0.4),
              inset -3px -3px 6px rgba(255, 255, 255, 0.5);

  /* Suaviza o efeito ao passar o mouse */
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.5),
                inset -4px -4px 8px rgba(255, 255, 255, 0.4);
  }

  &:focus {
    box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.4),
                inset -2px -2px 4px rgba(255, 255, 255, 0.5);
  }
`;

export {Input};