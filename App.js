import React from 'react';
import {SafeAreaView, Image, KeyboardAvoidingView, View} from 'react-native';
import tw from "tailwind-react-native-classnames";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import PageOne from './PageOne/PageOne';
import PageTwo from './PageTwo/PageTwo';
import Login from './Login/Login';


const Stack = createStackNavigator();

const UselessTextInput = () => {
    return (
        <SafeAreaView style={tw`flex-1 justify-center`}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                        name="Login"
                        component={Login}
                        options= {{
                            headerStyle:tw`bg-pink-400`
                        }}
                    />
                    <Stack.Screen name="PageOne" component={PageOne}/>
                    <Stack.Screen name="PageTwo" component={PageTwo}/>
                </Stack.Navigator>
                <Image
                    style={tw`w-12 h-12 bg-pink-50 `}
                    source={require('./images/logo.png')}
                /> 
            </NavigationContainer>
        </SafeAreaView>
    );
};


export default UselessTextInput;
