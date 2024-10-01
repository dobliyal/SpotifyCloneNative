import React from 'react';
import { StyleSheet } from 'react-native';
import { DefaultTheme as PaperDefaultTheme, MD3DarkTheme as PaperDarkTheme, Provider as PaperProvider } from 'react-native-paper';

const AppColors = {
    primary : '#42C83C',
    lightBackground: '#F2F2F2',
    darkBackground :'#0D0C0C',
};

const lightTheme = {
  ...PaperDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: AppColors.primary,
    background: AppColors.lightBackground,
    text: '#383838', 
  },
  fonts: {
    regular: {
      fontFamily: 'Satoshi',
    },
  },
  roundness: 30,
  inputStyles: {
    filled: true,
    fillColor: 'transparent',
    padding: 30,
    borderColor: 'black',
    borderWidth: 0.4,
    borderRadius: 30,
  },
  buttonStyles: {
    backgroundColor: AppColors.primary,
    borderRadius: 30,
    elevation: 0,
    textStyle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  },
};

const darkTheme = {
  ...PaperDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    primary: AppColors.primary,
    background: AppColors.darkBackground,
    text: '#A7A7A7', 
  },
  fonts: {
    regular: {
      fontFamily: 'Satoshi',
    },
  },
  roundness: 30,
  inputStyles: {
    filled: true,
    fillColor: 'transparent',
    padding: 30,
    borderColor: 'white',
    borderWidth: 0.4,
    borderRadius: 30,
  },
  buttonStyles: {
    backgroundColor: AppColors.primary,
    borderRadius: 30,
    elevation: 0,
    textStyle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  },
};

const inputStyles = StyleSheet.create({
  input: {
    padding: 30,
    borderRadius: 30,
    borderWidth: 0.4,
    borderColor: '#000000',
  },
  inputDark: {
    borderColor: '#FFFFFF',
  },
});

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: AppColors.primary,
    borderRadius: 30,
    elevation: 0,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export { lightTheme, darkTheme, inputStyles, buttonStyles };


