import React from 'react';
import {Text, Image} from 'react-native';
import { SafeAreaView } from 'react-native';
import tw from "tailwind-react-native-classnames";
import twn from '../Tailwind';


export default function Agenda ({navigation}){
    return(
        <SafeAreaView style={tw``} horizontal >
            <Text style={twn`bg-gray-800`}> Agenda </Text>
        </SafeAreaView>
    );
}