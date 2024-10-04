import { SignUpFormData } from './../Screens/ScreenRegister/utils/types';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginFormData } from '../Screens/ScreenSignin/utils/types';
import { setUser } from '../Screens/ScreenSignin/redux/authSlice';
import { AppDispatch } from './redux/store';
import { useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';



export const loginUser = async (email: string, password: string, dispatch: AppDispatch) => {
  try {
    const userCred = await auth().signInWithEmailAndPassword(email, password);
    const token = await userCred.user.getIdToken();
    await AsyncStorage.setItem('token', token);
    const currentUser = auth().currentUser;
    if (currentUser) {
      const user: LoginFormData = {
        email: currentUser.email!,
        password: '',
      };
      dispatch(setUser(user));
    }
  } catch (error) {
    dispatch(setUser(null));
    if (error instanceof Error) {
      Alert.alert('Login Error', error.message);
    } else {
      Alert.alert('Login Error', 'An unknown error occurred');
    }
  }
};



export const signupUser = async (user: SignUpFormData, dispatch: AppDispatch) => {
  try {
    const UserCred = await auth().createUserWithEmailAndPassword(user.email, user.password);
    // FirebaseFirestore.instance.collection('Users').set(
    //   {
    //     'name':user.email,
    //     'email':UserCred.user?.email,
    //   }
    // );

    await firestore().collection('Users').doc(UserCred.user?.uid).set({
      name: user.username,  
      email: UserCred.user?.email,
    });

    const token = await UserCred.user.getIdToken();
    await AsyncStorage.setItem('token', token);
    const newUser: LoginFormData = {
      email: user.email,
      password: user.password,
    };
    dispatch(setUser(newUser));
  } catch (error) {
    Alert.alert('Cannot sign up, please try again.');
  } 
};

export const logoutUser = async (dispatch: AppDispatch) => {
  try {
    await auth().signOut();
    await AsyncStorage.removeItem('token');
    dispatch(setUser(null));
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert('Logout Error', error.message);
    } else {
      Alert.alert('Logout Error', 'An unknown error occurred');
    }
  }
};