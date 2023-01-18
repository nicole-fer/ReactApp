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

/* Página Inicial, onde terá todas as infomações necessárias da gestação de acordo com a configuração específica de cada gestante */
export default function PageTwo ({navigation}){
    /* Adicionando configurações de data e hora (Brasil) */
    moment.locale('pt-br'); 
    var date= moment().format("dddd, LL")

    /* Pegando os dados do Firestore */
    const [firebaseData, setFirebaseData] = useState({})
    const [loading, setLoading] = useState(true);
    var user = fb.auth().currentUser;    

    useEffect(() => {
        db.collection('MyCollection').doc(user.uid).get().then(documentSnapshot  => {
            if (documentSnapshot.exists) {
              setFirebaseData(documentSnapshot.data());
              setLoading(false);
            }
        });
    },[])

    /* Cálculo de quantos dias faltam para o fim da gestação */
    var dataTesteDois = moment(`${firebaseData.mes}/${firebaseData.dia}/${firebaseData.ano}`)
    var dataOne = new Date(dataTesteDois)
    var dataDois = new Date()
    var diferenca = dataOne.getTime() - dataDois.getTime()
    var diasEspera = Math.ceil(diferenca/(1000*3600*24))

    /* Considerando que uma gravidez em media tenha 280 dias, para o cálculo das semanas */

    var semanasDias = 280 - diasEspera
    var aux=1
    var cont = 0

    /* CONTA AS SEMANAS DA GESTACAO */
    while(aux <= semanasDias){
        aux = aux + 7
        cont = cont + 1
    }
    aux = aux -1
    
    /* Mostra dinamicamente as semanas de acordo com a gestacao */
    if (aux>semanasDias){
      var semanas = (aux-7)/7
      var dataDias = aux-semanasDias
      dataDias = 7 - dataDias
      
    } else if (aux == semanasDias){
      var semanas = aux/7
      dataDias = aux-semanasDias
    }

    if(semanas <=13){
        var message = "1º Trimestre"
    } else if(semanas >=14 && semanas <=26){
        var message = "2º Trimestre"
    } else if(semanas >= 27){
        var message = "3º Trimestre"
    }

    /* If para mostrar as fotos do feto de acordo com a gestacao */
    var image = 0
    var month = 0
    if(semanas <= 4){
        image = '../images/One-month.png'
        month = "Primeiro Mês de Gestação"
    } else if (semanas >= 5 && semanas <= 8){
        image =  require('../images/Two-months.png')
        month = "Segundo Mês de Gestação"
    } else if (semanas >= 9 && semanas <= 12) {
        image =  require('../images/Three-months.png')        
        month = "Terceiro Mês de Gestação"
    } else if (semanas >= 13 && semanas <= 16) {
        image =  require('../images/Four-months.png')
        month = "Quarto Mês de Gestação"
    } else if (semanas >= 17 && semanas <= 21) {
        image =  require('../images/Five-months.png')
        month = "Quinto Mês de Gestação"
    } else if (semanas >= 22 && semanas <= 26) {
        image =  require('../images/Six-months.png')
        month = "Sexto Mês de Gestação"
    } else if (semanas >= 27 && semanas <= 30) {
        image = require('../images/Seven-months.png')
        month = "Sétimo Mês de Gestação"
    } else if (semanas >= 31 && semanas <= 35) {
        image =  require('../images/Eight-months.png')
        month = "Oitavo Mês de Gestação"
    } else if (semanas >= 36 && semanas <= 42) {
        image =  require('../images/Nine-months.png')
        month = "Nono Mês de Gestação"
    }
  /* Calculo da porcentagem */
  var porcentagem = 0
  porcentagem = diasEspera/280

  /*  -------------------------------------- Página Inicial ----------------------------------------------- */
    return(
        <ScrollView style={twn`w-full bg-white`}>
             {loading &&  
             <View style={tw`flex-1 justify-center w-full p-8 bg-white`}>
                <Image
                    style={twn`w-48 h-48 ml-16`}
                    source={require('../images/LogoFak.jpg')}
                />
                <LoadingIcon size="large" />
            </View> }
            {!loading &&  <View> 
                <Text style= {tw`px-4 pt-2 pb-2 mt-2 text-2xl font-bold`} > Hoje </Text>
                <View style={twn`bg-pink-100 px-4 pt-2 pb-2 text-center border border-pink-400 mt-2 text-lg ml-4 mr-4 shadow-md rounded-md`}>
                    <WeeklyCalendar
                        style={twn`h-24 w-72 bg-pink-100 mb-4`}
                        locale = 'pt'
                    /> 
                    <Text style={twn`text-center text-teal-600 mb-4 mt-2`}> {date}</Text>
                    <Image
                        style={twn`w-64 h-64 ml-6 border border-pink-300 mt-2`}
                        source={image}
                    />
                    <Text style= {twn`text-center text-teal-600 mt-6 mb-2`} > {month}  </Text>
                </View>
                <View style= {twn`bg-pink-100 px-4 pt-2 pb-2 mb-2 text-center border border-pink-400 mt-4 text-lg ml-4 mr-4 shadow-md rounded-md`} >
                    <Text style= {tw`text-lg mb-2 text-center font-bold text-pink-700`} > {semanas} Semanas, {dataDias} dias</Text>
                    <Text style= {twn`text-center text-teal-600`} > {message}  </Text>
                </View>   
                <View style= {twn`bg-pink-100 px-4 pt-2 pb-2 mb-6 text-center border border-pink-400 mt-2 text-lg ml-4 mr-4 shadow-md rounded-md`} >
                    <Text style= {twn`text-center text-teal-600 mt-2 mb-2`} > Faltam: {diasEspera} dias </Text>
                    <Progress.Bar progress={0.5} width={290} color={`#db2777`}/>
                    <Text style= {twn`text-center text-teal-600 mt-2`} > Data Provável do Parto: {firebaseData.dia}/{firebaseData.mes}/{firebaseData.ano} </Text> 
                </View> 

                <View style= {twn`bg-pink-100 px-4 pt-2 pb-2 mb-6 text-center border border-pink-400 mt-2 text-lg ml-4 mr-4 shadow-md rounded-md`} >
                    <Text style= {twn`text-center text-teal-600 mt-2 mb-2`} 
                        onPress={() => navigation.navigate('Informações do Feto', { semanasFeto: semanas})}> 
                        Veja mais Informações sobre o feto </Text>
                </View> 
            </View>  }
        </ScrollView>
    );
}

const LoadingIcon = styled.ActivityIndicator `
    margin-top:50px
`