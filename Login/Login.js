import React , { useState } from 'react';
import {SafeAreaView, Text, TextInput, Image, View } from 'react-native';
import twn from '../Tailwind';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { fb } from '../firebaseconfig'


const schema = yup.object({
    email: yup.string().email("Email Inválido").required("Informe Seu Email"),
    password: yup.string().min(6, "A senha deve ter pelo menos 6 digitos").required("Informe a Senha"),
})

 export default function Login({navigation}) {

    const [erroLogin, setErroLogin] = useState('')
    
    const {control, handleSubmit, handleReg, formState:{ errors }} = useForm({
        resolver: yupResolver(schema)
    })
    const database = fb.firestore();
    function handleSingIn (data){
        fb.auth().signInWithEmailAndPassword(data.email, data.password)
        .then((userCredential) => {
          // Signed in
          setErroLogin('')
          var user = userCredential.user;
          navigation.navigate('TelaBoasVindas', { idUser: user.uid})

        })
        .catch((error) => {
          setErroLogin('Email ou senha estão errados, tente novamente')
          var errorCode = error.code;
          var errorMessage = error.message;
        });
    }
 
    return (
        <SafeAreaView style={twn`flex-1 justify-center w-full pl-8 pr-8 bg-white pt-6`}>            
            <Image
                style={twn`w-32 h-32 ml-20`}
                source={require('../images/LogoFak.jpg')}
            />

            <Text style={twn`text-pink-500 text-sm font-bold mb-2 mt-4 `} > 
                Email
            </Text>

            <Controller
                control={control}
                name="email"
                render={({field: { onChange, onBlur, value}})=>(
                    <TextInput 
                        style={twn`border rounded w-full py-2 px-3 text-pink-700 mb-3 border-pink-600 bg-pink-50`}
                        returnKeyType='go'
                        autoCorrect={false}
                        onChangeText ={onChange}
                        onBlur = {onBlur}
                        value={value}
                    /> 
                )}
                />
            {errors.email && <Text style={twn`text-red-600`}>{errors.email?.message}</Text>}

            <Text style={twn`text-red-600`}>
                {erroLogin}
            </Text>

            <Text style={twn`text-pink-500 text-sm font-bold mb-2 mt-4 `} > 
                Senha
            </Text>

            <Controller
                control={control}
                name="password"
                render={({field: { onChange, onBlur, value}})=>(
                    <TextInput 
                        style={twn`border rounded w-full py-2 px-3 text-pink-700 mb-3 border-pink-600 bg-pink-50`}
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

            <TouchableOpacity style={twn`bg-pink-300 mb-2 mt-2 rounded-md`} onPress={handleSubmit(handleSingIn)}> 
                <Text style={twn`bg-pink-500 text-center text-white py-2 font-bold text-sm rounded-md`}
                    >Acessar
                </Text>
            </TouchableOpacity>

            <Text style={twn`bg-pink-50  text-center border-solid border-2 border-pink-500 text-pink-500 py-2 font-bold text-sm rounded-md`}
                      onPress={() => navigation.navigate('Registro')}>
                      Registrar
            </Text>

            <Text style={twn`pt-12 pb-0 pl-24 pr-24 bg-white text-teal-500 text-xs text-center`}>Aplicativo desenvolvido por  Nicole Fernandes</Text>
                <View style={twn`pb-0 pt-4 pl-32 bg-white`}>
                    <Image
                        style={twn`w-8 h-8`}
                        source={require('../images/LogoFak.jpg')}
                    /> 
                </View>
        </SafeAreaView>
        
    );
};





