import React from 'react';
import './articles1.css';
import BtnQuadrado from '../../buttom/btnquadrado'

const Articles1 = () => {
  return ( 
    <>
        <div className="artigo1">
              {/* <h1>Não é meu, e sim nosso!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Nullam tincidunt quam vitae sapien condimentum suscipit. 
                  Pellentesque porta sollicitudin eleifend. Donec ullamcorper, 
                  ex vitae egestas convallis, est justo accumsan magna, quis hendrerit diam urna at leo. 
                  Donec ac nibh ac dolor luctus blandit pretium at massa. In hac habitasse platea dictumst. 
                  Integer est enim, egestas euismod faucibus a, faucibus ac ante. Fusce a diam iaculis, 
                  dapibus eros eget, consequat lorem. Nunc ullamcorper nec nibh at accumsan. 
                  <BtnQuadrado/>
                </p> */}

            <div className="box-flex">
                <div id="">
                    <span>Primeiro Valor :</span>
                    <input type="text"/>
                </div>

                <div id="">
                    <span>Segundo Valor :</span>
                    <input type="text"/>
                </div>

                <div id="">
                    <textarea>

                    </textarea>
                </div>

                <div id="">
                    <input type="submit"/>
                </div>
            </div>    

        </div>
    </>
  )
}

export default Articles1;