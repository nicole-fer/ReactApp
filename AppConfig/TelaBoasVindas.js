import React, { useEffect, useState } from 'react';
import {Text, Image, SafeAreaView} from 'react-native';
import { View } from 'react-native';
import tw from "tailwind-react-native-classnames";
import twn from '../Tailwind';
import { useNavigation } from '@react-navigation/native';
import { fb, db } from '../firebaseconfig';
import styled from 'styled-components/native';

const TelaBoasVindas = () => {

    const navigation = useNavigation();
    const [firebaseData, setFirebaseData] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    var user = fb.auth().currentUser;    

    useEffect(() => {
        db.collection("MyCollection").doc(user.uid).get().then(documentSnapshot => {
            if (documentSnapshot.exists) {
                setFirebaseData(documentSnapshot.data())
                setIsLoading(false)
            }
        });
    },[])

   if (firebaseData.dia === 0 && firebaseData.mes  === 0 && firebaseData.ano === 0 ) {
        navigation.navigate('TelaBoasVindas');
   } else if (firebaseData.dia !== 0 && firebaseData.mes !== 0 && firebaseData.ano !== 0){
        navigation.navigate('Rota');
    }

    return(
        <SafeAreaView style={twn`flex-1 justify-center w-full p-8 bg-teal-200`} >
            { isLoading && <View style={tw`flex-1 justify-center w-full p-8 bg-white`}> 
                <Image
                    style={twn`w-48 h-48 ml-16`}
                    source={require('../images/logo.png')}
                />
                <LoadingIcon size="large" />
            </View>}
            { !isLoading && 
            <View>
                <Image
                style={twn`w-48 h-48 ml-16 mb-8`}
                source={require('../images/logo.png')}
            />
                <Text
                    style = {twn`text-2xl mt-4 mb-4 text-center font-bold`}>
                    Bem Vinda, mamãe !
                </Text>
                <Text
                    style={twn`text-lg m-2 text-center`} > Vamos configurar o aplicativo para o primeiro uso! 
                </Text>
                <View style= {twn`mt-24 ml-16`}>
                <Text 
                    style={twn`bg-pink-500 text-center text-white py-2 font-bold text-sm rounded-md ml-24 `}
                    onPress={() => navigation.navigate('TempoGravidez')}
                    >
                    Seguinte
                </Text>
                </View>
            </View> }
        </SafeAreaView>
    );
}

const LoadingIcon = styled.ActivityIndicator `
    margin-top:50px
`

export default TelaBoasVindas;