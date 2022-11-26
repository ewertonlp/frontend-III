import Button from "./Button";
import Title from "./Title";

const App = () =>  {

  function btn1Func() {
    alert("Btn 1");
  }

  function btn2Func() {
    alert("Btn 2");
  }

  function btn3Func() {
    alert("Btn 3");
  }

  return (
    <>
    <Title title="Titulo1"/>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <Button name="Click" color="red" click={btn1Func}/>
    <Button name="Clique aqui!" color="blue" click={btn2Func}/>
    </>
  );
};

export default App;
