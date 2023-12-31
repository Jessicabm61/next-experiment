import {useState} from 'react';

function Home() {

    const [contador, setContador] = useState(1);

    function AdicionaContador(){
        setContador(contador + 1)
    }
    return (
      <div>
        <button onClick={AdicionaContador}>Contador</button>
        <div>{contador}</div>
      </div>
    );
  }
  
  export default Home;
  