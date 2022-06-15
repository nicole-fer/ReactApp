import React, {useEffect} from 'react';
import {SafeAreaView, Image, KeyboardAvoidingView, View, Text} from 'react-native';
import tw from "tailwind-react-native-classnames";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import PageOne from './PageOne/PageOne';
import PageTwo from './PageTwo/PageTwo';
import Login from './Login/Login';
import twn from './Tailwind';
import firebase from 'firebase';
import { config } from './firebaseconfig';

//import * as firebase from 'firebase';

const Stack = createStackNavigator();
/* const home = (email,password)=>{
    if (!email && !password){
        alert("Bote as entradas certas")
    }
    
}; */

const UselessTextInput = () => {
    useEffect(()=>{
    if(!firebase.app.length){
        firebase.initializeApp(config)
    }
}, [])
    return (
        <SafeAreaView style={tw`flex-1 justify-center`}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                        name="Login"
                        component={Login}
                        signup = {false} 
                        //onSubmit={home}
                        options= {{
                            headerStyle:twn`bg-rose-400`
                        }}
                    />
                    <Stack.Screen name="PageOne" component={PageOne}/>
                    <Stack.Screen name="Registrar" component={PageTwo}/>
                </Stack.Navigator>
            </NavigationContainer>
            <Text style={twn`pb-4 pl-24 pr-24 bg-yellow-100 text-sky-300 text-xs text-center`}>nichfge kaowsqt iqhwdfdg lorem spudim uyqterm weidjwfwf</Text>
                <View style={twn`pb-4 pl-40 bg-yellow-100`}>
                    <Image
                        style={tw`w-8 h-8`}
                        source={require('./images/logo.png')}
                    /> 
                </View>
        </SafeAreaView>
    );
};


export default UselessTextInput;
