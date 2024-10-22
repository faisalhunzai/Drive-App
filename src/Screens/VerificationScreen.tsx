import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Colors from '../component/Colors';
import {Icon} from '../component/Icon';
import {panHandlerName} from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';
import {GestureHandlerRootView, TextInput} from 'react-native-gesture-handler';
import CustomButton from '../component/Button';
import { useNavigation } from '@react-navigation/native';

const VerificationScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '',]);
  const navigation = useNavigation();

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs[index + 1].focus();
    }
  };

  const inputRefs: any = [];

  return (
    <GestureHandlerRootView>
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Icon.AntDesign name="left" size={30} color={Colors.white} />
        </TouchableOpacity>

        <Text style={styles.phoneText}>Phone Verification</Text>

        <Text style={styles.enterText}>Enter your OTP code here</Text>
      </View>

      <View style={styles.inputcontainer}>
        {otp.map((_, index) => (
          <TextInput
            key={index}
            value={otp[index]}
            onChangeText={value => handleChange(value, index)}
            style={styles.input}
            keyboardType="number-pad"
            maxLength={1}
            ref={ref => (inputRefs[index] = ref)}
          />
        ))}
      </View>

      <View>
        <CustomButton
          title='Verify Now'
          onPress={()=>{}}
          buttonStyle={styles.verifyButton}
         />
      </View>
    </View>
    </GestureHandlerRootView>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
  card: {
    width: 375,
    height: 195,
    backgroundColor: Colors.GoldenYellow,
    padding: 20,
  },
  phoneText: {
    fontWeight: '400',
    fontSize: 34,
    lineHeight: 41,
    letterSpacing: 0.41,
    color: Colors.white,
    marginTop: 20,
  },
  enterText: {
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 19.92,
    marginTop: 10,
  },
  input: {
    borderBottomWidth: 2,
    borderColor: '#d3d3d3',
    textAlign: 'center',
    fontSize: 18,
    padding: 10,
    width: 40,
    color :Colors.black
  },
  inputcontainer:{
        flexDirection:'row',
        gap :20,
        marginLeft :60,
        marginTop :40
  },
  verifyButton:{
    backgroundColor :Colors.GoldenYellow,
    padding :14,
    marginTop :50,
    margin :40
  }
});
