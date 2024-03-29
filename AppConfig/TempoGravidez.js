import React from 'react';
import {Text, Image } from 'react-native';
import { View } from 'react-native';
import twn from '../Tailwind';

const TempoGravidez = ( {navigation} ) => {
    //const navigation = useNavigation();

    const title = [{t:'periodo', k:1}, {t:'parto', k:2}];

    return(
        <View style={twn`flex-1 justify-center w-full p-8 bg-teal-200`} >
            <Image
            style={twn`w-48 h-48 ml-16 mb-8`}
            source={require('../images/logo.png')}
        />
            <Text
                style = {twn`text-2xl mt-4 mb-4 text-center font-bold`}>
                    Como você planeja definir o seu tempo de gravidez ?
            </Text>
            <Text 
                title = {title[0].t}
                key = {title[0].k}
                style={twn`bg-pink-50 border-2 border-teal-600 text-center text-pink-800 py-2 font-bold text-sm rounded-md mb-2 ml-2 mr-2 w-72`}
                onPress={() => navigation.navigate('DataPeriodo',{ test:'periodo' })}>
                    Pela data em que meu último período começou
              </Text>
              <Text 
                title = {title[1].t}
                key = {title[1].k}
                style={twn`bg-pink-50 border-2 border-teal-600 text-center text-pink-800 py-2 font-bold text-sm rounded-md ml-2 mr-2 w-72`}
                onPress={() => navigation.navigate('DataPeriodo',{ test:'parto' })}>
                    Pela data de parto estimada
              </Text>
        </View>
    );
}

export default TempoGravidez;