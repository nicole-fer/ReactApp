import React, { useEffect } from 'react';
import {Text, Image} from 'react-native';
import { View } from 'react-native';
import tw from "tailwind-react-native-classnames";
import twn from '../Tailwind';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-web';
import MaskInput from 'react-native-mask-input';

import { title } from './TempoGravidez';


const DataParto = (props) => {
    console.log(title)

    //const navigation = useNavigation();

    const [date, setDate] = React.useState('');
    const navigation = useNavigation();

    return(
        <View style={twn`flex-1 justify-center w-full p-8 bg-pink-300`} >
            <Image
                style={twn`w-32 h-32 ml-24 mb-8`}
                source={require('../images/agenda.jpg')}
            />

            <Text style = {twn`text-lg font-bold text-teal-600`}>
                Informe a Data Provável do Parto
            </Text>
            <MaskInput
                style = {twn`text-sm mt-4 mb-4 bg-white text-center p-1 border border-teal-600 rounded-md `}
                value={date}
                placeholder={'Digite a data'}
                onChangeText={(masked, unmasked) => {
                    setDate(masked)

                    console.log(masked)
                    console.log(unmasked)
                }}
                mask={[/\d/, /\d/, '/' , /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
            />

            <Text   
                style={twn`bg-teal-500 border-2 border-teal-600 text-center text-white py-2 font-bold text-sm rounded-md mt-16 ml-32`}
                onPress={() => navigation.navigate('Rota')}> 
                Próximo
            </Text>
        </View>
    );
}

export default DataParto;