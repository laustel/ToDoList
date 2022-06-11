import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base';
import React from 'react';
import { StatusBar, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Accueil from '../Accueil';
import Statistiques from '../Statistiques';


const NavPages = () => {

  const Tab = createBottomTabNavigator();

  return (
    <>
      <StatusBar barStyle="light-content" />
     
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              let icon;
              // Set different 'icons' for each route
              if (route.name === 'home') {
                icon = <Icon name="home" size={20} color= {color} />
              } else if (route.name === 'Tasks') {
                icon = <Icon name="home" size={15} color= {color} />
              } else if (route.name === 'Profile') {
                icon = <Icon name="home" size={20} color= {color} />
              }

              // You can return any component that you like here!
              return <Text style={{color: color}}>{icon}</Text>;
            },
          })}
          tabBarOptions={{
            activeBackgroundColor: '#ff237b',
            activeTintColor: 'white',
            inactiveTintColor: 'black',
          }}>
          <Tab.Screen name="Accueil" component={Accueil} />
          <Tab.Screen name="Statistiques" component={Statistiques} />
          {/* <Tab.Screen name="Profile" component={ProfilePage} /> */}
        </Tab.Navigator>
   
    </>
  );
};

export default NavPages;