import React from 'react';

import { 
  Wrapper,
  Body,
  Header,
  Img,
  Titulo,
  Corpo,
  Scroll,
  } from './styles';


import img1 from '../../../assets/logo.png';
import img2 from '../../../assets/UAINUTRI.png';

export default function Gotejamento(){
  return ( 
    <Body
    colors={['#008CBA','#258eb0']}
    start={[1,-0.1]}
    >
      <Wrapper>
        
          <Header>
            <Img source={img1}/>
            <Titulo source={img2}/>
          </Header>
      
        <Corpo>
          <Scroll>




            
          </Scroll>
        </Corpo>
      </Wrapper>
    </Body>
  );
}
