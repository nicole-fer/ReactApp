import React from 'react';
import {Text} from 'react-native';
import { SafeAreaView } from 'react-native-web';
import tw from "tailwind-react-native-classnames";

export default function PageOne (){
    return(
        <SafeAreaView>
        <Text style={tw`text-blue-700 text-sm font-bold mb-2 mt-4 text-blue-900`}> Pagina 01 - Acessar </Text>
        <Text style={tw`text-blue-700 text-sm font-bold mb-2 mt-4 text-blue-900`}> Logout</Text>
        </SafeAreaView>
    );
}



