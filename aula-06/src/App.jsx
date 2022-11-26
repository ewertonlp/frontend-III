import ItemList from "./components/itemlist/Itemlist";
import { carros } from "./mock/carros";

// const carros = [
//   {
//     id: 1,
//     modelo: "Argo",
//   },
//   {
//     id: 2,
//     modelo: "Fusion",
//   },
//   {
//     id: 3,
//     modelo: "Sonata",

//   },
//   {
//     id: 4,
//     modelo: "Pulse",
//   }
// ];




const App = () => {
  return (
    <ul>
      {carros.map((carro) => (
          <ItemList key={`list-item-${carro.id}`} item={carro}/>
        ))}
    </ul>
  );
}

export default App;
