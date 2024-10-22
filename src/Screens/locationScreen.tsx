import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import TextInputComponent from '../component/textInput';
import Colors from '../component/Colors';
import { Icon } from '../component/Icon';
import CustomButton from '../component/Button';
import { useNavigation } from '@react-navigation/native';

const LocationScreen = () => {
    const [search, setSearch] =useState<string>('');
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../../Asset/Image/mapimage.jpg')} 
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.inputCard}>
            <Icon.AntDesign name='left' size={30} color={Colors.silver}/>
           <TextInputComponent
              placeholder='Islamabad high way, Pakistan'
              customStyle={styles.inputStyle}
              value={search}
              onChangeText={setSearch}
           />
           <TouchableOpacity>
           <Icon.AntDesign name='closecircle' size={30} color={Colors.silver}/>
           </TouchableOpacity>
        </View>

        <View>
            <CustomButton
              title='Apply Now'
              onPress={() =>navigation.navigate('RideDetailsScreen')}
              buttonStyle={styles.applyButton}
            />
        </View>
      </ImageBackground>
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
   
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    justifyContent :'space-between'
  },
  inputCard:{
    backgroundColor :Colors.white,
    margin :20,
    flexDirection :'row',
    justifyContent :'space-around',
    alignItems :'center',
    borderRadius :40
  },
  inputStyle:{
  borderColor :Colors.white
  },
  applyButton:{
    backgroundColor :Colors.GoldenYellow,
    padding :30
  }
});
