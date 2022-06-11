import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// import MaterialIcons from 'react-native-vector-icons';
// import 'react-native-gesture-handler';
import Accueil from './Accueil';
import Statistiques from './Statistiques';
import { Icon } from "native-base";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home"
            screenOptions={{
                tabBarInactiveBackgroundColor: "#011f3b",
                tabBarActiveBackgroundColor: "#032845",
                tabBarInactiveTintColor: "#f8ca12",
                tabBarActiveTintColor: "#ffffff",
                tabBarIconStyle: { marginTop: 4},
                tabBarLabelStyle: { fontSize: 13, color: '#f8ca12', paddingBottom: 3},
                tabBarStyle: {height: 55, position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 4, borderTopWidth: 0},
                // style: { borderColor: '#011f3b' },
                headerShown: false,
                unmountOnBlur: true,
            }}
        >
            <Tab.Screen name="Accueil" component={Accueil}
                 options={{
                   tabBarLabel: 'Accueil',
                   tabBarIcon: ({ color, size }) => (
                     <Icon name="home" color={color} size={29} style={{ marginTop: 1}} />
                   ),
                 }}
            />
            <Tab.Screen name="Statistique" component={Statistiques}
                 options={{
                   tabBarLabel: 'Statistique',
                   tabBarIcon: ({ color, size }) => (
                     <Icon name="login" color={color} size={29} style={{ marginTop: 1}} />
                   ),
                 }}
            />
        </Tab.Navigator>
  );
}

export default MyTabs;