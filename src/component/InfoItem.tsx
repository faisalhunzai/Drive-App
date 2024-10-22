import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from '../component/Icon';
import Colors from '../component/Colors';

interface InfoItemProps {
  title: string;
  onPress?: () => void;
}

const InfoItem: React.FC<InfoItemProps> = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
      <Icon.AntDesign name="right" size={20} color={Colors.lightgray} />
    </View>
  );
};

export default InfoItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: Colors.white,
  },
  text: {
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 19.92,
    color: Colors.black,
  },
});
