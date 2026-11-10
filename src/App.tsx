import './App.css'
import { useState, useEffect } from 'react';

function Contador() {
  const [valor, setValor] = useState(0);
  useEffect(() => {
    document.title = `Total: ${valor}`;
  }, [valor]);
  return (
    <button className='btn' onClick={() => setValor(valor + 1)}>
      Conté {valor} veces
    </button>
  );
}

export default Contador;