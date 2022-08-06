import React from 'react';
import {Text, Image} from 'react-native';
import { SafeAreaView } from 'react-native';
import tw from "tailwind-react-native-classnames";
import twn from '../Tailwind';
import { fb } from '../firebaseconfig';


export default function Perfil ({navigation}){
    const database = fb.firestore();
    function sair (){

        //função signout
        fb.auth().signOut().then(() => {
            navigation.reset({
                routes: [{name: 'Login'}]
            })
          }).catch((error) => {
          });
    }

    return(
        <SafeAreaView style={tw``} horizontal >
            <Text style={twn`bg-gray-800`}> Perfil </Text>
            <Text style={tw`text-blue-700 text-sm font-bold mb-2 mt-4 text-blue-900`}  onPress={(sair)}> Logout</Text> 
        </SafeAreaView>
        
    );
}