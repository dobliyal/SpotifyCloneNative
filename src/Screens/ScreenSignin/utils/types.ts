import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../utils/types/interface';

export type LoginFormData={
    email:string;
    password:string;
};

export type ScreenSignInProp=NativeStackNavigationProp<AuthStackParamList>