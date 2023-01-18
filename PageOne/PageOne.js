import React , { useState } from 'react';
import {Text, TextInput, View, ScrollView} from 'react-native';
import twn from '../Tailwind';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useForm, Controller} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { fb } from '../firebaseconfig'
import { db } from "../firebaseconfig"


const schema = yup.object({
    nome: yup.string().required("Informe Seu Nome"),
    sobrenome: yup.string().required("Informe Seu Sobrenome"),
    email: yup.string().email("Email Inválido").required("Informe Seu Email"),
    password: yup.string().min(6, "A senha deve ter pelo menos 6 digitos").required("Informe a Senha"),
})


const erroPass = yup.object({
    Confirmationpassword:yup.string("As senhas não estão iguais")
})

export default function Registrar ({ navigation }){

    const [pass, setPass] = useState('')


    const {control, handleSubmit, formState:{ errors }} = useForm({
        resolver: yupResolver(schema)
    })

    const database = fb.firestore();
    function handleSingIn (data){
       var name = data.nome
       var sobrename = data.sobrenome
       
        //Condição para registrar um novo usuário
        if (data.password === data.Confirmationpassword){
            setPass('')
            fb.auth().createUserWithEmailAndPassword (data.email, data.password)
            .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            var dia = 0
            var mes = 0
            var ano = 0

            db.collection("MyCollection").doc(user.uid).set({
                dia:dia,
                mes: mes,
                ano:ano,
                id: user.uid,
                nome: name,
                sobrenome: sobrename,
                email: data.email,
                senha: data.password,
            })

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
            setPass('As senhas não estão iguais')          
        }
        
    }

    return(
        <ScrollView> 
            <View  style={twn`flex-1 justify-center w-full p-8 bg-white`}> 
            <Text style={twn`text-pink-500 text-sm font-bold mb-2 mt-4 `} > 
              Nome
            </Text>
            <Controller
                control={control}
                name="nome"
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
                {errors.nome && <Text style={twn`text-red-600`}>{errors.nome?.message}</Text>}

                <Text style={twn`text-pink-500 text-sm font-bold mb-2 mt-4 `} > 
              Sobrenome
            </Text>
            <Controller
                control={control}
                name="sobrenome"
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
            {errors.sobrenome && <Text style={twn`text-red-600`}>{errors.sobrenome?.message}</Text>}

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

        <Text style={twn`text-pink-500 text-sm font-bold mb-2 mt-4 `} > 
              Password
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
          <Text style={twn`text-red-600`}>
                {pass}
        </Text>


            <Text style={twn`text-pink-500 text-sm font-bold mb-2 mt-4 `} > 
              Confirmar Senha
            </Text>
          <Controller
              control={control}
              name="Confirmationpassword"
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
             {errors.Confirmationpassword && <Text style={twn`text-red-600`}>{errors.Confirmationpassword?.message}</Text>}
          <TouchableOpacity style={twn`bg-pink-300 mb-2 mt-2 rounded-md`} onPress={handleSubmit(handleSingIn)}> 
              <Text style={twn`bg-pink-500 text-center text-white py-2 font-bold text-sm rounded-md`}
                  >Registrar Usuário
              </Text>
          </TouchableOpacity>
            </View>           
      </ScrollView>
  );
};



