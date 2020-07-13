import React, {useState} from 'react';
import { Picker } from '@react-native-community/picker';
import {ScrollView} from 'react-native';

import { 
  Wrapper,
  Body,
  Header,
  Img,
  Titulo,
  Corpo,
  SelectView,
  PickerLabel,
  PickerView,
  ComponentView,
  } from './styles';


import img1 from '../../../assets/logo.png';
import img2 from '../../../assets/UAINUTRI.png';

import Kcal from './components/kcal';
import Ml from './components/ml';
import Gotas from './components/gotas';

export default function Gotejamento(){
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
          <ScrollView>

            <SelectView>
              <PickerLabel>Selecione o tipo de Gotejamento: </PickerLabel>
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
                              <Picker.Item label="Kcal" value="b" />
                              <Picker.Item label="Ml" value="c" />
                              <Picker.Item label="Gotas por min" value="d" />
                  </Picker>
                </PickerView>
              </SelectView>

              <ComponentView>
                {pickValue === 'b' ? <Kcal/>  : <></>}
                {pickValue === 'c' ? <Ml/>  : <></>}
                {pickValue === 'd' ? <Gotas/>  : <></>}
              </ComponentView>

          </ScrollView>
        </Corpo>
      </Wrapper>
    </Body>
  );
}
