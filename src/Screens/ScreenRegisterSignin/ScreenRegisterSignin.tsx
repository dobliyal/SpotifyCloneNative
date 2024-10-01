import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Logo from '../../assets/Image/Logo'
import BasicAppButton from '../../CommonComponent/BasicAppButton'
import Left from '../../assets/Icons/Left'
import { useNavigation } from '@react-navigation/native';
import { ScreenRegisterSigninProp } from './utils/types';

const ScreenRegisterSignin = () => {
  const navigation = useNavigation<ScreenRegisterSigninProp>();
  const navigationSignin = useNavigation<ScreenRegisterSigninProp>();

  return (
    <View style={styles.container}>
        
        <View style={styles.left}>
        <Left/>
        </View>
        <View style={styles.logoContainer}>
        <Logo/>
        </View>
      <Image
      source={require("../../assets/Image/auth_bg.png")}
      style={styles.backgroundImage}
      />
      <View style={styles.text}>
      <Text style={styles.heading}>Enjoy listening to music</Text>
      <Text style={styles.describtion}>Spotify is a proprietary Swedish audio streaming and media services provider </Text>
      </View>
      <View style={styles.buttonstyle}>
        <View style={styles.button}>
        <BasicAppButton title="Register" onPress={async ()=>{navigation.navigate("ScreenRegister")}} height={55}/>
        </View>
        <TouchableOpacity onPress={async ()=>navigationSignin.navigate("ScreenSignin")}>
        <Text style={styles.signin}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ScreenRegisterSignin

const styles=StyleSheet.create({
container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
},
backgroundImage:{
    top:'21%'
},
logoContainer: {
    position: 'absolute',
    top: '15%',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading:{
    fontSize:26,
    fontFamily:'Satoshi Bold',
    color:'#383838',
    bottom:'12%',
  },
  describtion:{
    fontSize:17,
    fontFamily:'Satoshi Medium',
    color:'#797979'
  },
  text:{
   justifyContent:'center',
   alignItems:'center',
   position:'absolute',
   left:0,
   right:0,
   top:'30%'
  },
  button:{
    width:'40%'
  },
  buttonstyle:{
    flexDirection:'row',
    alignItems:'center',
  justifyContent:'space-between',
  width:'80%',
  left:'8%',
  position:'absolute',
  top:'46%'
  },
  signin:{
    fontSize:19,
    fontFamily:'Satoshi Medium',
    color:'#313131',
  },
  left:{
    position:'absolute',
    top:'3%',
    left:'4%'
  }
})
