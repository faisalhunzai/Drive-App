import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Button,
} from 'react-native';
import Colors from '../component/Colors';
import TextInputComponent from '../component/textInput';
import PhoneInput from 'react-native-phone-number-input';
import CustomButton from '../component/Button';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {Icon} from '../component/Icon';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [formattedValue, setFormattedValue] = useState<string>('');
  const [confirm, setConfirm] =
    useState<FirebaseAuthTypes.ConfirmationResult | null>(null);
  const [code, setCode] = useState<string>('');
  const [isSignUpMode, setIsSignUpMode] = useState<boolean>(true);
  const navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '952004549637-s34itjruhi6vcidb1isfgs7hmqg813i2.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      Alert.alert('Success', 'Google Sign-In successful!');
    } catch (error) {
      console.error('Google Sign-In Error: ', error);
      navigation.navigate('HomeScreen');
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        Alert.alert('Success', 'You are now logged in!');
      }
    });
    return subscriber;
  }, []);

  async function signInWithPhoneNumber(phoneNumber: string) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      Alert.alert('Success', 'OTP sent successfully!');
    } catch (error) {
      console.error('Phone Sign-In Error: ', error);
      Alert.alert('Error', 'Failed to send OTP. Please try again.');
    }
  }

  async function confirmCode() {
    try {
      if (confirm) {
        await confirm.confirm(code);
        Alert.alert('Success', 'Phone number verified successfully!');
      } else {
        Alert.alert('Error', 'Please request a new code.');
      }
    } catch (error) {
      console.error('Invalid code error: ', error);
      Alert.alert('Error', 'Invalid code. Please try again.');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Icon.Entypo name="paper-plane" size={40} color={Colors.white} />
        <Text style={styles.logoText}>Drive</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.tabContainer}>
          <View style={styles.signText}>
            <TouchableOpacity
              style={isSignUpMode ? styles.activeTab : styles.inactiveTab}
              onPress={() => setIsSignUpMode(true)}>
              <Text
                style={
                  isSignUpMode ? styles.activeTabText : styles.inactiveTabText
                }>
                Sign Up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={!isSignUpMode ? styles.activeTab : styles.inactiveTab}
              onPress={() => setIsSignUpMode(false)}>
              <Text
                style={
                  !isSignUpMode ? styles.activeTabText : styles.inactiveTabText
                }>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>

          {isSignUpMode ? (
            <TextInputComponent
              value={input}
              onChangeText={setInput}
              placeholder="name@example.com"
              customStyle={styles.emailInput}
            />
          ) : (
            <PhoneInput
              defaultValue={phoneNumber}
              defaultCode="US"
              onChangeFormattedText={setFormattedValue}
              onChangeText={setPhoneNumber}
              containerStyle={styles.phoneContainer}
              textContainerStyle={styles.textContainer}
              textInputStyle={styles.textInput}
              placeholder="Mobile Number"
            />
          )}

          <PhoneInput
            defaultValue={phoneNumber}
            defaultCode="US"
            onChangeFormattedText={setFormattedValue}
            onChangeText={setPhoneNumber}
            containerStyle={styles.phoneContainer}
            textContainerStyle={styles.textContainer}
            textInputStyle={styles.textInput}
            placeholder="Mobile Number"
          />
          <TextInputComponent
            placeholder="Enter OTP"
            value={code}
            onChangeText={setCode}
            customStyle={styles.otpInput}
          />
          <CustomButton title="Sign Up" onPress={confirmCode} buttonStyle={styles.signUpButton} />

          {!confirm && !isSignUpMode && (
            <CustomButton
              title="Next"
              onPress={async () => {
                try {
                  await signInWithPhoneNumber(formattedValue);
                  navigation.navigate("VerificationScreen");
                } catch (error) {
                  console.error("Error signing in with phone number", error);
                 
                }
              }}
              buttonStyle={styles.nextButton}
            />
          )}
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          title="Connect with Google"
          onPress={onGoogleButtonPress}
          iconName="google"
          buttonStyle={styles.facebookButton}
        />
        <Text style={styles.paraText}>
          By clicking start, you agree to our Terms and Conditions.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topSection: {
    width: '100%',
    height: '45%',
    backgroundColor: Colors.GoldenYellow,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
  },
  logoText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.white,
  },
  card: {
    backgroundColor: Colors.white,
    marginTop: -50,
    marginHorizontal: 20,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  tabContainer: {
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  activeTab: {
    alignItems: 'center',
  },
  inactiveTab: {
    alignItems: 'center',
  },
  activeTabText: {
    fontSize: 18,
    color: Colors.black,
  },
  inactiveTabText: {
    fontSize: 18,
    fontWeight: '300',
    color: Colors.black,
  },
  signText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  emailInput: {
    color: Colors.black,
  },
  phoneContainer: {
    borderRadius: 5,
    height: 40,
    borderColor: Colors.lightgray,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  textContainer: {
    backgroundColor: Colors.white,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderRadius: 10,
  },
  textInput: {
    fontSize: 16,
    color: Colors.black,
  },
  otpInput: {
    borderBottomWidth: 1,
    borderColor: Colors.lightgray,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'black',
  },
  facebookButton: {
    padding: 14,
    backgroundColor: Colors.GoldenYellow,
  },
  buttonContainer: {
    padding: 20,
    marginTop: 40,
  },
  paraText: {
    fontSize: 13,
    fontWeight: '300',
    color: Colors.black,
  },
  nextButton:{
    backgroundColor :Colors.GoldenYellow
  },
  signUpButton:{
    backgroundColor:Colors.GoldenYellow
  }
});

export default SignUpScreen;
