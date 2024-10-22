import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../component/Colors';
import {Icon} from '../component/Icon';
import {useNavigation} from '@react-navigation/native';
import InfoItem from '../component/InfoItem';

const SettingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon.AntDesign name="left" size={30} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.setingText}>Settings</Text>
      </View>

      <View style={styles.profileCard}>
        <View style={styles.flexCard}>
          <Image source={require('../../Asset/Image/profile.png')} />
          <View>
            <Text style={styles.nameText}>Aly Khan</Text>
            <Text style={styles.text}>Glod Member</Text>
          </View>
          <Icon.AntDesign name="right" size={20} color={Colors.lightgray} />
        </View>
      </View>

      <View style={styles.card2}>
        <InfoItem title="  Notifications" />

        <InfoItem title="Security" />
        <InfoItem title="Language" />
      </View>

      <View style={styles.card2}>
        <InfoItem title="Clear cache " />

        <InfoItem title="Term & Privacy Policy" />
        <InfoItem title="Contact Us" />
      </View>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightgray,
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
