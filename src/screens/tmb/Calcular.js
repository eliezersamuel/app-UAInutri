import React from 'react';

import { 
  RespostaContainer,
  RespostaTexto,
  RespostaTextoResp,
  TextoRotuloResposta,
  } from './styles';

  export default function Calcular(props){
        let genero = props.sexo;
        let idade = props.idade;
        let altura = props.altura;
        let peso = props.peso;
        let tmb = 0;
      
        if(genero===true){
          tmb=66.5+(13.75*peso)+(5.003*altura)-(6.755*idade);
        }
        if (genero===false) {
          tmb=655.1+(9.563*peso)+(1.85*altura)-(4.676*idade);
        }

      
        return (
            <RespostaContainer>
              <RespostaTexto>TMB(Kcal): </RespostaTexto>  
              <RespostaTextoResp>{tmb.toFixed(3)}</RespostaTextoResp>
              <TextoRotuloResposta>*Método utilizado é o de Harris-Benedict</TextoRotuloResposta>
          </RespostaContainer>
          );

  }