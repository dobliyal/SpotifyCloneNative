import React from 'react'
import { Text, View } from 'react-native'
import ScreenSplash from './src/Screens/ScreenSplash/ScreenSplash'
import ScreenGetstarted from './src/Screens/ScreenGetstarted/ScreenGetstarted'
import ScreenMode from './src/Screens/ScreenMode/ScreenMode'
import ScreenRegisterSignin from './src/Screens/ScreenRegisterSignin/ScreenRegisterSignin'
import ScreenSignin from './src/Screens/ScreenSignin/ScreenSignin'
import ScreenRegister from './src/Screens/ScreenRegister/ScreenRegister'
import AppNavigation from './src/Navigation/AppNavigation'
import { Provider } from 'react-redux'
import store from './src/utils/redux/store'
import ScreenHome from './src/Screens/ScreenHome/ScreenHome'

const App = () => {
  return (
    <Provider store={store}>
  <AppNavigation/>
  {/* <ScreenHome/> */}
    </Provider>
  )
}

export default App
