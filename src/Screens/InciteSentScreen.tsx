import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Icon } from '../component/Icon';
import Colors from '../component/Colors';
import TextInputComponent from '../component/textInput';

const InciteSentScreen = () => {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.flexCard}>
          <TouchableOpacity onPress={() => {}}>
            <Icon.AntDesign name="left" size={30} color={Colors.white} />
          </TouchableOpacity>
          <Text style={styles.text}>Invite Friends</Text>
        </View>
        <View>
          <TextInputComponent
            placeholder="Search"
            value={search}
            onChangeText={setSearch}
            customStyle={styles.input}
          />
        </View>
      </View>

      <View style={styles.profileCard}>
        <View style={styles.profileInfo}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Mueen</Text>
        </View>
        <TouchableOpacity>
          <Icon.AntDesign name="checkcircle" size={30} color={Colors.black} />
        </TouchableOpacity>
      </View>

      <View style={styles.profileCard}>
        <View style={styles.profileInfo}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Amir Hodges</Text>
        </View>
        <TouchableOpacity>
          <Icon.AntDesign name="checkcircle" size={30} color={Colors.black} />
        </TouchableOpacity>
      </View>

      <View style={styles.profileCard}>
        <View style={styles.profileInfo}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Ali Hammond</Text>
        </View>
        <TouchableOpacity>
          <Icon.AntDesign name="checkcircle" size={30} color={Colors.black} />
        </TouchableOpacity>
      </View>

      <View style={styles.profileCard}>
        <View style={styles.profileInfo}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Dora khan</Text>
        </View>
        <TouchableOpacity>
          <Icon.AntDesign name="checkcircle" size={30} color={Colors.black} />
        </TouchableOpacity>
      </View>

      <View style={styles.profileCard}>
        <View style={styles.profileInfo}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Urooj</Text>
        </View>
        <TouchableOpacity>
          <Icon.AntDesign name="checkcircle" size={30} color={Colors.black} />
        </TouchableOpacity>
      </View>

      <View style={styles.profileCard}>
        <View style={styles.profileInfo}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Naila</Text>
        </View>
        <TouchableOpacity>
          <Icon.AntDesign name="checkcircle" size={30} color={Colors.black} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InciteSentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  card: {
    backgroundColor: Colors.GoldenYellow,
    padding: 16,
    marginBottom: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.white,
  },
  flexCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  input: {
    backgroundColor: Colors.white,
  },
  profileCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 16,
    marginHorizontal: 16,
   
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black,
  },
});
