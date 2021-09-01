import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Páginas
import Home from '../Screens/Home/Home';

const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                />    
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default RootNavigation;