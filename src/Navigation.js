import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

import HomeScreen from './screens/home';
import gotejamentoScreen from './screens/gotejamento';
import pesoScreen from './screens/peso';
import tmbScreen from './screens/tmb';

const Tab = createBottomTabNavigator();

const icons = {
    Home:{
        lib: AntDesign,
        name: 'home',
    },
    Tmb:{
        lib: AntDesign,
        name: 'calculator',
    },
    Peso:{
        lib: MaterialCommunityIcons,
        name: 'scale',
    },
    Gotejamento:{
        lib: FontAwesome5,
        name: 'syringe',
    },
};

export default function Navigation () {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route })=>({
            tabBarIcon: ({color, size }) => {
                const { lib: Icon, name} = icons [route.name];
                return <Icon name={name} size={size} color={color}/>
            },
        })}

        tabBarOptions={{
            labelStyle:{
                fontWeight: 'bold',
                fontSize: 12,
            },
            style:{
                backgroundColor: '#F8F8FF',
                borderTopColor: 'rgba(248,248,255,0.2)',
            },
            activeTintColor: '#008cba',
            inactiveTintColor: '#92929c'
        }}
      >
        <Tab.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
                title: 'Início',
            }}
        />
        <Tab.Screen 
            name="Tmb" 
            component={tmbScreen}
            options={{
                title: 'TMB',
            }}
            />
        <Tab.Screen 
            name="Peso" 
            component={pesoScreen}
            options={{
                title: 'Peso',
            }}
            />
        <Tab.Screen 
            name="Gotejamento" 
            component={gotejamentoScreen}
            options={{
                title: 'Gotejamento',
            }}
            />
      </Tab.Navigator>
  );
}

 