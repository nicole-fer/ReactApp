import React from 'react';
import {Text, Image, View} from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native';
import tw from "tailwind-react-native-classnames";
import twn from '../Tailwind';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'


LocaleConfig.locales['fr'] = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ],
    monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abril', 'Maio', 'Jun', 'Jul.', 'Ago', 'Set.', 'Out.', 'Nov.', 'Dez.'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.'],
    today: "Aujourd'hui"
  };
  LocaleConfig.defaultLocale = 'fr';

export default function AgendaComponent ({ navigation }){
    
    return(
        <ScrollView style={tw`w-full bg-white`} >
            <Calendar
                // Collection of dates that have to be marked. Default = {}
                markedDates={{
                    '2012-05-16': {selected: true, marked: true, selectedColor: 'blue'},
                    '2012-05-17': {marked: true},
                    '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                    '2012-05-19': {disabled: true, disableTouchEvent: true}
                }}
                enableSwipeMonths={true}
                disableAllTouchEventsForDisabledDays={true}
                enableHeader={false}
                style= {tw`mt-6`}
                onDayPress={day => {
                    console.log('selected day', day);
                  }}
                />

          <View  style={twn`pt-12 pl-2`}> 
              <FlatList />
              <View style={twn`flex-row bg-pink-700 rounded-lg mr-4 ml-2`} >
                <Text  
                  numberOfLines={2} 
                  style={twn`pb-4 pl-2 font-bold text-lg flex-1 ml-2 pt-2 text-teal-300`}  
                  onPress={() => navigation.navigate('Tarefas')} >
                    Ver Tarefas 
                </Text>
                <TouchableOpacity style={twn`pl-4 pr-4 pt-2`} onPress={() => navigation.navigate('Tarefas')} >
                <AntDesign name="filetext1" size={30} color={'#5eead4'} />
                </TouchableOpacity>
              </View>
            </View>
        </ScrollView>
    );
}