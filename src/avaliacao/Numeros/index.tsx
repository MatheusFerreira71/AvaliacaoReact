import Card from '../Card';
import { useState, useEffect } from 'react'
import './numeros.css'

interface NumerosProps {
  min: number;
  max: number;
}

function Numeros({ min, max }: NumerosProps) {

  const randomizer = (min: number, max: number): void => {
    setRandomNumber(Math.floor(Math.random() * (max - min + 1) + min));
  }

  const [randomNumber, setRandomNumber] = useState<number>(0);

  useEffect(() => {
    randomizer(min, max);
  }, [min, max]);

  const handleClick = (): void => {
    randomizer(min, max);
  }

  return (
    <div className="container">
      <Card color="green">
        <p>Estarei em recesso em {randomNumber} dias</p>
        <button type="button" className="button-gerar" onClick={handleClick}>Gerar</button>
      </Card>
    </div>
  );
}

export default Numeros;
