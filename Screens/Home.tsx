import React from "react";
import { Input, Center, NativeBaseProvider, extendTheme , Box} from "native-base";

import {View} from 'react-native';

import Button from '../components/Button'



export const Home = () => {
   
  return (
  
    <Input
      w="90%"
      mx={3}
      placeholder="Digite o nome do invocador"
      _light={{
        placeholderTextColor: "blueGray.400",
      }}
      _dark={{
        placeholderTextColor: "blueGray.50",
      }}
    />
    
    
  )
}

export default ({ navigation }: { navigation: any }) => {
 const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: '#E3F2F9',
        100: '#C5E4F3',
        200: '#A2D4EC',
        300: '#7AC1E4',
        400: '#47A9DA',
        500: '#0088CC',
        600: '#007AB8',
        700: '#006BA1',
        800: '#005885',
        900: '#003F5E',
      },
    }
   });

  return (
    
    <NativeBaseProvider theme={theme}>
       
          <Center  bg="primary.100" flex={1}>
            <Home />
            <View style={{paddingTop:20}}>
              <Button 
                name="Buscar" 
                onPress={() => navigation.navigate('Summoners')} 
                color={'green'}>
              </Button>
            </View>
        
        </Center>
    
    </NativeBaseProvider>
   
  )
}

