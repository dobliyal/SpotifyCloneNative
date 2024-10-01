import React from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Header from '../../CommonComponent/Header';
import { Controller, useForm } from 'react-hook-form';
import { SignUpFormData } from './utils/types';
import { signUpSchema } from './utils/SignUpValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import BasicAppButton from '../../CommonComponent/BasicAppButton';
import { signupUser } from '../../utils/firebaseAuth';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { ScreenRegisterProp } from './utils/types';

const ScreenRegister = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpSchema),
  });
  const dispatch = useDispatch();
  const navigation = useNavigation<ScreenRegisterProp>();

  const onSubmit = (data: SignUpFormData) => {
    signupUser(data, dispatch);
  };

  return (
    <ScrollView   style={styles.container}>
      <Header />
      <View style={styles.text}>
      <Text style={styles.signin}>Register</Text>
      <Text style={styles.describtion}>If you need any support <Text style={{color:'#42C83C'}}>click here</Text></Text>
      </View>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}  
              placeholder="Full Name"
              placeholderTextColor="#A4A9AE"
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
      </View>
      <View style={[styles.inputContainer,{marginTop:15}]}>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}  
              placeholder="Enter Username Or Email"
              placeholderTextColor="#A4A9AE"
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
      </View>

      <View style={[styles.inputContainer, {marginTop:15}]}>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}  
              placeholder="Password"
              secureTextEntry
              placeholderTextColor="#A4A9AE"
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
      </View>
     <View style={styles.button}>
     <BasicAppButton title="Creat Account" onPress={handleSubmit(onSubmit)} height={70} />
     </View>
     <View style={styles.lineContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.line} />
      </View>
      <Text style={styles.member}>Do you Have An Account? <Text onPress={()=>navigation.navigate("ScreenSignin")} style={{fontFamily:'Satoshi Bold',color:'#24A0ED'}}>Sign In</Text></Text>
     </ScrollView>
  );
};

export default ScreenRegister;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  inputContainer: {
    top:'13%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#A4A9AE',
    paddingLeft: 25,
    borderRadius: 30,
    color: '#000', 
    height:70
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  signin:{
  fontSize:30,
  fontFamily:'Satoshi Bold',
  color:'#383838',
  },
  describtion:{
  fontSize:12,
  fontFamily:'Satoshi Regular',
  color:'#383838',
  top:'25%',
  },
  text:{
  alignItems:'center',
  top:'6%'
  },
  recovery:{
    fontSize:14,
    fontFamily:'Satoshi Medium',
    top:'22%',
    paddingLeft:18,
    color:'#383838'
  },
  button:{
    top:'18%'
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20, 
    top:'19%'
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#A4A9AE',
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#A4A9AE',
  },
  member:{
    fontSize:14,
    fontFamily:'Satoshi Medium',
    top:'20%',
    textAlign:'center',
    color:'#383838'
  }
});
