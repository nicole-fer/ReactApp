import React, { useState, useEffect } from 'react';
import {Text, Image} from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native';
import { View } from 'react-native';
import tw from "tailwind-react-native-classnames";
import twn from '../Tailwind';
import WeeklyCalendar from 'react-native-weekly-calendar';
import 'moment/locale/pt-br' 
import moment from 'moment';
import { fb } from '../firebaseconfig';
import { db } from '../firebaseconfig';
import * as Progress from 'react-native-progress';
import styled from "styled-components/native";


export default function PageTwo ({}){
    moment.locale('pt-br'); 
    var date= moment().format("dddd, LL")

    const [firebaseData, setFirebaseData] = useState({})
    var user = fb.auth().currentUser;    

    useEffect(() => {
        db.collection('MyCollection').doc(user.uid).get().then(documentSnapshot  => {
            if (documentSnapshot.exists) {
              setFirebaseData(documentSnapshot.data())
            }
        });
    },[])
   console.log(firebaseData)

    var dataTesteDois = moment(`${firebaseData.mes}/${firebaseData.dia}/${firebaseData.ano}`)
    var dataOne = new Date(dataTesteDois)
    var dataDois = new Date()
    var diferenca = dataOne.getTime() - dataDois.getTime()
    var diasEspera = Math.ceil(diferenca/(1000*3600*24))
    console.log(diasEspera, 'diasEspera')

    /* Considerando que uma gravidez em media tenha 280 dias, para o cálculo das semanas */

    var semanasDias = 280 - diasEspera
    var aux=1
    var cont = 0

    while(aux <= semanasDias){
        aux = aux + 7
        cont = cont + 1
    }
    aux = aux -1
    
    if (aux>semanasDias){
      var semanas = (aux-7)/7
      console.log('semanas', semanas)
      var dataDias = aux-semanasDias
      console.log(`Você esta com ${semanas} semanas e ${dataDias} dias`)
      
    } else if (aux == semanasDias){
      var semanas = aux/7
      dataDias = aux-semanasDias
      console.log(`Você esta com ${semanas} semanas e ${dataDias} dias`)
    }

    if(semanas <=13){
        var message = "1º Trimestre"
    } else if(semanas >=14 && semanas <=26){
        var message = "2º Trimestre"
    } else if(semanas >= 27){
        var message = "3º Trimestre"
    }
  /* Calculo da porcentagem */
  var porcentagem = diasEspera/280
  console.log(porcentagem)
    return(
        <ScrollView style={twn` w-full bg-white`}> 
            <Text style= {tw`px-4 pt-2 pb-2 mt-2 text-2xl font-bold`} > Hoje </Text>
            <View style={twn`bg-pink-100 px-4 pt-2 pb-2 text-center border border-pink-400 mt-2 text-lg ml-4 mr-4 shadow-md rounded-md`}>
                <WeeklyCalendar
                    style={twn`h-24 w-72 bg-pink-100 mb-4`}
                    locale = 'pt'
                /> 
                <Text style={twn`text-center text-teal-600 mb-4 mt-2`}> {date}</Text>
                <Image
                    style={twn`w-64 h-64 ml-6 border border-pink-300 mt-2`}
                    source={require('../images/One-month.png')}
                />
            </View>
            <View style= {twn`bg-pink-100 px-4 pt-2 pb-2 mb-2 text-center border border-pink-400 mt-4 text-lg ml-4 mr-4 shadow-md rounded-md`} >
                <Text style= {tw`text-lg mb-2 text-center font-bold text-pink-700`} > {semanas} Semanas, {dataDias} dias</Text>
                <Text style= {tw`text-center`} > {message}  </Text>
            </View>   
            <View style= {twn`bg-pink-100 px-4 pt-2 pb-2 mb-6 text-center border border-pink-400 mt-2 text-lg ml-4 mr-4 shadow-md rounded-md`} >
                <Text style= {twn`text-center text-teal-600 mt-2 mb-2`} > Faltam: {diasEspera} dias </Text>
                <Progress.Bar progress={porcentagem} width={290} color={`#db2777`}/>
                <Text style= {twn`text-center text-teal-600 mt-2`} > Data Provável do Parto: {firebaseData.dia}/{firebaseData.mes}/{firebaseData.ano} </Text> 
                {/* Aqui quero botar um componente que vai carregando de acorod com as semanas, quanto mais perto da data, mais preenchido vai ficando */}
            </View>   
        </ScrollView>
    );
}