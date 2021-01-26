import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View ,LogBox} from 'react-native';
import Home from './Screen/Home';
import RegisterScreen from './Screen/RegisterScreen';
import LoginScreen from './Screen/LoginScreen';
import ProfileScreen from './Screen/ProfileScreen';
import Favourite from './Screen/Favourite';
import BookScreen from './Screen/BookScreen';
import Nav from './Nav';
import Suggestion from './Screen/Suggestion';
import Space from './Screen/Space';
import Calendar from './Screen/Calendar';
 


LogBox.ignoreAllLogs(true)


export default ()=> <Nav /> 