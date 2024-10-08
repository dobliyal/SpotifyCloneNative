import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import HomeHeader from '../../CommonComponent/HomeHeader';
import Slider from '@react-native-community/slider';
import Next from '../../assets/Icons/Next';
import Previous from '../../assets/Icons/Previous';
import Play from '../../assets/Icons/Play';
import {artistData} from '../../utils/data/data';
import TrackPlayer, { Capability, usePlaybackState, useProgress, State, PlaybackState } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import ScreenHeader from '../../CommonComponent/ScreenHeader';

const { height, width } = Dimensions.get('window');

const ScreenMusicPage = () => {
  const route = useRoute();
  //@ts-ignore
  const { item } = route.params;
  const progress=useProgress();
  const playbackState = usePlaybackState();
  const [currentSong, setCurrentSong] = useState(item.id);
  const [playerSetup, setPlayerSetup] = useState(false); 
  const [isPlaying, setIsPlaying] = useState(false); 
  const ref = useRef<FlatList<any>>(null);

  useEffect(() => {
    setTimeout(() => {
      ref.current?.scrollToIndex({ animated: true, index: currentSong });
    }, 1000);
  }, []);

  useEffect(() => {
    if (!playerSetup) {
      setupPlayer();
    }
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };
  

  const setupPlayer = async () => {
    try {
    //  await TrackPlayer.setupPlayer(); 
      await TrackPlayer.updateOptions({
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.Stop,
        ],
        compactCapabilities: [Capability.Play, Capability.Pause],
      });
      await TrackPlayer.add(artistData); 
      await TrackPlayer.skip(currentSong);
      setPlayerSetup(true); 
      togglePlayback();
    } catch (e) {
      console.error('Error setting up player:', e);
    }
  };

  const togglePlayback = async () => {
    const state = await TrackPlayer.getState();
    if (state === State.Playing) {
      await TrackPlayer.pause();
      setIsPlaying(false); 
      
    } else {
      await TrackPlayer.play();
      setIsPlaying(true); 
    }
  };


  return (
    <View style={styles.container}>
      <ScreenHeader text={"Now playing"} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={ref}
        data={artistData}
        pagingEnabled
        onScroll={async e=>{
          const x=e.nativeEvent.contentOffset.x / width;
          setCurrentSong(parseInt(x.toFixed(0)));
          await TrackPlayer.skip(parseInt(x.toFixed(0)));
          togglePlayback();
        }}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.bannerView}>
              <Image source={{ uri: item.artwork }} style={styles.musicImage} />
              <View style={styles.artisttitle}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.artistName}>{item.artist}</Text>
              </View>
            </View>
          );
        }}
      />

<Slider
        value={progress.position}
        maximumValue={progress.duration}
        style={styles.slider}
         minimumTrackTintColor="#434343"
         maximumTrackTintColor="#000000"
         thumbTintColor='#434343'
        onValueChange={async (value) => {
          await TrackPlayer.seekTo(value);
        }}
      />
       <View style={styles.timeContainer}>
      <Text style={styles.timeText}>{formatTime(progress.position)}</Text>
      
      <Text style={styles.timeText}>{formatTime(progress.duration)}</Text>
    </View>
      
      <View style={styles.btnArea}>
        <TouchableOpacity
          onPress={async () => {
            if (parseInt(currentSong) > 0) {
              setCurrentSong(parseInt(currentSong) - 1);
              ref.current?.scrollToIndex({
                animated: true,
                index: parseInt(currentSong) - 1,
              });
              await TrackPlayer.skip(parseInt(currentSong) - 1);
              await TrackPlayer.play();
              setIsPlaying(true);
            }
          }}
        >
          <Previous />
        </TouchableOpacity>
        <View style={styles.playPauseContainer}>
  <TouchableOpacity onPress={async () => togglePlayback()}>
    {isPlaying ? <Icon name="pause" size={24} color="#fff" /> : <Icon name="play-arrow" size={24} color="#fff" />}
  </TouchableOpacity>
</View>


        <TouchableOpacity
          onPress={async () => {
            if (artistData.length - 1 > parseInt(currentSong)) {
              setCurrentSong(parseInt(currentSong) + 1);
              ref.current?.scrollToIndex({
                animated: true,
                index: parseInt(currentSong) + 1,
              });
              await TrackPlayer.skip(parseInt(currentSong) + 1);
              await TrackPlayer.play();
              setIsPlaying(true);
            }
          }}
        >
          <Next />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScreenMusicPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerView: {
    width: width,
    height: height / 2,
    justifyContent: 'center',
    alignItems: 'center',
    top: '15%',
  },
  musicImage: {
    width: '90%',
    height: '100%',
    borderRadius: 30,
    marginBottom: 20,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
   bottom:'7%'
  },
  timeText: {
    fontSize: 12,
    color: '#404040',
    fontFamily: 'Satoshi Medium',
  },
    playPauseContainer: {
      backgroundColor: '#42C83C', 
      width: 70,
      height: 70, 
      borderRadius: 35,
      justifyContent: 'center', 
      alignItems: 'center', 
    },
  slider: {
    width: '90%',
    height: 90,
    alignSelf: 'center',
    bottom:'3%'
  },
  title: {
    fontSize: 20,
    fontFamily:'Satoshi Bold',
    color:'#000000',
   
  },
  artisttitle:{
   flexDirection:'column',
   alignItems:'flex-start',
  // backgroundColor:'green',
   paddingBottom:35,
   marginRight:140,
  },
  artistName: {
    fontSize: 20,
    fontFamily:'Satoshi Regular',
    color: '#404040',
  },
  btnArea: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 50,
    bottom:'10%'
  },
});
