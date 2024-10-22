import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../component/Colors';
import {Icon} from '../component/Icon';
import {useNavigation} from '@react-navigation/native';

const ChooseVehicleTypeScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../Asset/Image/mapimage.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={{padding: 20}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.leftButton}>
            <Icon.AntDesign name="left" size={30} color={Colors.lightgray} />
          </TouchableOpacity>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.vehicleDetails}>
            <Image
              source={require('../../Asset/Image/car.png')}
              style={styles.vehicleImage}
            />
            <View>
              <Text style={styles.vehicleText}>Just go</Text>
              <Text style={styles.nearbyText}>Nearby you</Text>
            </View>
            <View>
              <Text style={styles.priceText}>PKR 250</Text>
              <Text style={styles.timeText}>2 min</Text>
            </View>
          </View>

          <View style={styles.paymentOptions}>
            <TouchableOpacity style={styles.optionButton}>
              <AntDesign name="creditcard" size={20} color="gray" />
              <Text style={styles.optionText}>Payment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <AntDesign name="tags" size={20} color="gray" />
              <Text style={styles.optionText}>Promo code</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Icon.AntDesign name="ellipsis1" size={20} color={Colors.gray} />
              <Text style={styles.optionText}>Options</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('RequestScreen')} style={styles.requestButton}>
            <Text style={styles.requestButtonText}>Request</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  map: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  detailsContainer: {
    bottom: 0,
    width: '100%',
    backgroundColor: Colors.Snow,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
  },
  leftButton: {
    backgroundColor: Colors.white,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vehicleDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor :Colors.Snow
  },
  vehicleImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  vehicleText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black,
  },
  nearbyText: {
    fontSize: 12,
    color: Colors.gray,
  },
  priceText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black,
  },
  timeText: {
    fontSize: 12,
    color: Colors.gray,
  },
  paymentOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
    marginTop :20
  },
  optionButton: {
    alignItems: 'center',
  },
  optionText: {
    fontSize: 12,
    color: Colors.gray,
  },
  requestButton: {
    backgroundColor: Colors.GoldenYellow,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop :20
  },
  requestButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChooseVehicleTypeScreen;
