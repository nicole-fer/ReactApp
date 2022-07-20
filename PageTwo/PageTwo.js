import React from 'react';
import {Text, Image} from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native';
import { View } from 'react-native';
import tw from "tailwind-react-native-classnames";
import twn from '../Tailwind';
import WeeklyCalendar from 'react-native-weekly-calendar';
import 'moment/locale/pt-br' 
import moment from 'moment';


export default function PageTwo ({}){
    moment.locale('pt-br'); 
    var date= moment().format("dddd, LL")
  
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
                <Text style= {tw`text-lg mb-2 text-center font-bold`} > 10 Semanas, 6 dias</Text>
                <Text style= {tw`text-center`} > 1º Trimestre </Text>
            </View>   
            <View style= {twn`bg-pink-100 px-4 pt-2 pb-2 mb-6 text-center border border-pink-400 mt-2 text-lg ml-4 mr-4 shadow-md rounded-md`} >
                <Text style= {twn`text-center text-teal-600 mt-2`} > Faltam: tantos dias </Text>
                <Text style= {twn`text-center text-teal-600 mt-2`} > ------ </Text> 
                <Text style= {twn`text-center text-teal-600 mt-2`} > Data Provável do Parto: </Text> 
                {/* Aqui quero botar um componente que vai carregando de acorod com as semanas, quanto mais perto da data, mais preenchido vai ficando */}
            </View>   
        </ScrollView>
    );
}