import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
interface BasicAppButtonProp{
onPress:()=>{},
title:string,
height?:number,
}
const BasicAppButton:React.FC<BasicAppButtonProp> = ({ onPress, title, height = 80 }) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[styles.button, { height: height }]}  
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#42C83C', 
    justifyContent: 'center', 
    alignItems: 'center',     
    borderRadius: 30,          
    paddingHorizontal: 6,    
  },
  text: {
    color: '#F6F6F6',         
    fontSize: 16,           
    fontFamily:'Satoshi Bold'   
  },
});

export default BasicAppButton;
