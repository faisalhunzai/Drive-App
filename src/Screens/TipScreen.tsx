import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Colors from '../component/Colors';
import { Icon } from '../component/Icon';
import { Image } from 'react-native';
import TextInputComponent from '../component/textInput';
import CustomButton from '../component/Button';
import { useNavigation } from '@react-navigation/native';

const TipScreen = () => {
  const [input, setInput] = useState<string>('');
  const [selectedTip, setSelectedTip] = useState<number | null>(null);

  const navigation = useNavigation();

  const handleTipSelection = (tip: number) => {
    setSelectedTip(tip);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.profileSection}>
          <Image
            source={require('../../Asset/Image/profile.png')}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Asif Raj</Text>
          <Text style={styles.idText}>652-UkW</Text>
        </View>

        <View>
          <Text style={styles.title}>
            Wow! A 5 star!{'\n'}
            Wanna add a tip for Asif?
          </Text>
        </View>

        <View style={styles.tipContainer}>
          {[10, 20, 50].map((tip) => (
            <TouchableOpacity
              key={tip}
              style={[
                styles.tipButton,
                selectedTip === tip && styles.selectedTipButton,
              ]}
              onPress={() => handleTipSelection(tip)}
            >
              <Text style={styles.tipText}>{tip}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <CustomButton
          title="Done"
          onPress={() => {
           
            navigation.navigate('InviteFriendsScreen');
          }}
          buttonStyle={styles.Button}
        />
      </View>
    </View>
  );
};

export default TipScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.GoldenYellow,
  },
  card: {
    backgroundColor: Colors.white,
    padding: 20,
    marginTop: 30,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    width: '80%',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    color: Colors.black,
    fontSize: 25,
    fontWeight: '300',
  },
  idText: {
    color: Colors.black,
    fontSize: 15,
    fontWeight: '300',
    marginLeft: 10,
  },
  title: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  tipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tipButton: {
    backgroundColor: Colors.silver,
    padding: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  selectedTipButton: {
    backgroundColor: Colors.GoldenYellow,
  },
  tipText: {
    color: Colors.black,
    fontWeight: 'bold',
  },
  Button: {
    backgroundColor: Colors.GoldenYellow,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});
