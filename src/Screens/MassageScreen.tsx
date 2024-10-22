import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Colors from '../component/Colors';
import { Icon } from '../component/Icon';
import { useNavigation } from '@react-navigation/native';

const MassageScreen = () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello, are you nearby?', sender: 'user', time: '5:03 PM' },
    { id: 2, text: "I'll be there in a few mins", sender: 'driver', time: '5:03 PM' },
    { id: 3, text: 'OK, I am waiting at Maxmart Store', sender: 'user', time: '5:33 PM' },
    { id: 4, text: "Sorry, I'm stuck in traffic. Please give me a moment.", sender: 'driver', time: '5:33 PM' },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: 'user',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon.AntDesign name="left" size={24} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Asif Raj</Text>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/1597690/pexels-photo-1597690.jpeg?auto=compress&cs=tinysrgb&w=600' }}
          style={styles.headerImage}
        />
      </View>

      
      <ScrollView contentContainerStyle={styles.chatContainer}>
        {messages.map((msg) => (
          <View
            key={msg.id}
            style={[styles.messageBubble, msg.sender === 'user' ? styles.userBubble : styles.driverBubble]}
          >
            <Text style={styles.messageText}>{msg.text}</Text>
            <Text style={styles.messageTime}>{msg.time}</Text>
          </View>
        ))}
      </ScrollView>

    
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
          <Icon.MaterialIcons name="send" size={24} color={Colors.GoldenYellow} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default MassageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightgray,
  },
  header: {
    backgroundColor: Colors.GoldenYellow,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 10,
  },
  headerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  chatContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  messageBubble: {
    maxWidth: '70%',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: Colors.GoldenYellow,
  },
  driverBubble: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  messageText: {
    fontSize: 16,
    color: Colors.black,
  },
  messageTime: {
    fontSize: 12,
    color: Colors.black,
    textAlign: 'right',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: Colors.white,
  },
  input: {
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: Colors.gray,
    marginRight: 10,
    color :Colors.white
  },
  sendButton: {
    padding: 5,
  },
});
