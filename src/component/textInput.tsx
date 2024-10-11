import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import Colors from './Colors';

interface TextInputComponentProps {
  customStyle?: object; 
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const TextInputComponent: React.FC<TextInputComponentProps> = ({
  customStyle,
  value,
  onChangeText,
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, customStyle]} 
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={Colors.black}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: Colors.lightgray,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default TextInputComponent;
