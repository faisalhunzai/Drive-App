import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RequestRideScreen from './src/Screens/RequestRide';
import GpsScreen from './src/Screens/GpsScreen';
import SignUpScreen from './src/Screens/SignUpScreen';
import HomeScreen from './src/Screens/HomeScreen';


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
           
           
          </Stack.Navigator>
        </NavigationContainer>
  
  );
}
export default App