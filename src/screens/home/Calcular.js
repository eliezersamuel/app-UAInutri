import React from 'react';

import { 
  RespostaContainer,
  RespostaTexto,
  RespostaTextoResp,
  } from './styles';

export default function Calcular(props){
    let sexo = props.sexo;
    let cor = props.cor;
    let idade = props.idade;
    let aj = props.aj;
    let cb = props.cb;

    let peso = 0;
    let tmb = 0;
    let altura = 0;
  
  if (sexo === false) {
    //peso
      if(idade>=19 && idade<=59 && cor===false){
        peso=(aj*1.24)+(cb*2.97)-82.48;
        }
        else if(idade>=60 && idade<=80 && cor===false){
        peso=(aj*1.5)+(cb*2.58)-84.22;
        }
        else if(idade>=19 && idade<=59 && cor===true){
        peso=(aj*1.01)+(cb*2.81)-66.04;
        }
        else if(idade>=60 && cor===true){
        peso=(aj*1.09)+(cb*2.68)-65.51;
        }
        else{
          peso = -1;
        }
  
    //altura
      if(idade>=6 && idade<=18 && cor===false){
        altura=46.59+(2.02*aj);
      }
      else if(idade>=19 && idade<=60 && cor===false){
        altura=68.10+(1.86*aj)-(0.06*idade);
      }
      else if(idade>60 && cor===false){
        altura=58.72+(1.96*aj);
      }
      else if(idade>=6 && idade<=18 && cor===true){
        altura=43.21+(2.14*aj);
      }
      else if(idade>=19 && idade<=60 && cor===true){
        altura=70.25+(1.87*aj)-(0.06*idade);
      }
      else if(idade>60 && cor===true){
        altura=75+(1.91*aj)-(0.17*idade);
      }
      else{
        altura=-1;
      }
    //TMB
      tmb=655.1+(9.563*peso)+(1.85*altura)-(4.676*idade);
  
    }
    if (sexo === true) {
    //peso
      if(idade>=19 && idade<=59 && cor===false){
        peso=(aj*1.19)+(cb*3.14)-83.72;
        }
        else if(idade>=60 && idade<=80 && cor===false){
        peso=(aj*0.44)+(cb*2.86)-39.21;
        }
        else if(idade>=19 && idade<=59 && cor===true){
        peso=(aj*1.19)+(cb*3.14)-86.82;
        }
        else if(idade>=60 && cor===true){
        peso=(aj*1.10)+(cb*3.07)-75.81;
        }
        else{
          peso = -1;
        }
    //altura
      if(idade>=6 && idade<=18 && cor===false){
        altura=39.6+(2.18*aj);
      }
      else if(idade>=19 && idade<=60 && cor===false){
        altura=73.42+(1.79*aj);
      }
      else if(idade>60 && cor===false){
        altura=95.79+(1.37*aj);
      }
      else if(idade>=6 && idade<=18 && cor===true){
        altura=40.54+(2.22*aj);
      }
      else if(idade>=19 && idade<=60 && cor===true){
        altura=71.85+(1.88*aj);
      }
      else if(idade>60 && cor===true){
        altura=59.01+(2.08*aj);
      }
      else{
        altura=-1;
      }
    //TMB
      tmb=66.5+(13.75*peso)+(5.003*altura)-(6.755*idade);
    }
  
    return (
      <RespostaContainer>
        <RespostaTexto>Peso (kg): </RespostaTexto>  
        <RespostaTextoResp>{peso.toFixed(2)}</RespostaTextoResp>

        <RespostaTexto>Altura (cm):  </RespostaTexto>  
        <RespostaTextoResp>{altura.toFixed(2)}</RespostaTextoResp>
        
        <RespostaTexto>TMB (Kcal):   </RespostaTexto> 
        <RespostaTextoResp>{tmb.toFixed(2)}</RespostaTextoResp>
    </RespostaContainer>
    );
  }