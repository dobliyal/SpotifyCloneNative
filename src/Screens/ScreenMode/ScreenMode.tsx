import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Logo from '../../assets/Image/Logo';
import BasicAppButton from '../../CommonComponent/BasicAppButton';
import Moon from '../../assets/Icons/Moon';
import Sun from '../../assets/Icons/Sun ';
import { useNavigation } from '@react-navigation/native';
import { ScreenModeProp } from './utils/types';

const ScreenMode = () => {
  
  const navigation = useNavigation<ScreenModeProp>();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Image/choose_mode_bg.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.choose}>
          <Text style={styles.title}>Choose Mode</Text>
          <View style={styles.modeContainer}>
            <View style={styles.column}>
              <TouchableOpacity onPress={() => console.log('Dark Mode')}>
                <View style={styles.circleContainer}>
                  <View style={styles.circle}>
                    <View>
                      <Moon />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <Text style={styles.modeText}>Dark Mode</Text>
            </View>

            <View style={{width: 40}} />

            <View style={styles.column}>
              <TouchableOpacity onPress={() => console.log('Light Mode')}>
                <View style={styles.circleContainer}>
                  <View style={styles.circle}>
                    <Sun />
                  </View>
                </View>
              </TouchableOpacity>
              <Text style={styles.modeText}>Light Mode</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <BasicAppButton title="Continue" onPress={async () => navigation.navigate('ScreenRegisterSignin')} height={70} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScreenMode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 49,
    left: 30,
    right: 30,
    alignItems: 'center',
  },
  choose: {
    bottom: 60,
  },
  title: {
    fontFamily: 'Satoshi Bold',
    fontSize: 20,
    lineHeight: 34,
    textAlign: 'center',
    marginBottom: 45,
    color: '#F2F2F2',
  },
  modeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap:15
  },
  column: {
    alignItems: 'center',
  },
  circleContainer: {
    height: 60,
    width: 60,
    borderRadius: 40,
    overflow: 'hidden',
    backgroundColor: 'rgba(48, 57, 60, 4.5)',
  },
  blurView: {
    height: '100%',
    width: '100%',
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  modeText: {
    marginTop: 15,
    fontFamily: 'Satoshi Regular',
    fontSize: 15,
    color: '#DADADA',
  },
  button: {
    width: '100%',
  },
});
