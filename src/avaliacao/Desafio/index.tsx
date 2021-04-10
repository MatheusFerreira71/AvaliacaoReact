import Card from '../Card';
function Desafio() {
  const title = "SEGUNDO DESAFIO REACT"
  return (
    <div className="container">
      <Card title={title} color="blue" titleColor="purple">
        <p>Esse desafio é fácil d+ Dev's do 6° ADS!!</p>
      </Card>
    </div>
  );
}

export default Desafio;
