import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RequestRideScreen from './src/Screens/RequestRide';
import GpsScreen from './src/Screens/GpsScreen';
import SignUpScreen from './src/Screens/SignUpScreen';
import HomeScreen from './src/Screens/HomeScreen';
import VerificationScreen from './src/Screens/VerificationScreen';
import locationScreen from './src/Screens/locationScreen';
import RideDetailsScreen from './src/Screens/RideDetailsScreen';
import RequestScreen from './src/Screens/RequestScreen';
import DriverDetails from './src/Screens/DriverDetails';
import MassageScreen from './src/Screens/MassageScreen';
import menuScreen from './src/Screens/menuScreen';
import NotificationsScreen from './src/Screens/NotificationsScreen';
import SettingScreen from './src/Screens/SettingScreen';
import AccountScreen from './src/Screens/AccountScreen';
import RatingScreen from './src/Screens/RatingScreen';
import TipScreen from './src/Screens/TipScreen';
import InviteFriendsScreen from './src/Screens/InviteFriendsScreen';
import InciteSentScreen from './src/Screens/InciteSentScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
        <NavigationContainer>
          <Stack.Navigator initialRouteName='SplashScreen'>
            <Stack.Screen
              name="RequestRideScreen"
              component={RequestRideScreen}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="GpsScreen"
              component={GpsScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpScreen"
              component={SignUpScreen}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerificationScreen"
              component={VerificationScreen}
              options={{ headerShown: false }}
            />
              <Stack.Screen
              name="locationScreen"
              component={locationScreen}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="RideDetailsScreen"
              component={RideDetailsScreen}
              options={{ headerShown: false }}
            />
              <Stack.Screen
              name="RequestScreen"
              component={RequestScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DriverDetails"
              component={DriverDetails}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="MassageScreen"
              component={MassageScreen}
              options={{ headerShown: false }}
            />
           <Stack.Screen
              name="menuScreen"
              component={menuScreen}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="NotificationsScreen"
              component={NotificationsScreen}
              options={{ headerShown: false }}
            />
               <Stack.Screen
              name="SettingScreen"
              component={SettingScreen}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="AccountScreen"
              component={AccountScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RatingScreen"
              component={RatingScreen}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="TipScreen"
              component={TipScreen}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="InviteFriendsScreen"
              component={InviteFriendsScreen}
              options={{ headerShown: false }}
            />
                <Stack.Screen
              name="InciteSentScreen"
              component={InciteSentScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
  
  );
}
export default App