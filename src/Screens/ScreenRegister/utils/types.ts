import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../utils/types/interface';

export interface SignUpFormData{
    username:string;
    email:string;
    password:string;
}

export type ScreenRegisterProp=NativeStackNavigationProp<AuthStackParamList,'ScreenSignin'>