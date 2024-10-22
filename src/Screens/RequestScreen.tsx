import {
    Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Icon} from '../component/Icon';
import Colors from '../component/Colors';
import {useNavigation} from '@react-navigation/native';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import TextInputComponent from '../component/textInput';
import CustomButton from '../component/Button';


const RequestScreen = () => {
  const navigation = useNavigation();
  let actionSheet: ActionSheetRef | null = null;
  const [promoCode, setPromoCode] = useState('');
  useEffect(() => {
    actionSheet?.show();
  }, []);
  return (
    <ImageBackground
      source={require('../../Asset/Image/mapimage.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.back}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backIcon}>
            <Icon.AntDesign name="left" size={30} color={Colors.silver} />
          </TouchableOpacity>
        </View>
      </View>

      <ActionSheet ref={o => (actionSheet = o)}>
        <View style={styles.actionCard}>
          <Text style={styles.promoText}>Promm Code</Text>
          <Icon.AntDesign name="close" size={30} color={Colors.black} />
        </View>

        <View style={{backgroundColor :'white'}}>
            <View style={styles.card}>
                <View style={styles.inputCard}>
                <Image
                  source={require('../../Asset/Image/promo.png')}
                style={styles.promoImage}
                />

                <TextInputComponent
                placeholder='Input promo code'
                value={promoCode}
                onChangeText={setPromoCode}
                customStyle={styles.input}
                />
                </View>
            </View>
        </View>
        
        <View>
            <CustomButton
              title='Apply'
              onPress={() => navigation.navigate('DriverDetails')}
              buttonStyle={styles.button}
            />
        </View>
      </ActionSheet>
    </ImageBackground>
  );
};

export default RequestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backIcon: {
    width: 40,
    height: 40,
    backgroundColor: Colors.white,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  back: {
    padding: 20,
  },
  actionCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.Snow,
    padding :10
  },
  promoText: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 30,
  },
  promoImage:{

  },
  card:{
    flexDirection :'row',
    justifyContent :'space-around',
    alignItems :'center',
  
    padding :10,
    marginHorizontal: 30,
    marginBottom :20
  },
  input:{
    borderColor :Colors.white
  },
  inputCard:{
    width :'100%',
    flexDirection:'row',
    alignItems :'center',
    justifyContent :'space-around',
    borderRadius :10,
    backgroundColor :Colors.Snow,
    borderWidth :0.6
  },
  button:{
    backgroundColor :Colors.GoldenYellow,
    padding :10,
    borderRadius :5,
    margin :30,
    justifyContent :'center',
    alignItems :'center',
    marginTop :30
  }
});
