import tw from "tailwind-react-native-classnames";
import React , { useState } from 'react';
import {SafeAreaView, Text, TextInput, Image, KeyboardAvoidingView, View, Button, Touchable} from 'react-native';
import twn from '../Tailwind';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useForm, Controller, set} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import firebase from '../firebaseconfig'
import Login from '../Login/Login'


const schema = yup.object({
    email: yup.string().email("Email Inválido").required("Informe Seu Email"),
    password: yup.string().min(6, "A senha deve ter pelo menos 6 digitos").required("Informe a Senha"),
})

const erroPass = yup.object({
    Confirmationpassword:yup.string("As senhas não estão iguais")
})

export default function Registrar (){
    const {control, handleSubmit, formState:{ errors }} = useForm({
        resolver: yupResolver(schema)
    })

    const database = firebase.firestore();
    function handleSingIn (data){
        console.log(data.password)
        console.log(data.Confirmationpassword)

        //Condição para registrar um novo usuário
        if (data.password === data.Confirmationpassword){
            firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            console.log("As senhas estão iguais, vai da bom")
            .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            navigation.navigate('Login', { idUser: user.uid})
            // ...
        })
            .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
                console.log(error.message);
            // ..
        });
        } else {
            alert("As senha não estão iguais")            
        }
        
    }

    return(
        <SafeAreaView style={twn`flex-1 justify-center w-full p-8 bg-yellow-100`}>            
        {/*       <Image
                  style={tw`w-32 h-32`}
                  source={require('../images/LogoFak.jpg')}
              /> */}
          <Text style={twn`text-rose-400 text-sm font-bold mb-2 mt-4 `} > 
              Email
          </Text>
          <Controller
              control={control}
              name="email"
              render={({field: { onChange, onBlur, value}})=>(
                  <TextInput 
                      style={twn`border rounded w-full py-2 px-3 text-rose-700 mb-3 border-rose-600 bg-rose-100`}
                      returnKeyType='go'
                      autoCorrect={false}
                      onChangeText ={onChange}
                      onBlur = {onBlur}
                      value={value}
                  /> 
              )}
              />
          {errors.email && <Text style={twn`text-red-600`}>{errors.email?.message}</Text>}

              <Text style={twn`text-rose-400 text-sm font-bold mb-2 mt-4 `} > 
              Password
          </Text>

          <Controller
              control={control}
              name="password"
              render={({field: { onChange, onBlur, value}})=>(
                  <TextInput 
                      style={twn`border rounded w-full py-2 px-3 text-rose-700 mb-3 border-rose-600 bg-rose-100`}
                      returnKeyType='go'
                      secureTextEntry={true}
                      password={true}
                      autoCorrect={false}
                      onChangeText ={onChange}
                      onBlur = {onBlur}
                      value={value}
                  /> 
              )}
              />

          {errors.password && <Text style={twn`text-red-600 `}>{errors.password?.message}</Text>}


            <Text style={twn`text-rose-400 text-sm font-bold mb-2 mt-4 `} > 
              Confirmar Senha
            </Text>
          <Controller
              control={control}
              name="Confirmationpassword"
              render={({field: { onChange, onBlur, value}})=>(
                  <TextInput 
                      style={twn`border rounded w-full py-2 px-3 text-rose-700 mb-3 border-rose-600 bg-rose-100`}
                      returnKeyType='go'
                      secureTextEntry={true}
                      password={true}
                      autoCorrect={false}
                      onChangeText ={onChange}
                      onBlur = {onBlur}
                      value={value}
                  /> 
              )}
              />
             {errors.Confirmationpassword && <Text style={twn`text-red-600`}>{errors.Confirmationpassword?.message}</Text>}
          <TouchableOpacity style={twn`bg-sky-300 mb-2 mt-2 rounded-md`} onPress={handleSubmit(handleSingIn)}> 
              <Text style={twn`bg-sky-400 text-center text-white py-2 font-bold text-sm rounded-md`}
                  >Registrar Usuário
              </Text>
          </TouchableOpacity>
      </SafeAreaView>
      
  );
};



