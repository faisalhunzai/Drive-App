import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Icon } from '../component/Icon';
import Colors from '../component/Colors';
import TextInputComponent from '../component/textInput';
import CustomButton from '../component/Button';
import { useNavigation } from '@react-navigation/native';

const InviteFriendsScreen = () => {
  const [code, setCode] = useState<string>('');
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.flexCard}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Icon.AntDesign name="left" size={30} color={Colors.white}/>
          </TouchableOpacity>
          <Text style={styles.text}>Invite Friends</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://cdn.pixabay.com/photo/2019/10/09/06/06/gift-4536515_1280.png',
            }}
            style={styles.image}
          />
          <Text style={styles.title}>
            Invite Friends{'\n'}Get 3 Coupons each!
          </Text>
          <Text style={styles.description}>
            When your friend signs up with your{'\n'}referral code, you'll both get 3.0 coupons
          </Text>
        </View>
      </View>
 
 <View style={{padding :20}}>
      <View style={styles.inviteCodeContainer}>
        <Text style={styles.inviteText}>Share your Invite Code</Text>
        <TextInputComponent
          placeholder="YO45KG"
          value={code}
          onChangeText={setCode}
          customStyle={styles.input}
        />
        <View style={styles.line} />
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          title="Invite Friends"
          onPress={() => navigation.navigate('InciteSentScreen')}
          buttonStyle={styles.button}
        />
      </View>
      </View>
    </View>
  );
};

export default InviteFriendsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor :Colors.white
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
    justifyContent :'space-around',
    marginBottom: 16,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 14,
  },
  inviteCodeContainer: {
    marginBottom: 16,
  },
  inviteText: {
    fontSize: 16,
    marginBottom: 8,
    color: Colors.black,
  },
  buttonContainer: {
    marginTop: 16,
  },
  button:{
    backgroundColor :Colors.GoldenYellow
  },
  input :{
    borderColor :Colors.white
  },
  line: {
    height: 1, 
    backgroundColor: Colors.black, 
  
  },
});
