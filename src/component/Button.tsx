import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import Colors from './Colors';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  iconName?: string;              
  iconSize?: number;              
  iconColor?: string;             
  iconPosition?: 'left' | 'right'; 
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
  iconName,
  iconSize = 20,           
  iconColor = '#FFFFFF',  
  iconPosition = 'left',   
}) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <View style={styles.content}>
        {iconName && iconPosition === 'left' && (
          <Icon name={iconName} size={iconSize} color={iconColor} style={styles.iconLeft} />
        )}
        <Text style={[styles.text, textStyle]}>{title}</Text>
        {iconName && iconPosition === 'right' && (
          <Icon name={iconName} size={iconSize} color={iconColor} style={styles.iconRight} />
        )}
      </View>
 
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconLeft: {
    marginRight: 8, 
  },
  iconRight: {
    marginLeft: 8,
  },
});

export default CustomButton;
