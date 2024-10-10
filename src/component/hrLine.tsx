import { StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import Colors from './Colors';

interface HrLineProps {
  style?: ViewStyle; 
  height?: number; 
  width?: number; 
  color?: string;
}

const HrLine: React.FC<HrLineProps> = ({
  style,
  height = 15, 
  width = 30, 
  color = Colors.GoldenYellow, 
}) => {
  return (
    <View style={[styles.hrLine, style, { height, width, backgroundColor: color }]} />
  );
};

export default HrLine;

const styles = StyleSheet.create({
  hrLine: {
   
    marginVertical: 5, 
  },
});
