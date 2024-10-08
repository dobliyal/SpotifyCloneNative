import React ,{ useState }from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View,FlatList, ScrollView } from 'react-native'
import HomeHeader from '../../CommonComponent/HomeHeader'
import FrameHome from '../../assets/Image/FrameHome'
import { itemHead } from './utils/const'
import { artistData } from '../../utils/data/data'
import { HomeData } from './utils/types'
import { useNavigation } from '@react-navigation/native';
import { ScreenHomeProp } from './utils/types';
import Header from '../../CommonComponent/Header'


const ScreenHome = () => {
  const navigation = useNavigation<ScreenHomeProp>();

  const [selectedTab,setSelectedTab]=useState('News');

  const renderArtist = ({ item,index}:{item:HomeData; index:number}) => (
    <TouchableOpacity style={styles.artistContainer} 
    onPress={()=>navigation.navigate("ScreenMusicPage",
      {
        item:item,
      }
    )
    }>
      <Image
        source={{ uri: item.artwork }}
        style={styles.artistImage}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.artistName}>{item.artist}</Text>
    </TouchableOpacity>
  );


  return (
    <ScrollView style={styles.container}>
      <Header/>
      <View style={styles.top}>
      <FrameHome/>
      <Image 
        source={require('../../assets/Image/home_artist.png')} 
          style={styles.homeartist}
      />
      
      </View>
      <View style={styles.tabBar}>
        {itemHead.map((tab) => (
          <TouchableOpacity 
            key={tab}
            style={styles.tab}
            onPress={() => setSelectedTab(tab)}
          >
            <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>
              {tab}
            </Text>
            {selectedTab === tab && <View style={styles.activeTabIndicator} />}
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.artist}>
        <FlatList
          data={artistData}
          renderItem={renderArtist}
          keyExtractor={(item) => item.id.toString()}
          horizontal 
          showsHorizontalScrollIndicator={false} 
        />
      </View>
      <View style={styles.playlist}>
        <View style={styles.playhead}>
        <Text style={styles.playlisttext}>Playlist</Text>
        <Text style={styles.seemore}>See More</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default ScreenHome

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top:{
    alignItems:'center',
    top:'4%',
  },
  homeartist:{
    bottom:'58%',
    left:'20%'
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
   bottom:'18%'
  },
  tab: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    color: '#BEBEBE', 
    fontFamily:'Satoshi Medium'  ,
  },
  activeTabText: {
    fontWeight: 'bold',
    color:'#000000'
  },
  activeTabIndicator: {
    height: 2,
    backgroundColor: '#42C83C',
    width: '50%',
    marginTop: 4,
  },
  artist: {
    left: 18,
    bottom:'15%'
  },
  artistContainer: {
    marginRight: 20, 
  },
  artistImage: {
    width: 147,
    height: 185,
    borderRadius: 30, 
  },
  title:{
    fontSize:16,
    color:'#000000',
    left:'8%',
    top:'2%',
    fontFamily:'Satoshi Bold'
     },
  artistName: {
    fontSize: 14,
    fontFamily:'Satoshi Regular',
    left:'8%',
    top:'2%',
    paddingBottom:20
  },
  playhead:{
    flexDirection:'row',
    textAlign:'center',
    justifyContent:'space-between',
  },
  playlist:{
    padding:'5%',
    bottom:'16%',
  },
  playlisttext:{
    fontSize:20,
    fontFamily:'Satoshi Bold',
    color:'#131313'
  },
  seemore:{
    fontSize:12,
    fontFamily:'Satoshi Regular',
  }
})
