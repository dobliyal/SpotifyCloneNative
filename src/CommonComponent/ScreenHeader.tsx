import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Left from '../assets/Icons/Left'
import Logoheader from '../assets/Image/Logoheader'
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { useNavigation } from '@react-navigation/native';
import { ScreenHomeProp } from '../Screens/ScreenHome/utils/types';
interface ScreenHeaderProps {
    text: string;
  }
const ScreenHeader :React.FC<ScreenHeaderProps> = ({text}) => {
    const navigation = useNavigation<ScreenHomeProp>();
  return (
    <View style={styles.headerContainer}>
     <TouchableOpacity onPress={()=>navigation.navigate("ScreenHome")} style={styles.leftIcon}><Left/></TouchableOpacity> 
     <Text style={styles.logo}>{text}</Text> 
     <Icon name="more-vert" size={24}  /> 
    </View>
  )
}

export default ScreenHeader
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    marginTop:'7%'
  },
  leftIcon: {
    left: 3, 
  },
  logo: {
    bottom:2,
    fontSize:18,
    fontFamily:'Satoshi Bold',
    color:'#000000'
  },
})
