import React from 'react';
import {Text, Image} from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native';
import { View } from 'react-native';
import tw from "tailwind-react-native-classnames";
import firebase from '../firebaseconfig';
import { Fragment, useState } from 'react';
import MenuIcon  from 'react-native-heroicons/solid';
import twn from '../Tailwind';
import { FlatList } from 'react-native-gesture-handler';



export default function PageTwo ({navigation}){
    const database = firebase.firestore();
    function sair (){

        //função signout
        firebase.auth().signOut().then(() => {
            navigation.reset({
                routes: [{name: 'Login'}]
            })
          }).catch((error) => {
          });
    }

    return(
        <View style={tw``} >

            <ScrollView style={tw`flex-1 w-32`}>
               <Text>main</Text>
            </ScrollView>
            <Text>main sfsfsfsfsffsfsfsffs sfsf ssefse ffsf sf s ss gsg sgs gs sg s s sgg g sg </Text>
{/*             <View style={tw`relative h-96 w-full`}>
                <Text style={tw`absolute inset-x-0 bottom-0 h-16 bg-gray-500`}> Footer </Text>
            </View> */}

{/*             <Text style={twn`w-1/2 bg-gray-800`}> Pagina 02 - Registrar </Text>
            <Text style={twn`w-1/2 bg-gray-600`}> Pagina 02 - Registrar </Text> */}
{/*             <Image
                style={twn`w-1/2`}
                source={require('../images/download.png')}
            /> */}
{/*             <Text style= {tw`bg-pink-100 mx-12 px-4 pt-2 pb-2 text-center border border-pink-300 mt-2`} > As redes sociais podem ser um ótimo veiculo para compartilhar experiências e pensamentos sobre a gestação com os seus amigos e familiares.</Text>
            <Text style={tw`text-blue-700 text-sm font-bold mb-2 mt-4 text-blue-900`}  onPress={(sair)}> Logout</Text> */}
        </View>
    );
}