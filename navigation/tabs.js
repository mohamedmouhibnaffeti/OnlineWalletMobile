import React from "react";
import { useFonts } from "expo-font";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import VendorHome from "../screens/vendor/Home";
import VendorTransaction from "../screens/vendor/transaction";
import VendorProfile from "../screens/vendor/Profile";
import * as Icons from 'react-native-heroicons/solid'
const Tab = createBottomTabNavigator()

export default function Tabs () {
    return(
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: '#5a3e60',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                elevation: 0
            },
        }}>
            <Tab.Screen name="Home" component={VendorHome} options={{
                tabBarIcon: ({ focused }) => (<Icons.HomeIcon size={32} style={{ color : focused ? '#FFA372' : 'white' }}  />),
                headerTintColor: 'white',
                headerStyle: {backgroundColor: '#5a3e60'}
                }} />
            <Tab.Screen name="Transactions" component={VendorTransaction} options={{
                tabBarIcon: ({ focused })=>(<Icons.ArrowsRightLeftIcon size={32} style={{ color : focused ? '#FFA372' : 'white' }}  />),
                headerTintColor: 'white',
                headerStyle: {backgroundColor: '#5a3e60'}
            }}/>
            <Tab.Screen name="Profile" component={VendorProfile} options={{
                tabBarIcon: ({ focused })=>(<Icons.UserIcon size={32} style={{ color : focused ? '#FFA372' : 'white' }} />),
                headerTintColor: 'white',
                headerTitle: "",
                headerStyle: {backgroundColor: 'transparent', height: 0}
            }} />
        </Tab.Navigator>
    )
}