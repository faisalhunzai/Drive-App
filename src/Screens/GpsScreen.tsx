import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Colors from '../component/Colors';
import CustomButton from '../component/Button';
import { Icon } from '../component/Icon';

const GpsScreen = () => {
 

  return (
    <View style={styles.container}>
      <Image
        source={require('../../Asset/Image/gpsimage.png')}
        style={styles.gpsImage}
      />
      <View style={styles.gpsTextCard}>
        <Text style={styles.titleText}>Hi, nice to meet you!</Text>
        <Text style={styles.paraText}>Choose your location to start finding{'\n'}restaurants around you.</Text>
      </View>
       
       <View>
         <TouchableOpacity style={styles.locationButton}>
            <Icon.Entypo name="paper-plane" size={30} color='rgba(240, 196, 20, 1)'/> 
            <Text style={styles.locationButtonText}>Use Current Loction</Text>
         </TouchableOpacity>
       </View>

       <TouchableOpacity>
        <Text style={styles.text}>Select it manually</Text>
        <View style={styles.line} />
       </TouchableOpacity>
    
    </View>
  );
};

export default GpsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontWeight: '400',
    fontSize: 32,
    lineHeight: 40, 
    color: Colors.black,
    textAlign: 'center',
  },
  paraText: {
    fontWeight: '300',
    fontSize: 17,
    lineHeight: 19.92, 
    color: Colors.black,
    textAlign: 'center',
    marginTop :30 
  },
  gpsImage: {
    width: 397, 
    height: 200, 
    marginBottom: 20, 
  },
  gpsTextCard: {
    alignItems: 'center',
    padding :30
  },
  locationButton:{
    borderColor :Colors.GoldenYellow,
    borderWidth :2,
    width : 304,
    height :50, 
    borderRadius: 5,
    marginTop: 30,
    justifyContent :'center',
    alignItems :'center',
    flexDirection :'row'
  },
  locationButtonText :{
     color :Colors.GoldenYellow
  },
  text :{
    fontWeight :'300',
    fontSize :17,
    color :Colors.black
  },
  line :{
    width  :133,
    height:1,
    backgroundColor :Colors.black
  }
});
