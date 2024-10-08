import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Left from '../assets/Icons/Left'
import Logoheader from '../assets/Image/Logoheader'
import { logoutUser } from '../utils/firebaseAuth'
import { useDispatch } from 'react-redux'
import Logout from '../assets/Icons/Logout'

const HomeHeader = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    logoutUser(dispatch);
  };
  
  return (
    <View style={styles.headerContainer}>
     <View style={styles.leftIcon}><Left/></View> 
     <Text style={styles.logo}>Profile</Text> 
       <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <View style={styles.logoutIconContainer}>
            <Logout style={styles.logoutIcon} />
          </View>
        </TouchableOpacity>
    </View>
  )
}

export default HomeHeader
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginTop:10
  },
  logoutButton: {
    width: 24,
    height: 24,
    right: 10,
  },
  logoutIconContainer: {
    backgroundColor: '#fff',
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 50,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    right: 13,
    bottom: 11,
  },
  logoutIcon: {
    width: 16,
    height: 16,
    left: 2,
  },
  leftIcon: {
   // position: 'absolute', 
    left: 3, 
  },
  logo: {
    bottom:2,
    fontSize:18,
    fontFamily:'Satoshi Bold',
    color:'#000000'
  },
})
