import { Container, Content, Row, Block } from "./styled";
import Button from "./components/Button";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  
  const [input, setInput] = useState("");

  const adicionarNumero = (NumeroNovo) => {
    if (input.includes("Error")) {
      limparCalculo();
    }
    setInput((NumeroSalvo) => `${NumeroSalvo}${NumeroNovo}`);
  };

  const calcularResultado = () => {
    const numerosValidos = /[0-9\+\-\*\/\()%.]/g
    const inputSemNumeros = input.replace(numerosValidos, '');

    if (input === "") {
      return;
    }
    
    if (inputSemNumeros){
      setInput("");
      return;
    }

    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
      
    }
  };

  const limparCalculo = () => {
    setInput("");
  }

  return (
    <div className="App">
      <Container>
        <Content>
          <Block>CALCULADORA REACT</Block>
          <Input value={input} />
          <Row>
            <Button Nome="(" onClick={() => adicionarNumero("(")} />
            <Button Nome=")" onClick={() => adicionarNumero(")")} />
            <Button Nome="%" onClick={() => adicionarNumero("%")} />
            <Button Nome="C" onClick={() => limparCalculo()} />
          </Row>

          <Row>
            <Button Nome="7" onClick={() => adicionarNumero("7")} />
            <Button Nome="8" onClick={() => adicionarNumero("8")} />
            <Button Nome="9" onClick={() => adicionarNumero("9")} />
            <Button Nome="/" onClick={() => adicionarNumero("/")} />
          </Row>

          <Row>
            <Button Nome="4" onClick={() => adicionarNumero("4")} />
            <Button Nome="5" onClick={() => adicionarNumero("5")} />
            <Button Nome="6" onClick={() => adicionarNumero("6")} />
            <Button Nome="*" onClick={() => adicionarNumero("*")} />
          </Row>

          <Row>
            <Button Nome="1" onClick={() => adicionarNumero("1")} />
            <Button Nome="2" onClick={() => adicionarNumero("2")} />
            <Button Nome="3" onClick={() => adicionarNumero("3")} />
            <Button Nome="-" onClick={() => adicionarNumero("-")} />
          </Row>

          <Row>
            <Button Nome="0" onClick={() => adicionarNumero("0")} />
            <Button Nome="." onClick={() => adicionarNumero(".")} />
            <Button Nome="=" onClick={() => calcularResultado()} />
            <Button Nome="+" onClick={() => adicionarNumero("+")} />
          </Row>
        </Content>
      </Container>
    </div>
  );
}

export default App;
