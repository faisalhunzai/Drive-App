import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Colors from '../component/Colors';
import TextInputComponent from '../component/textInput';
import PhoneInput from 'react-native-phone-number-input';
import CustomButton from '../component/Button';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth'; 
import { SignInResponse} from '@react-native-google-signin/google-signin';
import { Icon } from '../component/Icon';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [formattedValue, setFormattedValue] = useState(''); 
    const navigation =useNavigation();
   
   
    useEffect(() =>{
        GoogleSignin.configure({
            webClientId: '506844250507-71lituq4mkj0p76shf1mmquhdfflplf7.apps.googleusercontent.com', 
        });
    }, []);


    async function onGoogleButtonPress() {
        try {
            
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            
            const {idToken}: SignInResponse = await GoogleSignin.signIn();
            
            
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            
           
            return auth().signInWithCredential(googleCredential);
        } catch (error) {
          navigation.navigate('HomeScreen')
           
        }
    }

   

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
              <Icon.Entypo name='paper-plane' size={40} color={Colors.white}/>
                <Text style={styles.logoText}>Drive</Text>
            </View>

            <View style={styles.card}>
                <View style={styles.tabContainer}>
                    <View style={styles.signText}>
                        <TouchableOpacity style={styles.activeTab}>
                            <Text style={styles.activeTabText}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.inactiveTab}>
                            <Text style={styles.inactiveTabText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>

                    <TextInputComponent
                        value={input}
                        onChangeText={setInput}
                        placeholder="name@example.com"
                        customStyle={styles.emailInput}
                    />

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

                    <CustomButton
                        title='Sign Up'
                        onPress={() => {}}
                        buttonStyle={styles.signButton}
                        textStyle={styles.signUpText}
                    />
                </View>
            </View>

            <View style={styles.buttonContanier}>
                <CustomButton
                    title='Connect with Google' 
                    onPress={onGoogleButtonPress}
                    iconName='facebook' 
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
        alignItems: 'center'
    },
    topSection: {
        width: '100%',
        height: '45%',
        backgroundColor: Colors.GoldenYellow,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection :'row',
        gap :20
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
        shadowOffset: { width: 0, height: 2 },
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
    signButton: {
        backgroundColor: Colors.GoldenYellow,
        marginTop: 40,
        padding: 13
    },
    signUpText: {
        color: Colors.white,
        fontWeight: '400',
        fontSize: 17
    },
    facebookButton: {
        padding: 14,
        backgroundColor: Colors.GoldenYellow
    },
    buttonContanier: {
        padding: 20,
        marginTop: 40
    },
    paraText: {
        fontSize: 13,
        fontWeight: '300',
        color: Colors.black
    }
});

export default SignUpScreen;
