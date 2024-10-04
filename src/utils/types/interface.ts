import { HomeData } from "../../Screens/ScreenHome/utils/types";

export type AuthStackParamList = {
    ScreenSplash: undefined;
    ScreenGetstarted: undefined;
    ScreenMode: undefined;
    ScreenRegisterSignin: undefined;
    ScreenSignin: undefined;
    ScreenRegister: undefined;
  };
  
  export type AppStackParamList = {
    ScreenHome: undefined;
    ScreenFavourite:undefined;
    ScreenProfile:undefined;
    BottomNavigation:undefined;
    ScreenMusicPage: { item: HomeData; index:number}; 
  };
  