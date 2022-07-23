import React, { useEffect, useState } from 'react';
import {Text, Image} from 'react-native';
import { View } from 'react-native';
import twn from '../Tailwind';
import MaskInput from 'react-native-mask-input';
import { useNavigation } from '@react-navigation/native';

const DataPeriodo = () => {

    const [date, setDate] = React.useState('');
    const navigation = useNavigation();

    const testeOne = (masked) => {
        setDate(masked)
        const teste = masked.split('/')
        const dia = teste[0]
        const ano = teste[2]
            if (teste[1] == '01') {
                teste[1] = 1
            } else if (teste[0] == '02'){
                teste[1] = 2
            } else if (teste[1] == '03'){
                teste[1] = 3
            } else if (teste[1] == '04'){
                teste[1] = 4
            } else if (teste[1] == '05'){
                teste[1] = 5
            } else if (teste[1] == '06'){
                teste[1] = 6
            } else if (teste[1] == '07'){
                teste[1] = 7
            } else if (teste[1] == '08'){
                teste[1] = 8
            } else if (teste[0] == '09'){
                teste[1] = 9
            }  
            const mes = teste[1]
            console.log('dia',  dia)
            console.log('mes', mes)
            console.log('ano', ano)
    }

    

    return(
        <View style={twn`flex-1 justify-center w-full p-8 bg-pink-300`} >
            <Image
                style={twn`w-32 h-32 ml-24 mb-8`}
                source={require('../images/agenda.jpg')}
            />

            <Text style = {twn`text-lg font-bold text-teal-600`}>
                Informe a Data do Último Período
            </Text>
            <MaskInput
                style = {twn`text-sm mt-4 mb-4 bg-white text-center p-1 border border-teal-600 rounded-md `}
                value={date}
                placeholder={'Digite a data'}
                onChangeText={testeOne}
                mask={[/\d/, /\d/, '/' , /\d/, /\d/, '/', /\d/, /\d/]}
            />

            <Text   
                style={twn`bg-teal-500 border-2 border-teal-600 text-center text-white py-2 font-bold text-sm rounded-md mt-16 ml-32`}
                //onPress={() => navigation.navigate('Rota')}
                //onPress={(testeOne)}
                > 
                Próximo
            </Text>
        </View>
    );
}

export default DataPeriodo;