import React from 'react';
import {Text} from 'react-native';
import { SafeAreaView } from 'react-native';
import tw from "tailwind-react-native-classnames";
import firebase from '../firebaseconfig';

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
        <SafeAreaView>
            <Text style={tw`text-blue-700 text-sm font-bold mb-2 mt-4 text-blue-900`}> Pagina 02 - Registrar </Text>
            <Text style={tw`text-blue-700 text-sm font-bold mb-2 mt-4 text-blue-900`}  onPress={(sair)}> Logout</Text>
        </SafeAreaView>
    );
}