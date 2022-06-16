import React , { useState } from 'react';
import {SafeAreaView, Text, TextInput, Image, KeyboardAvoidingView, View, Button, Touchable} from 'react-native';
import twn from '../Tailwind';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useForm, Controller, set} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import firebase from '../firebaseconfig'


console.log(firebase.auth);
console.log(firebase.default.auth);

const schema = yup.object({
    email: yup.string().email("Email Inválido").required("Informe Seu Email"),
    password: yup.string().min(6, "A senha deve ter pelo menos 6 digitos").required("Informe a Senha"),
})


 export default function Login({navigation}) {
    
    const {control, handleSubmit, handleReg, formState:{ errors }} = useForm({
        resolver: yupResolver(schema)
    })
    const database = firebase.firestore();
    function handleSingIn (data){
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          navigation.navigate('PageTwo', { idUser: user.uid})
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
        });
    }
 
    return (
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

            <TouchableOpacity style={twn`bg-sky-300 mb-2 mt-2 rounded-md`} onPress={handleSubmit(handleSingIn)}> 
                <Text style={twn`bg-sky-400 text-center text-white py-2 font-bold text-sm rounded-md`}
                    // onPress={() => {handleSubmit(handleSingIn)}}>
                    >Acessar
                </Text>
            </TouchableOpacity>

            <Text style={twn`bg-rose-50  text-center border-rose-400 text-rose-400 py-2 font-bold text-sm rounded-md`}
                      onPress={() => navigation.navigate('PageOne')}>
                      Registrar
            </Text>

 
        </SafeAreaView>
        
    );
};





