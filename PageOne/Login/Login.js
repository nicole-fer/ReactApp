import React from 'react';
import {SafeAreaView, Text, TextInput, Image} from 'react-native';
import tw from "tailwind-react-native-classnames";

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Login({navigation}) {
    const [text, onChangeText] = React.useState("");

    return (
        <SafeAreaView style={tw`flex-1 justify-center w-full p-8 bg-pink-50`}>
            <Image
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            /> 
            <Text style={tw`text-indigo-500 text-sm font-bold mb-2`}> Username</Text>
            <TextInput 
                style={tw`border rounded py-2 px-3 text-grey-400 border-indigo-900`}
                onChangeText ={onChangeText}
                value={text}
            />
             <Text style={tw`text-indigo-500 text-sm font-bold mb-2 mt-4 `}> Password</Text>
             <TextInput
                style={tw`border rounded w-full py-2 px-3 text-blue-700 mb-3 border-indigo-900`}
                returnKeyType='go'
                placeholder='*****************'
                secureTextEntry={true}
                password={true}
                autoCorrect={false}
            />
            <Text style={tw`bg-pink-500 text-center text-white py-2 font-bold text-sm mb-2 mt-2 rounded-md`}> {' '} 
                <Text 
                    style={tw``} 
                    onPress={() => navigation.navigate('PageOne')}> 
                    Acessar
                </Text> 
            </Text>

            <Text style={tw`bg-pink-500 text-center text-white py-2 font-bold text-sm mb-2 mt-2 rounded-md`}> {' '} 
                <Text 
                    style={tw``} 
                    onPress={() => navigation.navigate('PageTwo')}> 
                    Registrar
                </Text> 
            </Text>

        </SafeAreaView>
    );
};

