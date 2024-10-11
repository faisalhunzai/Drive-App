import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          source={require('../../Asset/Image/mapimage.jpg')}
          style={styles.backgroundImage}>
          <Image source={require('../../Asset/Image/profile.png')} />

          
        </ImageBackground>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems :'center',
    // justifyContent:'center'
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
