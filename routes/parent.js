import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Login from "../authentication/Login/Login";
import ResetPass from "../authentication/resetPassword/resetpass";
import NavPages from "./pages";
//import TabBarTop from "@react-navigation/material-top-tabs/lib/typescript/src/views/MaterialTopTabBar";

const Stack = createStackNavigator();

export default function Parent() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    > 
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Accueil} />
      <Stack.Screen name="resetPass" component={ResetPass} />
      <Stack.Screen name="Statistiques" component={Statistiques} />
      <Stack.Screen name="navPages" component={NavPages} />
    </Stack.Navigator>
  );
}