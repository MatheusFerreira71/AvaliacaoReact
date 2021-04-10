import Card from '../Card';
interface PropriedadesProps {
  returnedProps: Function
}

function Propriedades({ returnedProps }: PropriedadesProps) {
  const { titulo, aluno, nota } = returnedProps();
  return (
      <div className="container">
        <Card title={titulo} color="purple">
          <p>{aluno} sua nota é: {nota}</p>
        </Card>
      </div>
  );
}

export default Propriedades;
