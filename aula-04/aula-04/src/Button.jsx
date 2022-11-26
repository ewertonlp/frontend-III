function Button(props) {

    console.log(props);

    function handleClick() {
        alert('ok');
    }

    return <button onClick={props.click} style={{backgroundColor:props.color}} >{props.name}</button>
}

export default Button;