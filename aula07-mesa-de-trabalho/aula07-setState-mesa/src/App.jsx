import { useState } from "react";

import "./App.css";

const App = () => {
  const [items, setItems] = useState([1]);

  const addItem = () => {
    let temp = [...items];
    setItems([...items, items.length + 1]);
  };

  return (
    <>
      <div className="app">
        <h3>Clique no botão para adicionar items na sua lista.</h3>
        <button onClick={addItem}>Adicionar</button>
        {items.map((item) => (
          <p>{`O item ${item} foi adicionado a sua lista`}</p>
        ))}
      </div>
    </>
  );
};

export default App;
