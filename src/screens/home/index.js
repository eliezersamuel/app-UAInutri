import React, {useState} from 'react';
import {KeyboardAvoidingView} from 'react-native'; 
import * as Animatable from 'react-native-animatable';

import { 
  Wrapper,
  Body,
  Header,
  Img,
  Titulo,
  Corpo,
  Scroll,
  BlocoSexoCorInputs,
  BlocoSexoCor,
  BlocoInputBotao,
  TextoSexoCor,
  Checkboxself,
  Label,
  BoxComponentes,
  RotuloFormularioLado,
  Rotulos,
  Formulario,
  Botao,
  RotuloBotao,
  } from './styles';

import {CheckBox} from 'react-native-elements';

import img1 from '../../../assets/logo.png';
import img2 from '../../../assets/UAINUTRI.png';

import Calcular from './Calcular';

export default function Home() {
  const [sexo, setSexo] = useState(false);
  const toggleSwitchSexo = () => setSexo(previousState => !previousState);

  const [cor, setCor] = useState(false);
  const toggleSwitchCor = () => setCor(previousState => !previousState);

  const [flag, setFlag] = useState(false);

  const [idade, setIdade] = useState(0);
  const [aj, setaj] = useState(0);
  const [cb, setcb] = useState(0);
  const [cp, setcp] = useState(0);

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

            <BlocoSexoCorInputs>
            <Animatable.View animation="slideInLeft" duration={1000}>
                <BlocoSexoCor>
                  <TextoSexoCor>Sexo: </TextoSexoCor>
                  <Checkboxself>
                    <Label>Homem</Label>
                    <CheckBox
                      checked={sexo}
                      checkedColor='white'
                      onIconPress={toggleSwitchSexo}
                      checkedIcon='check-square-o'
                      uncheckedIcon='square-o'
                    />
                    <Label>Mulher</Label>
                    <CheckBox
                      checked={!sexo}
                      checkedColor='white'
                      onIconPress={toggleSwitchSexo}
                      checkedIcon='check-square-o'
                      uncheckedIcon='square-o'
                    />
                  </Checkboxself>
                </BlocoSexoCor>

                <BlocoSexoCor>
                  <TextoSexoCor>Cor: </TextoSexoCor>
                  <Checkboxself>
                    <Label>Branco(a)</Label>
                      <CheckBox
                        checked={cor}
                        checkedColor='white'
                        onIconPress={toggleSwitchCor}
                        checkedIcon='check-square-o'
                        uncheckedIcon='square-o'
                      />
                      <Label>Preto(a)</Label>
                      <CheckBox
                        checked={!cor}
                        checkedColor='white'
                        onIconPress={toggleSwitchCor}
                        checkedIcon='check-square-o'
                        uncheckedIcon='square-o'
                      />
                  </Checkboxself>
              </BlocoSexoCor>
            </Animatable.View>
          </BlocoSexoCorInputs>

            <BlocoInputBotao>            
              <BoxComponentes>
                <KeyboardAvoidingView behavior='padding'>
                <Animatable.View animation="zoomIn" duration={1000}>

                <RotuloFormularioLado>
                <Rotulos>Idade: </Rotulos>
                <Formulario
                  placeholder='Idade'
                  returnKeyType='next'
                  placeholderTextColor='#B4BCC2'
                  textAlign={'center'}
                  selectTextOnFocus
                  keyboardType={'numeric'}
                  onChangeText={(valor) => setIdade(valor)}
                />
                </RotuloFormularioLado>

                <RotuloFormularioLado>
                <Rotulos>Aj: </Rotulos>
                <Formulario
                  placeholder='AJ'
                  returnKeyType='next'
                  placeholderTextColor='#B4BCC2'
                  textAlign={'center'}
                  selectTextOnFocus
                  keyboardType={'numeric'}
                  onChangeText={(valor) => setaj(valor)}
                />
                </RotuloFormularioLado>

                <RotuloFormularioLado>
                <Rotulos>Cb: </Rotulos>
                <Formulario
                  placeholder='CB'
                  returnKeyType='next'
                  placeholderTextColor='#B4BCC2'
                  textAlign={'center'}
                  selectTextOnFocus
                  keyboardType={'numeric'}
                  onChangeText={(valor) => setcb(valor)}
                />
                </RotuloFormularioLado>
                
                <RotuloFormularioLado>
                <Rotulos>Cp: </Rotulos>
                <Formulario
                  placeholder='CP'
                  returnKeyType='done'
                  placeholderTextColor='#B4BCC2'
                  textAlign={'center'}
                  selectTextOnFocus
                  keyboardType={'numeric'}
                  onChangeText={(valor) => setcp(valor)}
                />
                </RotuloFormularioLado>

                </Animatable.View>
                </KeyboardAvoidingView>
              </BoxComponentes>
              
              <Animatable.View animation="fadeIn" duration={1500}>
              <Botao 
                onPress={() => setFlag(true)}>
                <RotuloBotao>Calcular</RotuloBotao>
              </Botao>
              </Animatable.View>
              
              </BlocoInputBotao>

              { flag &&
              <Calcular sexo={sexo} cor={cor} idade={idade} aj={aj} cb={cb} /> 
              }

            </Scroll>
          </Corpo>
        </Wrapper>
      </Body>
    );
}
