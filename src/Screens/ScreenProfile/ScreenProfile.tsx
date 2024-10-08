import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import HomeHeader from '../../CommonComponent/HomeHeader';
import Profile from '../../assets/Icons/Profile';
import { artistData } from '../../utils/data/data';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import ScreenHeader from '../../CommonComponent/ScreenHeader';
import { logoutUser } from '../../utils/firebaseAuth';
import { useDispatch } from 'react-redux';
import Logout from '../../assets/Icons/Logout';
import { useNavigation } from '@react-navigation/native';
import { ScreenHomeProp } from '../ScreenHome/utils/types';

const ScreenProfile = () => {
  const navigation = useNavigation<ScreenHomeProp>();
  const dispatch = useDispatch();
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
//@ts-ignore
  const renderSong = ({item}) => (
    <TouchableOpacity style={styles.songContainer} onPress={()=>navigation.navigate("ScreenMusicPage",
      {
        item:item,
      }
    )
    }>
      <Image source={{ uri: item.artwork }} style={styles.artwork} />

      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.artistName}>{item.artist}</Text>
      </View>

      <Text style={styles.duration}>{formatDuration(item.duration)}</Text>
      <Icon name="more-horiz" size={24}  /> 

    </TouchableOpacity>
  );
  const handleLogout = () => {
    logoutUser(dispatch);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
      {/* <ScreenHeader text={"Profile"} /> */}
      <HomeHeader/>
        <View style={styles.profile}>
          <Profile />
          <Text style={styles.email}>rohit@gmail.com</Text>
          {/* <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <View style={styles.logoutIconContainer}>
            <Logout style={styles.logoutIcon} />
          </View>
        </TouchableOpacity> */}
          <Text style={styles.name}>Rohit</Text>
          <View style={styles.follow}>
            <View>
              <Text style={styles.number}>778</Text>
              <Text>Followers</Text>
            </View>
            <View>
              <Text style={styles.number}>243</Text>
              <Text>Followers</Text>
            </View>
          </View>
        </View>
      </View>

      <Text style={styles.public}>PUBLIC PLAYLISTS</Text>

      <FlatList
        data={artistData}
        renderItem={renderSong}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
};

export default ScreenProfile;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  profile: {
    alignItems: 'center',
    paddingTop: '10%',
  },
  email: {
    fontSize: 14,
    fontFamily: 'Satoshi Medium',
    padding: '2%',
  },
  
  number: {
    fontSize: 16,
    fontFamily: 'Satoshi Bold',
    color: '#000000',
    textAlign: 'center',
  },
  name: {
    fontSize: 16,
    fontFamily: 'Satoshi Bold',
    color: '#000000',
  },
  follow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '150%',
    padding: '5%',
  },
  top: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    overflow: 'hidden',
    paddingBottom: 10,
  },
  public: {
    fontSize: 16,
    fontFamily: 'Satoshi Medium',
    color: '#000000',
    paddingTop: '4%',
    paddingLeft:'4%'
  },
  songContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  artwork: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  songInfo: {
    flex: 1,
    marginLeft: 15,
  },
  songTitle: {
    fontSize: 16,
    fontFamily: 'Satoshi Bold',
    color:'#000000'
  },
  artistName: {
    fontSize: 14,
    fontFamily: 'Satoshi Medium',
    color: '#555',
  },
  duration: {
    fontSize: 14,
    fontFamily: 'Satoshi Medium',
    color: '#555',
    paddingRight:'10%'
  },
  list:{
    flex:1,
  }
});
