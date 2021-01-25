import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, View,LogBox } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Fontisto } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

import Suggestion from './Suggestion';
import Favourite from './Favourite';
import Calendar from './Calendar';
import Notification from './Notification';



const Tab = createBottomTabNavigator();

function TabScreen() {
  return (

    <Tab.Navigator 
    initialRouteName="Drawer"
   
    tabBarOptions={{
        activeTintColor: '#e91e63',
        showIcon: 'true',
        showLabel: false,
      }}>
      <Tab.Screen name="Home" component={Suggestion} 
      options={{
        tabBarIcon:()=>(
            <Fontisto name="home" size={24} color="#94c529" />
        ) }}/>

<Tab.Screen name="Calendar" component={Calendar}
      options={{
        tabBarIcon:() =>(
            <Fontisto name="calendar" size={24} color="#94c529" />
             )}} />

      <Tab.Screen name="Notification" component={Notification}
      options={{
        tabBarIcon:()=>(
<Fontisto name="bell-alt" size={24} color="#94c529" />
              )}} />


      

      <Tab.Screen name="Favourite" component={Favourite}
      options={{
        tabBarIcon:()=>(
          <Ionicons name="heart" size={24} color="#94c529" />
        )} }
       />
    </Tab.Navigator>

  );
}
export default  TabScreen;

const styles = StyleSheet.create({
    container: {
   padding:50,
position:'absolute',
     shadowOpacity:0.5,
      },
      
  });