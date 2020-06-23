import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import App from './src';

export default function Main (){
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#008CBA"/>
    <App />
    </>
  );
}