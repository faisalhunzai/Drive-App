import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Colors from '../component/Colors';
import {Icon} from '../component/Icon';
import {Image} from 'react-native';
import TextInputComponent from '../component/textInput';
import CustomButton from '../component/Button';
import { useNavigation } from '@react-navigation/native';


const RatingScreen = () => {
  const [input, setInput] = useState<string>('');
  const [rating, setRating] = useState<number>(4);
  const navigation =useNavigation();

  const handleStarPress = (value: number) => {
    setRating(value);
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
          <Text style={styles.title}>How was Your Trip?</Text>
          <Text style={styles.paraText}>
            Your feedback will help improve{'\n'}driving experience
          </Text>
          <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map(star => (
              <TouchableOpacity
                key={star}
                onPress={() => handleStarPress(star)}>
                <Icon.AntDesign
                  name={star <= rating ? 'star' : 'staro'}
                  size={40}
                  color={star <= rating ? Colors.GoldenYellow : Colors.silver}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TextInputComponent
          placeholder="Additional comments..."
          value={input}
          onChangeText={setInput}
          customStyle={styles.input}
        />

        <CustomButton
          title="Submit Review"
          onPress={() => navigation.navigate('TipScreen')}
          buttonStyle={styles.Button}
        />
      </View>
    </View>
  );
};

export default RatingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.GoldenYellow,
  },
  text: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  flexCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
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
    marginBottom: 10,
    marginLeft: 45,
  },
  paraText: {
    color: Colors.black,
    fontSize: 15,
    fontWeight: '300',
    textAlign: 'center',
    marginBottom: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  input: {
    borderColor: Colors.black,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
    height: 100,
    textAlignVertical: 'top',
  },
  Button: {
    backgroundColor: Colors.GoldenYellow,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});
