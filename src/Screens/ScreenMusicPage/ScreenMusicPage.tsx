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
import TrackPlayer,{Capability,usePlaybackState,useProgress,State, PlaybackState} from 'react-native-track-player';
const {height, width} = Dimensions.get('window');


const ScreenMusicPage = () => {
  const route = useRoute();
  //@ts-ignore
  const {item} = route.params;
  const playbackState=usePlaybackState();
  //@ts-ignore
  const {index}=route.params;
  const [currentSong, setCurrentSong] = useState(index);
  const ref = useRef<FlatList<any>>(null);

  useEffect(() => {
    setTimeout(()=>{
      ref.current?.scrollToIndex({animated: true, index: currentSong});
    },100)
  }, []);

  useEffect(
    ()=>{
  setupPlayer();
    },[]
  );

  const setupPlayer=async()=>{
    try{
    await TrackPlayer.setupPlayer();
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
    }
    catch(e){
  
    }
  }
//@ts-ignore
  const togglePlayback= async playbackState=>{
   if(playbackState === State.Paused || playbackState === State.Ready){
   await TrackPlayer.play();
   }
   else{
    await TrackPlayer.pause();
   }

  };

  return (
    <View style={styles.container}>
      <HomeHeader />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={ref}
        data={artistData}
        pagingEnabled
        renderItem={({item}) => {
          return (
            <View style={styles.bannerView}>
              <Image source={{uri: item.artwork}} style={styles.musicImage} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.artistName}>{item.artist}</Text>
            </View>
            
          );
          
        }}
      />

     
      <Slider style={styles.slider} />
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
              togglePlayback(playbackState);
            }
          }}>
          <Previous />
        </TouchableOpacity>
        <TouchableOpacity onPress={ async ()=>{
        // await TrackPlayer.skipToPrevious();
        // togglePlayback(playbackState);
        await TrackPlayer.skip(2);
        await TrackPlayer.play();
        }}>
          <Play />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            if (artistData.length - 1 > parseInt(currentSong)) {
              setCurrentSong(parseInt(currentSong) + 1);
              ref.current?.scrollToIndex({
                animated: true,
                index: parseInt(currentSong) + 1,
              });
              await TrackPlayer.skip(parseInt(currentSong) + 1);
              togglePlayback(playbackState);
            }
          }}>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    //marginBottom: 10,
  },
  artistName: {
    fontSize: 18,
    color: '#555',
  },
  slider: {
    width: '90%',
    height: 40,
    alignSelf: 'center',
  },
  btnArea: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 50,
  },
});
