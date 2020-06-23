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

export const Scroll = styled.ScrollView``;
