import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react'; // Import useState
import Colors from '../component/Colors';
import HrLine from '../component/hrLine';
import CustomButton from '../component/Button';
import { useNavigation } from '@react-navigation/native';
import RequestRideComponent from '../component/RequestRideFlow';

const RequestRideScreen = () => {

  const navigation = useNavigation();
  
  const [currentButton, setCurrentButton] = useState<number>(1);

  const handleFirstPress = () => {
    setCurrentButton(2); 
  };

  const handleSecondPress = () => {
    setCurrentButton(3); 
  };


  return (
    <View style={styles.container}>
     
     <RequestRideComponent 
        currentButton={currentButton} 
        handleFirstPress={handleFirstPress} 
      />  
      
    </View>
  );
};

export default RequestRideScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 20,
  },
});
