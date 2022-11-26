import styles from './styles.module.css';

const ItemList = ({ item }) => {

    const { marca, modelo, descricao, img } = item;
   
    return (
    <li className={styles.item_list}>
        <h2>{modelo}</h2>
        <h3>{marca}</h3>
        <p>{descricao}</p>
        <img src={img} alt="" />
    </li>
    );
}

export default ItemList;