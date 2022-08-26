import React from 'react';
import {Text, Image, View} from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native';
import tw from "tailwind-react-native-classnames";
import twn from "../../Tailwind"



export default function Informacoes ({navigation}){
    return(
        <ScrollView style={tw``} >
            <View> 
            <Image                
                style={twn`w-full h-48`}
                source={require('../../images/testee.jpg')} 
                /> 
            <Text style={twn` pb-4 pt-2 text-lg font-bold text-pink-700 text-center ml-2 mr-2`}> Amamentação Sem Dor </Text>
            </View>
            <View> 
                <Text style={twn`pl-4 pr-4 pt-4 text-justify`}> 
                    lorem oiasudjadod ddijadjd dojddjdwd wdojddddqwd nqwdojqwdjqwdqwwqddqwd  lorem oiasudjadod ddijadjd dojddjdwd wdojddddqwd nqwdojqwdjqwdqwwqddqwd lorem oiasudjadod ddijadjd dojddjdwd wdojddddqwd nqwdojqwdjqwdqwwqddqwd lorem oiasudjadod ddijadjd dojddjdwd wdojddddqwd nqwdojqwdjqwdqwwqddqwd lorem oiasudjadod ddijadjd dojddjdwd wdojddddqwd nqwdojqwdjqwdqwwqddqwd lorem oiasudjadod ddijadjd dojddjdwd wdojddddqwd nqwdojqwdjqwdqwwqddqwd lorem oiasudjadod ddijadjd dojddjdwd wdojddddqwd nqwdojqwdjqwdqwwqddqwd lorem oiasudjadod ddijadjd dojddjdwd wdojddddqwd nqwdojqwdjqwdqwwqddqwd lorem oiasudjadod ddijadjd dojddjdwd wdojddddqwd nqwdojqwdjqwdqwwqddqwd lorem oiasudjadod ddijadjd dojddjdwd wdojddddqwd nqwdojqwdjqwdqwwqddqwd lorem oiasudjadod ddijadjd dojddjdwd wdojddddqwd nqwdojqwdjqwdqwwqddqwd
                </Text>

            </View>
        </ScrollView>
    );
}