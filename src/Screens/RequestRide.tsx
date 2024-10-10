import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Colors from '../component/Colors';

import RequestRideComponent from '../component/RequestRideFlow';

const RequestRideScreen = () => {

 
  
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
