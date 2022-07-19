import React, { useEffect } from 'react';
import {Text, Image} from 'react-native';
import { View } from 'react-native';
import tw from "tailwind-react-native-classnames";
import twn from '../../Tailwind';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Preload = () => {

    const navigation = useNavigation();

    useEffect(() =>{
        const checkEmail = async () => { 
            const email = await AsyncStorage.getItem('email');
            if(email ==! null) {
                navigation.navigate('Página Inicial'); 
            } else {
                navigation.navigate('Login');
            }
        }
        checkEmail ();
    }, []);

    return(
        <View style={tw`flex-1 justify-center w-full p-8 bg-white`} >
            <Image
            style={twn`w-48 h-48 ml-16`}
            source={require('../../images/LogoFak.jpg')}
        />
        <LoadingIcon size="large" />
        </View>
    );
}

const LoadingIcon = styled.ActivityIndicator `
    margin-top:50px
`

export default Preload;