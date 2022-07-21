import React, { useEffect } from 'react';
import {Text, Image} from 'react-native';
import { View } from 'react-native';
import tw from "tailwind-react-native-classnames";
import twn from '../Tailwind';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-web';

const TelaBoasVindas = () => {

    const navigation = useNavigation();

    return(
        <View style={twn`flex-1 justify-center w-full p-8 bg-teal-200`} >
            <Image
            style={twn`w-48 h-48 ml-16 mb-8`}
            source={require('../images/LogoFakTeal.jpg')}
        />
            <Text
                style = {twn`text-2xl mt-4 mb-4 text-center font-bold`}>
                Bem Vinda, mamãe !
            </Text>
            <Text
                style={twn`text-lg m-2 text-center`} > Vamos configurar o aplicativo para o primeiro uso! 
            </Text>
            <View style= {twn`mt-24 ml-16`}>
            <Text 
                style={twn`bg-pink-500 text-center text-white py-2 font-bold text-sm rounded-md ml-24 `}
                onPress={() => navigation.navigate('TempoGravidez')}>
                Seguinte
              </Text>
            </View>
        </View>
    );
}

export default TelaBoasVindas;