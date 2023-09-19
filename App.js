import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Tabs from './navigation/tabs';
import VendorHome from './screens/vendor/Home';



const Stack = createStackNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Start'>
            <Stack.Screen name="VendorHome" options={{
            title: 'My home',
            headerStyle: {
            backgroundColor: '#f4511e',
            },
            headerTintColor: 'orange',
            headerTitleStyle: {
            fontWeight: 'bold',
          }}}  component={VendorHome} />
            <Stack.Screen name='Start' component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
