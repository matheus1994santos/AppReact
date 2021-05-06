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


import GreenBtnS from '../buttom/QuadShadow/01green';
import RedBtnS from '../buttom/QuadShadow/01red';
import BlackBtnS from '../buttom/QuadShadow/01black';
import GrayBtnS from '../buttom/QuadShadow/01gray';
import BlueBtnS from '../buttom/QuadShadow/01blue';
import BrownBtnS from '../buttom/QuadShadow/01brown';
import PinkBtnS from '../buttom/QuadShadow/01pink';
import YellowBtnS from '../buttom/QuadShadow/01yellow';
import VioletBtnS from '../buttom/QuadShadow/01violet';
import PurpleBtnS from '../buttom/QuadShadow/01purple';

import GreenBtnA from '../buttom/QuardArredondado/01green';
import RedBtnA from '../buttom/QuardArredondado/01red';
import BlackBtnA from '../buttom/QuardArredondado/01black';
import GrayBtnA from '../buttom/QuardArredondado/01gray';
import BlueBtnA from '../buttom/QuardArredondado/01blue';
import BrownBtnA from '../buttom/QuardArredondado/01brown';
import PinkBtnA from '../buttom/QuardArredondado/01pink';
import YellowBtnA from '../buttom/QuardArredondado/01yellow';
import VioletBtnA from '../buttom/QuardArredondado/01violet';
import PurpleBtnA from '../buttom/QuardArredondado/01purple';

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

                <div>
                  <RedBtnS/>
                  <GreenBtnS/>
                  <BlackBtnS/>
                  <GrayBtnS/>
                  <BlueBtnS/>
                </div>

                <div>
                  <BrownBtnS/>
                  <PinkBtnS/>
                  <YellowBtnS/>
                  <VioletBtnS/>
                  <PurpleBtnS/>
                </div>

                <div>
                  <RedBtnA/>
                  <GreenBtnA/>
                  <BlackBtnA/>
                  <GrayBtnA/>
                  <BlueBtnA/>
                </div>

                <div>
                  <BrownBtnA/>
                  <PinkBtnA/>
                  <YellowBtnA/>
                  <VioletBtnA/>
                  <PurpleBtnA/>
                </div> 

              </div>
            </div>    

        </div>
    </>
  )
}

export default Articles1;