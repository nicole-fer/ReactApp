import React, { useEffect, useState } from 'react';
import {Text, Image} from 'react-native';
import { View } from 'react-native';
import twn from '../Tailwind';
import MaskInput from 'react-native-mask-input';
import { useNavigation } from '@react-navigation/native';

const DataPeriodo = ({ route }) => {

    const [date, setDate] = React.useState('');
    const navigation = useNavigation();
    console.log(route.params.test)

    const [shouldShowPe, setShouldShowPe] = useState(()=>{
        if(route.params.test == 'periodo'){
            return true
        } else {
            return false
        }
    });
    const [shouldShowPa, setShouldShowPa] = useState(() => {
        if(route.params.test == 'parto'){
            return true
        } else {
            return false
        }
    });

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
            const newDia = parseInt(dia)
            const newMes = parseInt(mes)
            const newAno = parseInt (ano) 
            console.log('dia',  dia)
            console.log('mes', mes)
            console.log('ano', ano)

        if (mes >= 4) {
            const CalcProvPartoMes = newMes - 3
            const CalcProvPartoDia = newDia + 7
            const CalcProvAno = newAno + 1
            const DataFinal = [CalcProvPartoDia, CalcProvPartoMes, CalcProvAno]
            console.log(DataFinal)
        } else if (mes <= 3) {
            const CalcProvPartoDia = newDia + 7
            const CalcProvPartoMes = newMes + 9
            const DataFinal = [CalcProvPartoDia, CalcProvPartoMes, newAno]
            console.log(DataFinal)

        }

    }

    return(
        <View style={twn`flex-1 justify-center w-full p-8 bg-pink-300`} >
            <Image
                style={twn`w-32 h-32 ml-24 mb-8`}
                source={require('../images/agenda.jpg')}
            />

            {shouldShowPe ? ( 
                <View> 
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
                        //onPress={() => navigation.navigate('Rota', DataFinal)}
                        //onPress={(testeOne)}
                        > 
                        Próximo
                    </Text>
                </View>
            ) : null}

                    {/* Parte sobre o parto */}
            {shouldShowPa ? (
                <View  >
                    <Text style = {twn`text-lg font-bold text-teal-600`}>
                            Informe a Data provável do Parto
                    </Text>
                    <MaskInput
                        style = {twn`text-sm mt-4 mb-4 bg-white text-center p-1 border border-teal-600 rounded-md `}
                        value={date}
                        placeholder={'Digite a data'}
                        onChangeText={(masked, unmasked) => {
                            setDate(masked)

                            console.log(masked)
                            console.log(unmasked)
                            const teste = masked.split('/')
                            const dia = teste[0]
                            const mes = teste[1]
                            const ano = teste[2]
                            const newDia = parseInt(dia)
                            const newMes = parseInt(mes)
                            const newAno = parseInt (ano) 
                            const DataPartoF = [newDia, newMes, newAno]
                            console.log(DataPartoF)

                        }}
                        mask={[/\d/, /\d/, '/' , /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                    />
                    <Text   
                        style={twn`bg-teal-500 border-2 border-teal-600 text-center text-white py-2 font-bold text-sm rounded-md mt-16 ml-32`}
                        //onPress={() => navigation.navigate('Rota', {DataPartoF})}
                        //onPress={(testeOne)}
                        > 
                        Próximo
                    </Text>
                </View>
            ) : null}
        </View>

    );
}



export default DataPeriodo;