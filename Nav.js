
import 'react-native-gesture-handler';
import React from 'react';
//Import Navigators from React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Import all the screens needed
import Home from './Screen/Home';
import RegisterScreen from './Screen/RegisterScreen';
import LoginScreen from './Screen/LoginScreen';
import ProfileScreen from './Screen/ProfileScreen';
import Favourite from './Screen/Favourite';
import BookScreen from './Screen/BookScreen';
import { color } from 'react-native-reanimated';
import Suggestion from './Screen/Suggestion';
import TabScreen from './Screen/TabScreen';
import Space from './Screen/Space';
import Calendar from './Screen/Calendar';








const AuthStack =createStackNavigator();
const MyStack = () =>{
  return (
    <NavigationContainer>
      <AuthStack.Navigator> 

<AuthStack.Screen  name ="Home" component={Home}  options={{ headerShown:false ,}}/>
<AuthStack.Screen  name ="LoginScreen" component={LoginScreen} options={{ title:"" ,}} />
<AuthStack.Screen name ="RegisterScreen" component={RegisterScreen} options={{ title:"" ,}} />
<AuthStack.Screen name ="TabScreen" component={TabScreen} options={{ title:"" ,}} />
<AuthStack.Screen  name ="Suggestion" component={Suggestion} options={{ title:"" ,}} />
<AuthStack.Screen  name ="Space" component={Space} options={{ title:"" , headerShown:false}} />
<AuthStack.Screen  name ="BookScreen" component={BookScreen} options={{ title:"" ,}} />
<AuthStack.Screen  name ="Calendar" component={Calendar} options={{ title:"" }} />
<AuthStack.Screen  name ="ProfileScreen" component={ProfileScreen} options={{ title:"" }} />







</AuthStack.Navigator>
</NavigationContainer>
  );


};

export default MyStack;
