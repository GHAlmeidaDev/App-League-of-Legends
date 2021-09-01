
import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//Páginas
import Home from '../screens/Home';
import Summoners from '../screens/Summoners'

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 0, 0)',
  },
};

const { Navigator, Screen } = createStackNavigator()

export default function Navigation (): JSX.Element {
  return (
    <NavigationContainer >
      <Navigator theme={MyTheme}>
        <Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Screen name='Summoners' component={Summoners} options={{headerShown: false}}/>
      </Navigator>
    </NavigationContainer>
  )
}