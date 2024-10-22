import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../component/Colors';
import {Icon} from '../component/Icon';
import {useNavigation} from '@react-navigation/native';
import InfoItem from '../component/InfoItem';

const AccountScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon.AntDesign name="left" size={30} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.setingText}>My Account</Text>
      </View>

      <View style={styles.card2}>
        <InfoItem title="Level" />
      </View>

      <View style={styles.card2}>
        <InfoItem title="Name" />

        <InfoItem title="Email" />
        <InfoItem title="Gender" />
        <InfoItem title="Brithday" />
        <InfoItem title="Phone Number" />
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: Colors.GoldenYellow,
    padding: 20,
  },
  setingText: {
    fontSize: 30,
    fontWeight: '400',
    color: Colors.white,
    marginTop: 20,
  },
  profileCard: {
    backgroundColor: Colors.white,
    marginTop: 20,
  },
  flexCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  nameText: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.black,
  },
  text: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: '200',
  },    
  card2: {
    backgroundColor: Colors.white,
    marginTop: 20,
  },
 
});
