import React from 'react';
import './banner.css';




const zeroFill = n => {
  return ('0' + n).slice(-2);
}

const interval = setInterval(() => {
  // Pega o horário atual
  const now = new Date();

  // Formata a data conforme dd/mm/aaaa hh:ii:ss
  const dataHora = zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());

  // Exibe na tela usando a div#data-hora
  document.getElementById('ban2').innerHTML = 'Horário: ' + dataHora;
}, 1000);

const Banner1 = () => {
  // const data = new Date();
  return ( 
    <>
        <div className="banner1">
            <p id="ban1">
              Itabuna
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