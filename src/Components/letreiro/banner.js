import React from 'react';
import './banner.css';




const zeroFill = n => {
  return ('0' + n).slice(-2);
}

const interval = setInterval(() => {
  // Pega o horário atual
  const now = new Date();

  // Formata a data hh:ii:ss
  const dataHora = zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());

  // Exibe na tela 
  document.getElementById('ban1').innerHTML = 'Horário: ' + dataHora;
}, 1000);

const Banner1 = () => {

  return ( 
    <>
        <div className="banner1">
            <p id="ban1">
              
            </p>
            <p id="ban2">
              
            </p>
            <p id="ban3">
                Estamos aqui por você confira nossas novidades!!
            </p>
        </div>
    </>
  )
}

export default Banner1;