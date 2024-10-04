import React from 'react'
import { StyleSheet, View } from 'react-native'
import Left from '../assets/Icons/Left'
import Logoheader from '../assets/Image/Logoheader'

const HomeHeader = () => {
  return (
    <View style={styles.headerContainer}>
     <View style={styles.leftIcon}><Left/></View> 
     <View style={styles.logo}><Logoheader/></View> 
    </View>
  )
}

export default HomeHeader
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop:10
  },
  leftIcon: {
    position: 'absolute', 
    left: 3, 
  },
  logo: {
    alignSelf: 'center',
    bottom:2,
  },
})
