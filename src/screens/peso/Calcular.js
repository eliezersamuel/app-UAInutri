import React from 'react';

import { 
  RespostaContainer,
  RespostaTexto,
  RespostaTextoResp,
  } from './styles';

  export default function Calcular(props){
        let membro = props.membro;
        let peso = props.peso;

        let temp;
        let peso_corrigido;
      
        if(membro=="a"){temp=0;}
        if(membro=="b"){temp=50;}
        if(membro=="c"){temp=0.7;}
        if(membro=="d"){temp=2.3;}
        if(membro=="e"){temp=1.6;}
        if(membro=="f"){temp=2.7;}
        if(membro=="g"){temp=5;}
        if(membro=="h"){temp=1.5;}
        if(membro=="i"){temp=5.9;}
        if(membro=="j"){temp=10.1;}
        if(membro=="k"){temp=16;}

      
        peso_corrigido = peso*(100-temp)/100;
      
        return (
            <RespostaContainer>
              <RespostaTexto>Peso Corrigido(Kg): </RespostaTexto>  
              <RespostaTextoResp>{peso_corrigido.toFixed(2)}</RespostaTextoResp>
          </RespostaContainer>
          );

  }