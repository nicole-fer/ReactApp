import React, { useState, useEffect }  from 'react';
import {Text, Image } from 'react-native';
import { ScrollView} from 'react-native';
import tw from "tailwind-react-native-classnames";
import twn from '../Tailwind';
import { fb, db } from '../firebaseconfig';
import Icon from 'react-native-vector-icons/FontAwesome5';


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

    const [firebaseData, setFirebaseData] = useState({})
    var user = fb.auth().currentUser;    

    useEffect(() => {
        db.collection('MyCollection').doc(user.uid).get().then(documentSnapshot  => {
            if (documentSnapshot.exists) {
              setFirebaseData(documentSnapshot.data())
            }
        });
    },[])

   const [hidePass, setHidePass] = useState(true);
   const [myText, setMyText] = useState(true);
   const [teste, setTeste] = useState('******')

   const pass = () => {
        setHidePass(!hidePass)
        setMyText(!myText)
         if (myText === true) {
            //var teste = '******'
            setTeste(firebaseData.senha)
        } else if (myText === false) {
            //var teste = firebaseData.senha
            setTeste('******')
        }
   }
    
    return(
        <ScrollView style={tw`w-full bg-white`} >
            <Image
                    style={twn`w-full h-60`}
                    source={require('../images/perfil.png')}
            />
            <Text style={twn`bg-pink-700 text-lg font-bold text-teal-300 pl-4 pt-2 pb-2`}> Conta </Text>
            <Text style={twn`ml-4 text-teal-500  mt-4`}> Nome </Text>
            <Text style={twn`border-b border-teal-500 p-1 ml-2 mr-4 pl-4`}> {firebaseData.email} </Text>
            <Text style={twn`ml-4 text-teal-500 mt-4`}> Email </Text>
            <Text style={twn`border-b border-teal-500 p-1 ml-2 mr-4 pl-4`}> {firebaseData.email} </Text>
            <Text style={twn`ml-4 text-teal-500 mt-4`}> Senha </Text>
            <Text 
                style={twn`border-b border-teal-500 p-1 ml-2 mr-4 pl-4`}
                name={myText ? true : false}
            >
                {teste}                                                                     -
                <Icon 
                    name={hidePass ? 'eye-slash' : 'eye'}
                    size={15}
                    color="teal"
                    style={twn`pl-16`}
                    onPress={pass}
                />
             </Text>
            <Text style={twn`text-blue-700 text-sm font-bold mb-2 mt-6 text-center border border-teal-500 bg-teal-500 p-2 ml-24 mr-24 rounded-md text-pink-50`}  onPress={(sair)}> Sair da Conta </Text> 
        </ScrollView>
        
    );
}