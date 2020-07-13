import styled from 'styled-components/native';

export const BlocoInputBotao = styled.View`
	width: 100%;
	flex-direction:column;
	align-items: center;
	justify-content: center;
	margin-top: 5px;
`;

export const BoxComponentes = styled.View`
	align-self: center;
	justify-content:center;
	margin-bottom: 8px;
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

export const TextoTooltip = styled.Text`
	font-size: 14px;
	color: #fff;
	font-weight: bold;
`;