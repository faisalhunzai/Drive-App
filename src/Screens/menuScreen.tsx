import React, {useRef, useState} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import Colors from '../component/Colors';
import {Image} from 'react-native';
import {Icon} from '../component/Icon';
import { useNavigation } from '@react-navigation/native';

const menuScreen = () => {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const [drawerPosition, setDrawerPosition] = useState<'left' | 'right'>(
    'left',
  );
  const navigation = useNavigation();
  const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
    } else {
      setDrawerPosition('left');
    }
  };

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <View style={styles.card}>
        <View style={styles.profileCard}>
            <TouchableOpacity onPress={() => navigation.navigate('AccountScreen')}>
          <Image
            source={require('../../Asset/Image/profile.png')}
            style={styles.profileImage}
          />
          </TouchableOpacity>
          <Text style={styles.nameText}>Aly Khan</Text>
          <View style={styles.textCard}>
            <Text style={styles.cashText}>Cash </Text>
            <Text style={styles.priceText}>2500</Text>
            <TouchableOpacity style={styles.leftButton}>
              <Icon.AntDesign name="left" size={20} color={Colors.white} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.iconCard}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.iconButton}>
          <Icon.AntDesign name="home" size={30} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.homeText}>Home</Text>
      </View>

      <View style={styles.iconCard}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon.Entypo name="wallet" size={30} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.homeText}>My wallet</Text>
      </View>

      <View style={styles.iconCard}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon.FontAwesome name="history" size={30} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.homeText}>History</Text>
      </View>

      <View style={styles.iconCard}>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('NotificationsScreen')}>
          <Icon.AntDesign name="notification" size={30} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.homeText}>Notification</Text>
      </View>

      <View style={styles.iconCard}>
        <TouchableOpacity onPress={() => navigation.navigate('RatingScreen')} style={styles.iconButton}>
          <Icon.AntDesign name="gift" size={30} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.homeText}>Gift</Text>
      </View>
      <View style={styles.iconCard}>
        <TouchableOpacity onPress={() => navigation.navigate('SettingScreen')} style={styles.iconButton}>
          <Icon.AntDesign name="setting" size={30} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.homeText}>Setting</Text>
      </View>
      <View style={styles.iconCard}>
        <TouchableOpacity  onPress={() => drawer.current?.closeDrawer()} style={styles.iconButton}>
          <Icon.Feather name="log-in" size={30} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.homeText}>log-out</Text>
      </View>
      
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>
      <View style={styles.container}>
        <Button
          title="Change Drawer Position"
          onPress={() => changeDrawerPosition()}
        />

        <Button
          title="Open drawer"
          onPress={() => drawer.current?.openDrawer()}
        />
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
  card: {
    width: 300,
    height: 275,
    backgroundColor: Colors.GoldenYellow,
  },
  textCard: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    width: 128,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  leftButton: {
    backgroundColor: Colors.black,
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cashText: {
    color: Colors.black,
    fontSize: 16,
  },
  priceText: {
    color: Colors.GoldenYellow,
    fontSize: 20,
  },
  nameText: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: '400',
  },
  profileCard: {
    gap: 20,
    padding: 20,
  },
  profileImage: {
    width: 88,
    height: 88,
  },
  iconButton: {
    backgroundColor: Colors.black,
  },
  homeText: {
    color: Colors.black,
    fontSize: 20,
    fontWeight: '400',
    marginLeft: 20,
  },
  iconCard: {
    flexDirection: 'row',
    padding :10
  },
});

export default menuScreen;
