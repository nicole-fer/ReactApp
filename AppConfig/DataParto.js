import React, { useEffect } from 'react';
import {Text, Image} from 'react-native';
import { View } from 'react-native';
import tw from "tailwind-react-native-classnames";
import twn from '../Tailwind';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-web';

const DataParto = () => {

   // const navigation = useNavigation();

    return(
        <View style={twn`flex-1 justify-center w-full p-8 bg-teal-200`} >
            <Text
                style = {twn`text-2xl mt-4 mb-4 text-center font-bold`}>
                Data Parto
            </Text>
        </View>
    );
}

export default DataParto;