import { useState} from 'react';


const Item = () => {

    const [nomes, setNomes] = useState(['Maria', 'Ana']);

    const addPEssoa = () => {
        setNomes([Carla, ...nomes]);

        temp.push("isabela");

        setNomes(temp);
    }

  return (
    <div>
        <ul>
{
    nomes.map((nome) => (
    ))
}
        </ul>
    </div>
  )
}

export default Item;