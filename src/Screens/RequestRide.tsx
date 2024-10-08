import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react'; // Import useState
import Colors from '../component/Colors';
import HrLine from '../component/hrLine';
import CustomButton from '../component/Button';
import { useNavigation } from '@react-navigation/native';

const RequestRideScreen = () => {

  const navigation = useNavigation();
  
  const [currentButton, setCurrentButton] = useState(1);

  const handleFirstPress = () => {
    setCurrentButton(2); 
  };

  const handleSecondPress = () => {
    setCurrentButton(3); 
  };


  return (
    <View style={styles.container}>
     
      {currentButton === 1 && (
        <TouchableOpacity onPress={handleFirstPress}>
          <View>
            <Image
              source={require('../../Asset/Image/Page1.png')}
              style={styles.requestImage}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.requestRideText}>Request Ride</Text>
            <Text style={styles.paraText}>
              Request a ride, get picked up by a{'\n'}nearby community driver
            </Text>
          </View>
          <View style={styles.lineCenter}>
            <View style={styles.lineContainer}>
              <HrLine width={40} height={10} color={Colors.GoldenYellow} />
              <HrLine width={40} height={10} color={Colors.LavenderGray} />
              <HrLine width={40} height={10} color={Colors.LavenderGray} />
            </View>
          </View>
        </TouchableOpacity>
      )}

    
      {currentButton === 2 && (
        <TouchableOpacity onPress={handleSecondPress}>
          <View>
            <Image
              source={require('../../Asset/Image/Page2.png')}
              style={styles.requestImage}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.requestRideText}>Confirm Your Driver</Text>
            <Text style={styles.paraText}>
            Huge drivers network helps you find{'\n'} comforable, safe and cheap ride
            </Text>
          </View>
          <View style={styles.lineCenter}>
            <View style={styles.lineContainer}>
              <HrLine width={40} height={10} color={Colors.LavenderGray} />
              <HrLine width={40} height={10} color={Colors.GoldenYellow} />
              <HrLine width={40} height={10} color={Colors.LavenderGray} />
            </View>
          </View>
        </TouchableOpacity>
      )}

      
      {currentButton === 3 && (
        <View>
          <View>
            <Image
              source={require('../../Asset/Image/Page3.png')}
              style={styles.requestImage}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.requestRideText}>Track Your ride</Text>
            <Text style={styles.paraText}>
            Know your driver in advance and be{'\n'}able to view current location in real{'\n'}time on the map
            </Text>
          </View>
          <View>
            <CustomButton
             title='GET STARTED!'
             onPress={() => navigation.navigate('GpsScreen')}
             buttonStyle={styles.startButton}
             textStyle={styles.startButtonText}
            />
          </View>
          <View style={styles.lineCenter}>
            <View style={styles.lineContainer}>
              <HrLine width={40} height={10} color={Colors.LavenderGray} />
              <HrLine width={40} height={10} color={Colors.LavenderGray} />
              <HrLine width={40} height={10} color={Colors.GoldenYellow} />
            </View>
          </View>
        </View>
      )}
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
  requestImage: {
    width: 278,
    height: 278,
  },
  requestRideText: {
    fontWeight: '400',
    fontSize: 30,
    color: Colors.black,
    marginTop: 30,
    marginBottom: 10,
  },
  paraText: {
    fontWeight: '300',
    fontSize: 17,
    color: Colors.black,
    textAlign: 'center',
    marginTop: 20,
  },
  textContainer: {
    alignItems: 'center',
  },
  lineContainer: {
    flexDirection: 'row',
    marginTop: 70,
  },
  lineCenter :{
    alignItems :'center'
  },
  startButton:{
    backgroundColor :Colors.GoldenYellow,
    margin :30,
    
  },
  startButtonText :{
    fontWeight :"300",
    fontSize :17,
    color :Colors.white
  }
});
