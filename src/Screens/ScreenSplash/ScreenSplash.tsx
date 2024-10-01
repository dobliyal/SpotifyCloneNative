import React from 'react'
import { View } from 'react-native'
import Logo from '../../assets/Image/Logo'
import {styles} from "./styleSplash"

const ScreenSplash = () => {
  return (
    <View style={styles.container}>
      <Logo/>
    </View>
  )
}

export default ScreenSplash
