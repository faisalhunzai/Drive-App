import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import Colors from '../component/Colors';
import { Icon } from '../component/Icon';

const notifications = [
  { id: '1', type: 'System', message: 'Your booking #1234 has been successfully created.', icon: '✅' },
  { id: '2', type: 'Promotion', message: 'Invite friends - Get 3 coupons each!', icon: '🎟️' },
  { id: '3', type: 'Promotion', message: 'Invite friends - Get 3 coupons each!', icon: '🎟️' },
  { id: '4', type: 'System', message: 'Your booking #1205 has been cancelled.', icon: '❌' },
  { id: '5', type: 'System', message: 'Thank you! Your transaction is complete.', icon: '💳' },
  { id: '6', type: 'Promotion', message: 'Invite friends - Get 3 coupons each!', icon: '🎟️' },
];

const NotificationsScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.notificationContainer}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{item.icon}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.type}</Text>
        <Text style={styles.message} numberOfLines={1}>{item.message}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Icon.AntDesign name='left' size={25} color={Colors.white} />
        <View style={styles.flexCard}>
          <Text style={styles.text}>Notifications</Text>
          <TouchableOpacity>
            <Icon.MaterialCommunityIcons name='delete' size={30} color={Colors.white} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: Colors.GoldenYellow,
    padding: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
    color: Colors.white,
  },
  flexCard: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.silver,
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 16,
  },
  icon: {
    fontSize: 24,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
    color : Colors.black,
  },
});
