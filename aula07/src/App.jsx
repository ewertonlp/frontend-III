import { useState } from 'react';


const App = () => {

  // const [nome, setNome] = useState();
  const [numero, setNumero] = useState(0);

  const [valores, setValores] = useState([10, 20, 30, 40]);

  const handleButton = () => {
    setNumero(numero + 1);
    setValores([...valores, 1]);
  }

  return (
    <div>

      <h2>{numero}</h2>
      {valores.map((vol) => (
      <h2>{vol}</h2>
      ))}
      <button onClick={() => {}}>Clique</button>
    </div>
  );
}

export default App;
