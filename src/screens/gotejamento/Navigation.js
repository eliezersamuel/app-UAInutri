import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Gotas from './screens/gotas';
import Kcal from './screens/kcal';
import Ml from './screens/ml';

const Stack = createStackNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Kcal" component={Kcal}/>
                <Stack.Screen name="Gotas" component={Gotas}/>
                <Stack.Screen name="Ml" component={Ml}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}