// CustomButton.tsx

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface CustomButtonProps {
  title: string;                     
  onPress: () => void;              
  buttonStyle?: ViewStyle;           
  textStyle?: TextStyle;             
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',      
    padding: 10,                    
    borderRadius: 5,                 
    alignItems: 'center',           
  },
  text: {
    color: '#FFFFFF',                 
    fontSize: 16,                    
    fontWeight: 'bold',              
  },
});

export default CustomButton;
