import React, { useEffect } from 'react';
import {Text, Image} from 'react-native';
import { View } from 'react-native';
import tw from "tailwind-react-native-classnames";
import twn from '../Tailwind';
import { useNavigation } from '@react-navigation/native';
import { AppRegistry } from 'react-native';
import App from '../App';

AppRegistry.registerComponent('main',() => App);


const navigation = useNavigation();

const TempoGravidez = () => {

    const submitChoice = (choice) => {
        if (choice == 'parto') {
            navigation.navigate('DataParto', { idUser: user.uid})
        }
        else if (choice == 'periodo') {
            navigation.navigate('DataPeriodo', { idUser: user.uid})
        }
    }

    return(
        <View style={twn`flex-1 justify-center w-full p-8 bg-teal-200`} >
            <Image
            style={twn`w-48 h-48 ml-16 mb-8`}
            source={require('../images/LogoFakTeal.jpg')}
        />
            <Text
                style = {twn`text-2xl mt-4 mb-4 text-center font-bold`}>
                Como você planeja definir o seu tempo de gravidez ?
            </Text>
            <Text 
                title = {'período'}
                style={twn`bg-pink-50 border-2 border-teal-600 text-center text-pink-800 py-2 font-bold text-sm rounded-md mb-2`}
                onPress={submitChoice(Save)}>
                Pela data em que meu último período começou
              </Text>
              <Text 
                title = {'parto'}
                style={twn`bg-pink-50 border-2 border-teal-600 text-center text-pink-800 py-2 font-bold text-sm rounded-md`}
                onPress={submitChoice(Save)}>
                Pela data de parto estimada
              </Text>
            <View style= {twn`mt-24 ml-16`}>
            <Text 
                style={twn`bg-pink-500 text-center text-white py-2 font-bold text-sm rounded-md ml-24`}
                onPress={() => navigation.navigate('PageOne')}>
                Seguinte
              </Text>
            </View>
        </View>
    );
}

export default TempoGravidez;