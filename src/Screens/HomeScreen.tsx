import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';
import Colors from '../component/Colors';
import { Icon } from '../component/Icon';
import CustomButton from '../component/Button';
import TextInputComponent from '../component/textInput';
import data from "../Utilities/cityName.json";
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  let actionSheet: ActionSheetRef | null = null;
  const [pickUpLocation, setPickUpLocation] = useState('');
  const navigation = useNavigation()

  useEffect(() => {
    actionSheet?.show();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          source={require('../../Asset/Image/mapimage.jpg')}
          style={styles.backgroundImage}
        >
          <Image source={require('../../Asset/Image/profile.png')} />

          <ActionSheet ref={o => (actionSheet = o)}>
            <View style={styles.actionSheetContent}>
              <View style={styles.sheetCard}>
                <View style={styles.card} />
                <View>
                  <Text style={styles.pickText}>Pick Up</Text>
                  <Text style={styles.loctionText}>MY current Location</Text>
                </View>
              </View>
              <View style={styles.divider} />

              <View style={styles.ActionsheetCard}>
                <Icon.Entypo
                  name="location-pin"
                  size={30}
                  color={Colors.black}
                />
                <View>
                  <Text style={styles.pickText}>DROP-OFF</Text>
                  <TextInputComponent
                    placeholder='Islamabad Highway, Pakistan'
                    value={pickUpLocation}
                    onChangeText={setPickUpLocation}
                    customStyle={styles.inputStyle}
                  />
                </View>
              </View>

              <View style={styles.loctionButtons}>
                <CustomButton
                  title='University of Islamabad'
                  onPress={() => navigation.navigate('locationScreen')}
                  textStyle={styles.uniText}
                  buttonStyle={styles.uniButton}
                />
                <CustomButton
                  title='F9 Park'
                  onPress={() => {}}
                  textStyle={styles.uniText}
                  buttonStyle={styles.uniButton}
                />
              </View>
              <View>
                <Text style={styles.popularText}>POPULAR LOCATIONS</Text>

                <View>
                  {data.map((city, index) => (
                    <View key={index} style={styles.cityContainer}>
                      <Image
                        source={{ uri: city.locationIcon }}
                        style={styles.cityImage}
                      />
                      <Text style={styles.cityName}>{city.text}</Text> 
                      <TouchableOpacity>
                      <Image
                        source={{ uri: city.starIcon}}
                        style={styles.cityImage}
                      />
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </ActionSheet>
        </ImageBackground>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  actionSheetContent: {
    padding: 20,
  },
  card: {
    width: 20,
    height: 20,
    backgroundColor: Colors.GoldenYellow,
    borderColor: Colors.LavenderGray,
    borderWidth: 2,
    borderRadius: 40,
  },
  sheetCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  ActionsheetCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
    marginTop: 10,
  },
  pickText: {
    color: Colors.black,
    fontSize: 12,
    fontWeight: '300',
  },
  loctionText: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: '400',
  },
  divider: {
    height: 1,
    backgroundColor: Colors.lightgray,
    width: '100%',
  },
  loctionButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  uniText: {
    color: Colors.black,
  },
  uniButton: {
    backgroundColor: Colors.white,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  inputStyle: {
    borderColor: Colors.white,
    color: Colors.black,
  },
  popularText: {
    color: Colors.black,
    fontSize: 12,
    fontWeight: '300',
    marginTop: 30,
  },
  cityContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent :'space-between',
    marginTop :20
  },
  cityImage: {
    width: 20,
    height: 20,
    borderRadius: 20,
    marginRight: 10,
  },
  cityName: {
    color: Colors.black,
    fontSize: 17,
    fontWeight :'400'
  },
});
