import React, { useState } from 'react';

const Contador = () => {
  // Inicialização do estado: count é o valor, setCount é a função que o altera
  const [count, setCount] = useState(0);

  // Função para lidar com o clique
  const incrementarContador = () => {
    // Usar a versão de callback é uma boa prática quando o novo estado 
    // depende diretamente do estado anterior
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Desafio: Contador de Cliques</h1>
      <p>O valor atual é: <strong>{count}</strong></p>
      <button onClick={incrementarContador}>
        Incrementar
      </button>
    </div>
  );
};

export default Contador;