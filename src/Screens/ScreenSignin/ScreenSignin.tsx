import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from '../../CommonComponent/Header';
import { Controller, useForm } from 'react-hook-form';
import { LoginFormData } from './utils/types';
import { loginSchema } from './utils/LoginValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import BasicAppButton from '../../CommonComponent/BasicAppButton';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../utils/firebaseAuth';

const ScreenSignin = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });
  const dispatch = useDispatch();

  const onSubmit = (data: LoginFormData) => {
    loginUser(data.email, data.password, dispatch);
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.text}>
      <Text style={styles.signin}>Sign In</Text>
      <Text style={styles.describtion}>If you need any support <Text style={{color:'#42C83C'}}>click here</Text></Text>
      </View>
      <View style={styles.inputContainer}>
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
     <Text style={styles.recovery}>Recovery password</Text>
     <View style={styles.button}>
     <BasicAppButton title="Sign In" onPress={handleSubmit(onSubmit)} height={70} />
     </View>
     <View style={styles.lineContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.line} />
      </View>
      <Text style={styles.member}>not a member ? <Text style={{fontFamily:'Satoshi Bold',color:'#24A0ED'}}>register now</Text></Text>
     </View>
  );
};

export default ScreenSignin;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  inputContainer: {
    top:'20%',
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
  top:'11%'
  },
  recovery:{
    fontSize:14,
    fontFamily:'Satoshi Medium',
    top:'22%',
    paddingLeft:18,
    color:'#383838'
  },
  button:{
    top:'25%'
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20, 
    top:'25%'
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
    top:'30%',
    textAlign:'center',
    color:'#383838'
  }
});
