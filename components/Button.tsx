import React from 'react';
import { View } from 'react-native';

import { Button, Center, NativeBaseProvider } from "native-base"

interface Props {
  onPress: () => void;
  name?:String;
  color?: String;
  style?: any;
}

const ButtonComponent: React.FC<Props> = ({
  onPress,
  name,
  color,
  style
}) => {
  return (
     <Button onPress={onPress} colorScheme={color} style={{style}}>{name}</Button>
  );
}

export default ButtonComponent;