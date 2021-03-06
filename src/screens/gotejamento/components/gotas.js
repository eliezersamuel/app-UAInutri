import React, {useState} from 'react';
import * as Animatable from 'react-native-animatable';
import {KeyboardAvoidingView} from 'react-native';

import { Tooltip } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';

import { 
    BlocoInputBotao,
    BoxComponentes,
    RotuloFormularioLado,
    Rotulos,
    Formulario,
    Botao,
    RotuloBotao,
    TextoTooltip,
    RespostaContainer,
    RespostaTexto,
    RespostaTextoResp,
    TextoRotuloResposta,
    } from './styles';


export default function Gotas() {
    const [gotasMin, setGotasMin] = useState(0);
    const [horas, setHoras] = useState(0);
    const [gotasMl, setGotasMl] = useState(0);
    const [flag, setFlag] = useState(false);

    return(

        <BlocoInputBotao>            
            <BoxComponentes>
            <KeyboardAvoidingView behavior='padding'>
            <Animatable.View animation="zoomIn" duration={1000}>
            <RotuloFormularioLado>
            <Rotulos> Gotas/Min: </Rotulos>
                <Tooltip popover={<TextoTooltip>Quantidade de Gotas em 1 minuto.</TextoTooltip>}>
                <Feather name="help-circle" size={18} color="white" />
                </Tooltip>
            <Formulario
                placeholder='Gotas/Min'
                returnKeyType='next'
                placeholderTextColor='#B4BCC2'
                textAlign={'center'}
                selectTextOnFocus
                keyboardType={'numeric'}
                onChangeText={(valor) => setGotasMin(valor)}
            />
            </RotuloFormularioLado>

            <RotuloFormularioLado>
            <Rotulos>Horas: </Rotulos>
                <Tooltip popover={<TextoTooltip>Horas</TextoTooltip>}>
                <Feather name="help-circle" size={18} color="white" />
                </Tooltip>
            <Formulario
                placeholder='Horas'
                returnKeyType='next'
                placeholderTextColor='#B4BCC2'
                textAlign={'center'}
                selectTextOnFocus
                keyboardType={'numeric'}
                onChangeText={(valor) => setHoras(valor)}
            />
            </RotuloFormularioLado>

            <RotuloFormularioLado>
            <Rotulos>Gotas em 1 Ml: </Rotulos>
                <Tooltip popover={<TextoTooltip>Digite a quantidade de gotas em 1 Ml.</TextoTooltip>}>
                <Feather name="help-circle" size={18} color="white" />
                </Tooltip>
            <Formulario
                placeholder='Gotas/ml'
                returnKeyType='next'
                placeholderTextColor='#B4BCC2'
                textAlign={'center'}
                selectTextOnFocus
                keyboardType={'numeric'}
                onChangeText={(valor) => setGotasMl(valor)}
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

            { flag && (
            <RespostaContainer>
                <RespostaTexto>Volume [ml/dia]: </RespostaTexto>  
                <RespostaTextoResp>{((gotasMin*60*horas)/gotasMl).toFixed(2)}</RespostaTextoResp>
                <TextoRotuloResposta>*Arredonda-se sempre para cima</TextoRotuloResposta>
            </RespostaContainer> 
            )
            }            
        </BlocoInputBotao>

    );
}