import { useState } from 'react';
import Link from 'next/link'

function Home() {
  const [contador, setContador] = useState(1);

  function AdicionaContador() {
    setContador(contador + 1);
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={AdicionaContador}>Contador</button>
      <div>{contador}</div>
     <Link href="/Sobre">Pagina Sobre</Link>
    
    </div>
  );
}

export default Home;
