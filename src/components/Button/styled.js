import styled from 'styled-components';

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(16px, 5vw, 36px);
    transition: transform 0.1s, box-shadow 0.1s;
    border: 2px solid #000;
    border-radius: 5px;
    font-weight: 600;
    color: white;
    background-color: #444;
    box-shadow: -2px 3px 0 #222, -4px 6px 0 #000;
    padding : 20px;
    margin: 0.5rem;
    flex: 1;

  &:active {
    transform: translateY(4px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  }

    &:hover{
    opacity: 0.9;
  }

  @media only screen and (min-width: 375px) {
    
  }

`;

export {Button};