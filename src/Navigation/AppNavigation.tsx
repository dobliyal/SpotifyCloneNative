import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {AppStackParamList, AuthStackParamList} from '../utils/types/interface';
import ScreenGetstarted from '../Screens/ScreenGetstarted/ScreenGetstarted';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenMode from '../Screens/ScreenMode/ScreenMode';
import ScreenRegisterSignin from '../Screens/ScreenRegisterSignin/ScreenRegisterSignin';
import ScreenRegister from '../Screens/ScreenRegister/ScreenRegister';
import ScreenSignin from '../Screens/ScreenSignin/ScreenSignin';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../utils/redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import {setUser} from '../Screens/ScreenSignin/redux/authSlice';
import ScreenHome from '../Screens/ScreenHome/ScreenHome';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppNavigation = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          const currentUser = auth().currentUser;
          if (currentUser) {
            const user = {
              email: currentUser.email!,
              password: '',
            };
            dispatch(setUser(user));
          }
        } else {
          dispatch(setUser(null));
        }
      } catch (error) {
        dispatch(setUser(null));
      }
    };

    checkToken();
  }, [dispatch]);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <AppStack.Navigator initialRouteName="ScreenHome">
        <AppStack.Screen
          name="ScreenHome"
          component={ScreenHome}
          options={{headerShown: false}}
        />
            </AppStack.Navigator>

      ) : (
        <AuthStack.Navigator initialRouteName="ScreenGetstarted">
          <AuthStack.Screen
            name="ScreenGetstarted"
            component={ScreenGetstarted}
            options={{headerShown: false}}
          />
          <AuthStack.Screen
            name="ScreenMode"
            component={ScreenMode}
            options={{headerShown: false}}
          />
          <AuthStack.Screen
            name="ScreenRegisterSignin"
            component={ScreenRegisterSignin}
            options={{headerShown: false}}
          />
          <AuthStack.Screen
            name="ScreenRegister"
            component={ScreenRegister}
            options={{headerShown: false}}
          />
          <AuthStack.Screen
            name="ScreenSignin"
            component={ScreenSignin}
            options={{headerShown: false}}
          />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigation;
