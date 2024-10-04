import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppStackParamList } from '../utils/types/interface';
import ScreenHome from '../Screens/ScreenHome/ScreenHome';
import ScreenFavourite from '../Screens/ScreenFavourite/ScreenFavorite';
import ScreenProfile from '../Screens/ScreenProfile/ScreenProfile';
const Tab = createBottomTabNavigator<AppStackParamList>();
const BottomNavigation = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';

          if (route.name === 'ScreenHome') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'ScreenFavourite') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'ScreenProfile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#42C83C',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle:{
          paddingTop:18,
          paddingBottom:18,
          height:76,
        }
      })}
    >
      <Tab.Screen name="ScreenHome" component={ScreenHome} options={{ headerShown: false }} />
      <Tab.Screen name="ScreenFavourite" component={ScreenFavourite} options={{ headerShown: false }} />
      <Tab.Screen name="ScreenProfile" component={ScreenProfile} options={{ headerShown: false }} />
    </Tab.Navigator>

);

export default BottomNavigation;