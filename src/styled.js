import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  border: 2px solid #000;
  background-color: #444;
  box-shadow: -10px 10px 0 #222;

  @media only screen and (min-width: 375px) {
    max-width: 95%;

    
  }

`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  align-items: stretch;
  margin: 0rem 0.5rem;
`;

export const Block = styled.div`
  background-color: #444;
  font-family: "Pixelify Sans";
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  width: 100%;
  height: 3rem;

  box-shadow: -10px 10px 0 #222;
  outline: none;
  padding: 20px;
`;
