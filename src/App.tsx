import "./assets/styles/global.css"
import Desafio from "./avaliacao/Desafio";
import Propriedades from "./avaliacao/Propriedades";
import Numeros from './avaliacao/Numeros';
interface PropsFunction {
  titulo: string;
  aluno: string;
  nota: number;
}

function App() {

  const propsFunction = (): PropsFunction => {
    return ({
      aluno: 'Matheus Ferreira',
      nota: 10,
      titulo: '2° ATIVIDADE AVALIATIVA - REACT'
    })
  }

  return (
    <>
      <Desafio />
      <Propriedades returnedProps={propsFunction} />
      <Numeros min={1} max={10} />
    </>
  );
}

export default App;
