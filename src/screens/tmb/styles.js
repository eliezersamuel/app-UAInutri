import styled from 'styled-components/native';

import {LinearGradient} from 'expo-linear-gradient';

export const Wrapper = styled.SafeAreaView`
    margin-top:5px;
`;

export const Body = styled(LinearGradient)`
	flex: 1;
`;

export const Header = styled.View`
	flex-direction: row;
	align-items: center;
	padding: 8px;
	padding-bottom: 10px;
	margin-bottom: 10px;
	border-bottom-width: 6px;
	border-radius: 40px;
	border-color: 'rgba(248,248,255,0.6)';
`;

export const Img = styled.Image`
	width: 45px;
	height: 45px;
	resize-mode: stretch;
	margin-right: 25px;
`;

export const Titulo = styled.Image`
	width: 125px;
	height: 50px;
	resize-mode: stretch;
`;	

export const Corpo = styled.View`
	margin-top: 5px;
	align-items: center;
	flex-direction: column;
`;

export const Scroll = styled.ScrollView`
	width: 95%;
`;


export const BlocoSexoCor = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
	padding-left: 20px;
`;

export const BlocoSexoCorInputs = styled.View`
	
`;

export const TextoSexoCor = styled.Text`
	font-weight: bold;
	font-size: 16px;
	color: #fff;
`;

export const Checkboxself = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const Label = styled.Text`
	font-weight: bold;
	font-size: 16px;
	color: #fff;
	padding-left: 15px;	
`;

export const BlocoInputBotao = styled.View`
	width: 100%;
	height: 280px;
	margin-top: 5px;
	flex-direction:column;
	align-items: center;
	justify-content: center;
`;

export const BoxComponentes = styled.View`
	flex: 1;
	width: 75%;
	align-self: center;
	justify-content:center;
	margin-top: 8px;
`;

export const RotuloFormularioLado = styled.View`
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	margin-bottom: 15px;
`;

export const Rotulos = styled.Text`
	font-weight: bold;
	font-size: 18px;
	color: #fff;
	padding-left: 25px;	
`;

export const Formulario = styled.TextInput`
	height: 35px;
	width: 40%;
	align-self: center;
	border-color: transparent;
	border-width: 1px;
	border-radius: 6px;
	background-color: #fff;
`;

export const Botao = styled.TouchableOpacity`
	height: 40px;
    width: 150px;
    border-radius: 9px;
    border-width: 3px;
    border-color: #fff;
    background-color: transparent;
    align-items: center;
    justify-content: center;
`;

export const RotuloBotao = styled.Text`
	font-size: 16px;
    color: #fff;
    font-weight: bold;
`;

export const RespostaContainer = styled.View`
	align-self: center;
    padding: 20px;
    margin-top: 20px;
    background-color: transparent;
    align-content: center;
    align-items: center;
	justify-content: center;
`;

export const RespostaTexto = styled.Text`
	font-size: 16px;
    color: #fff;
    font-weight: bold;
`;

export const RespostaTextoResp = styled.Text`
	font-size: 20px;
	margin-top: 10px;
    color: #000;
    font-weight: bold;
`;

export const TextoRotuloResposta = styled.Text`
	font-size: 12px;
	margin-top: 5px;
	color: #fff; 
    font-weight: bold;
`;