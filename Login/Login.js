import React from 'react';
import {SafeAreaView, Text, TextInput, Image, KeyboardAvoidingView, View} from 'react-native';
import tw from "tailwind-react-native-classnames";
import twn from '../Tailwind';

export default function Login({navigation}) {
    const [text, onChangeText] = React.useState("");

    return (
        <SafeAreaView style={twn`flex-1 justify-center w-full p-8 bg-rose-50`}>
            <View style={tw`justify-center text-center px-28 pb-4`}>
                <Image
                    style={tw`w-20 h-20`}
                    source={require('../images/logo.png')}
                /> 
            </View>
            <Text style={twn`text-sky-400 text-sm font-bold mb-2 mt-4`}> Username</Text>
            <TextInput 
                style={twn`border rounded py-2 px-3 text-sky-800 border-sky-600 bg-sky-100`}
                onChangeText ={onChangeText}
                value={text}
            />
             <Text style={twn`text-sky-400 text-sm font-bold mb-2 mt-4 `}> Password</Text>
             <TextInput
                style={twn`border rounded w-full py-2 px-3 text-blue-700 mb-3 border-sky-600 bg-sky-100`}
                returnKeyType='go'
                secureTextEntry={true}
                password={true}
                autoCorrect={false}
            />
            <Text style={twn`bg-rose-400 text-center text-white py-2 font-bold text-sm mb-2 mt-2 rounded-md`}
                    onPress={() => navigation.navigate('PageOne')}>
                    Acessar
            </Text>

            <Text style={twn`bg-rose-400 text-center text-white py-2 font-bold text-sm mb-2 mt-2 rounded-md`}
                    onPress={() => navigation.navigate('PageOne')}>
                    Registrar
            </Text>
        </SafeAreaView>
        
    );
};



