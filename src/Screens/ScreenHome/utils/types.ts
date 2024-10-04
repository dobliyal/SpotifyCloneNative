export type HomeData = {
  artwork: string | undefined;
  id: number;
  artist: string;
  duration: number;
 title: string;
  
};
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../../utils/types/interface';

export type ScreenHomeProp=NativeStackNavigationProp<AppStackParamList,"ScreenMusicPage">
