  
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import React from "react";
import Suggestion from './Suggestion';
import Favourite from './Favourite';
 
const nav=(props)=>{
  AsyncStorage.clear();
  props.navigation.pop();
}


const Draw = createDrawerNavigator();
const Stack = createStackNavigator();

const Drawer=()=> {
  return (
      <NavigationContainer>
      <Draw.Navigator initialRouteName="Suggestion " drawerPosition="left"  > 
        <Draw.Screen name="Suggestion" component={Suggestion}  />
       <Draw.Screen name="Favourite" component={Favourite} />
      </Draw.Navigator>
      </NavigationContainer>
  );
}
export default Drawer;