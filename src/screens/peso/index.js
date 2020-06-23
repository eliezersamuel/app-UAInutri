import React, {useState} from 'react';
import {Picker} from '@react-native-community/picker';
import * as Animatable from 'react-native-animatable';

import { 
  Wrapper,
  Body,
  Header,
  Img,
  Titulo,
  Corpo,
  Scroll,
  OpcoeseBotao,
  PesoAntes,
  MembroAmputado,
  Rotulo,
  Input,
  PickerView,
  Botao,
  TextoBotao,

  } from './styles';


import img1 from '../../../assets/logo.png';
import img2 from '../../../assets/UAINUTRI.png';

import Calcular from './Calcular';

export default function Peso(){

  const [peso, setPeso] = useState(0);
  const [pickValue, setPickValue] = useState("a");
  const [flag, setFlag] = useState(false);

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

            <OpcoeseBotao>
            <Animatable.View animation="slideInLeft" duration={1000}>
              <PesoAntes>
                <Rotulo>
                  Peso antes da amputação (kg):
                </Rotulo>
                <Input
                  placeholder="Peso (Kg)"
                  placeholderTextColor="#B4BCC2"
                  selectTextOnFocus
                  textAlign={'center'}
                  keyboardType={'numeric'}
                  onChangeText={(valor) => setPeso(valor)}
                />
              </PesoAntes>
              <MembroAmputado>
                <Rotulo>
                   Selecione o membro amputado:
                </Rotulo>

                <PickerView>

                  <Picker
                    style={{
                      alignSelf: 'center',
                      mode: 'dropdown',
                      width: '80%',
                      height: 40,
                      marginBottom: 20,
                      backgroundColor: '#fff',
                      color: '#008CBA',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      borderRadius: 50,
                    }}

                    selectedValue={pickValue}
                    onValueChange={(itemValue, itemIndex) => setPickValue(itemValue)}>
                          <Picker.Item label="..." value="a" />
                          <Picker.Item label="Tronco sem membros" value="b" />
                          <Picker.Item label="Mão" value="c" />
                          <Picker.Item label="Antebraço com mão" value="d" />
                          <Picker.Item label="Antebraço sem mão" value="e" />
                          <Picker.Item label="Parte superior do braço" value="f" />
                          <Picker.Item label="Braço inteiro" value="g" />
                          <Picker.Item label="Pé" value="h" />
                          <Picker.Item label="Perna abaixo do joelho com pé" value="i" />
                          <Picker.Item label="Coxa" value="j" />
                          <Picker.Item label="Perna Inteira" value="k" />
                  </Picker>

                </PickerView>

              </MembroAmputado>
              </Animatable.View>

              <Animatable.View animation="fadeIn" duration={1500}>
              <Botao onPress={() => setFlag(true)}>
                <TextoBotao>
                    Calcular
                </TextoBotao>
              </Botao>
              </Animatable.View>
            </OpcoeseBotao>

            { flag &&
              <Calcular membro={pickValue} peso={peso} /> 
            }

          </Scroll>
        </Corpo>
      </Wrapper>
    </Body>
  );
}
