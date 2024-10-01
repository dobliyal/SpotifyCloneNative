import React from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Logo from '../../assets/Image/Logo'
import BasicAppButton from '../../CommonComponent/BasicAppButton'
import { useNavigation } from '@react-navigation/native';
import { ScreenGetstartedProp } from './utils/types';
const ScreenGetstarted = () => {
  const navigation = useNavigation<ScreenGetstartedProp>();


  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/Image/intro_bg.png')} 
        style={styles.backgroundImage}
      />
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Enjoy Listening To Music</Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis enim purus sed phasellus. 
          Cursus ornare id scelerisque aliquam.
        </Text>
        <TouchableOpacity style={styles.button}>
          <BasicAppButton title="Get Started" onPress={ async () => navigation.navigate('ScreenMode')} height={70} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ScreenGetstarted

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject, 
    width: '100%',
    height: '102%',
  },
  logoContainer: {
    position: 'absolute',
    top: 30, 
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 50,  
    left: 30,    
    right: 30,   
    alignItems: 'center', 
  },
  title: {
    fontFamily: 'Satoshi Bold', 
    fontSize: 25,
    lineHeight: 34,
    textAlign: 'center',
    marginBottom: 15, 
    color:'#F2F2F2'
  },
  subtitle: {
    fontFamily: 'Satoshi Medium', 
    fontSize: 17,
    lineHeight: 23,
    textAlign: 'center',
    marginBottom: 30, 
    color:'#797979'
  },
  button:{
    width:'100%'
  }
})
