import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../../utils/types/interface';
import { HomeData } from '../../ScreenHome/utils/types';

export type ScreenMusicProp=NativeStackNavigationProp<AppStackParamList>
export type ScreenMusicPageParams = {
    item: HomeData; 
    index:number;
  };