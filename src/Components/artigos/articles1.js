import React from 'react';
import './articles1.css';
import GreenBtn from '../buttom/Quadrado/01green'
import RedBtn from '../buttom/Quadrado/01red';
import BlackBtn from '../buttom/Quadrado/01black';
import GrayBtn from '../buttom/Quadrado/01gray';
import BlueBtn from '../buttom/Quadrado/01blue';
import BrownBtn from '../buttom/Quadrado/01brown'
import PinkBtn from '../buttom/Quadrado/01pink';
import YellowBtn from '../buttom/Quadrado/01yellow';
import VioletBtn from '../buttom/Quadrado/01violet';
import PurpleBtn from '../buttom/Quadrado/01purple';

const Articles1 = () => {
  return ( 
    <>
        <div className="artigo1">
            
            {/* <div className="box-flex">
              <div id="tela" className="tela">
                <span className="titulo"> Tensão </span>
                <input type="text" name="Resistência" id="r-ohm0" placeholder="Resistencia em Ohm"/>
                <span className="simb"> x </span>
                <input type="text" name="Corrente" id="a-amp0" placeholder="Corrente em Ampere"/>
                <input type="submit" value="=" id="btn-res0" className="btn-res"/>
                <span id="print0" className="print"></span>
                <RedBtn/>
                <GreenBtn/>
              </div>
            </div>  */}

            <div className="box-flex">
              <div id="tela" className="tela">
                <div>
                  <RedBtn/>
                  <GreenBtn/>
                  <BlackBtn/>
                  <GrayBtn/>
                  <BlueBtn/>
                </div>

                <div>
                  <BrownBtn/>
                  <PinkBtn/>
                  <YellowBtn/>
                  <VioletBtn/>
                  <PurpleBtn/>
                </div>
               
              </div>
            </div>    

        </div>
    </>
  )
}

export default Articles1;