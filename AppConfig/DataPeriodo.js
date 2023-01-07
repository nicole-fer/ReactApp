import React, { useEffect, useId, useState } from 'react';
import {Text, Image} from 'react-native';
import { View } from 'react-native';
import twn from '../Tailwind';
import MaskInput from 'react-native-mask-input';
import { useNavigation } from '@react-navigation/native';
import { fb } from '../firebaseconfig';
import { db } from '../firebaseconfig';

const DataPeriodo = ({ route, navigation }) => {
    var user = fb.auth().currentUser;

    const [date, setDate] = React.useState('');

    /* Para add no banco */
    const [dataPartoDia, setDataPartoDia] = useState(null)
    const [dataPartoMes, setDataPartoMes] = useState(null)
    const [dataPartoAno, setDataPartoAno] = useState(null)

    /* Caso escolher Periodo, ele não mostra parto, caso escolha parto, ele nao mostra periodo */
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

        setDataPartoDia(newDia)
        setDataPartoMes(newMes)
        setDataPartoAno(newAno)
    }

    console.log(date)

    const dataFinal = (dia,mes,ano) => {
        dia = dataPartoDia
        mes = dataPartoMes
        ano = dataPartoAno

        console.log(dia) 
        console.log(mes)
        console.log(ano)
        //caso o mes for maior que 4 o ano soma mais 1
        if (mes >= 4){
            // caso seja no comeco ou no meio do mes
            if((mes == 4 || mes == 5 || mes == 6 || mes == 7 || mes == 8 || mes == 9 || mes == 10 || mes == 11 || mes == 12) && (dia <= 23)){
                const newDia = dia + 7
                const newMes = mes - 3
                const newAno = ano + 1

                console.log([newMes, newDia, newAno])
                db.collection("MyCollection").doc(user.uid).update({
                    dia: newDia,
                    mes: newMes,
                    ano: newAno,
                 }).then(documentSnapshot => {
                    if (documentSnapshot.exists) {
                        console.log('User updated!');
                    }
                 })
                 navigation.navigate('Rota')
            }

            // caso mes tenha 30 dias
            else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia >= 24)) {
                const newDia = dia - 23
                const newMes = mes - 2
                const newAno = ano + 1

                console.log([newMes, newDia, newAno])
                db.collection("MyCollection").doc(user.uid).update({
                    dia: newDia,
                    mes: newMes,
                    ano: newAno,
                 }).then(documentSnapshot => {
                    if (documentSnapshot.exists) {
                        console.log('User updated!');
                    }
                 })
                 navigation.navigate('Rota')
            }
            // meses com 31 dias
            else if ((mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia >=25)){
                const newDia = dia - 24 // 30 - 7
                const newMes = mes - 2
                const newAno = ano + 1

                console.log([newMes, newDia, newAno])
                db.collection("MyCollection").doc(user.uid).update({
                    dia: newDia,
                    mes: newMes,
                    ano: newAno,
                 }).then(documentSnapshot => {
                    if (documentSnapshot.exists) {
                        console.log('User updated!');
                    }
                 })
                 navigation.navigate('Rota')
            }
        } 
        
        //caso o mes for menor de ou igual a 3 o ano é o mesmo
        else if (mes <= 3) {
            // Caso seja no comeco ou no final do mes 
            if((mes == 1 || mes == 2 || mes == 3 ) && (dia <= 24)) {
                const newDia = dia + 7 // mes é de 31 dias
                const newMes = mes + 9
                const newAno = ano 
                console.log([newMes, newDia, newAno])
                 db.collection("MyCollection").doc(user.uid).update({
                    dia: newDia,
                    mes: newMes,
                    ano: newAno,
                 }).then(documentSnapshot => {
                    if (documentSnapshot.exists) {
                        console.log('User updated!');
                    }
                 })
                 navigation.navigate('Rota')
            }
            //Tratamento de excessao caso o dia for no final do mes
            else if ((mes == 1 || mes == 3 ) && (dia >= 25)){
                const newDia = dia - 24 // mes é de 31 dias
                const newMes = mes + 10
                const newAno = ano 
                console.log([newMes, newDia, newAno])
                db.collection("MyCollection").doc(user.uid).update({
                    dia: newDia,
                    mes: newMes,
                    ano: newAno,
                 }).then(documentSnapshot => {
                    if (documentSnapshot.exists) {
                        console.log('User updated!');
                    }
                 })
                 navigation.navigate('Rota')
            }
            else if (mes == 2 && dia >=22){ // tratamento de excessao em fevereiro
                const newDia = dia - 21 // 28-7
                const newMes = mes + 10
                const newAno = ano 
                console.log([newMes, newDia, newAno])
                db.collection("MyCollection").doc(user.uid).update({
                    dia: newDia,
                    mes: newMes,
                    ano: newAno,
                 }).then(documentSnapshot => {
                    if (documentSnapshot.exists) {
                        console.log('User updated!');
                    }
                 })
                 navigation.navigate('Rota')
            }
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
                        //onPress={() => navigation.navigate('Rota')}
                        onPress={(dataFinal)}
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
                        onChangeText={(masked) => {
                            setDate(masked)
                            const teste = masked.split('/')
                            const dia = teste[0]
                            const mes = teste[1]
                            const ano = teste[2]
                            const newDia = parseInt(dia)
                            const newMes = parseInt(mes)
                            const newAno = parseInt (ano) 
                            db.collection("MyCollection").doc(user.uid).update({
                                dia: newDia,
                                mes: newMes,
                                ano: newAno,
                             }).then(documentSnapshot => {
                                if (documentSnapshot.exists) {
                                    console.log('User updated!');
                                }
                             })
                        }}
                        mask={[/\d/, /\d/, '/' , /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                    />
                    <Text   
                        style={twn`bg-teal-500 border-2 border-teal-600 text-center text-white py-2 font-bold text-sm rounded-md mt-16 ml-32`}
                        onPress={() => navigation.navigate('UnidadeSaude')}
                        > 
                        Próximo
                    </Text>
                </View>
            ) : null}
        </View>

    );
}
export default DataPeriodo;