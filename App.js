import React from 'react';
import {SafeAreaView, Text, TextInput, Image} from 'react-native';
import tw from "tailwind-react-native-classnames";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import PageOne from './PageOne/PageOne';
import PageTwo from './PageTwo/PageTwo';
import Login from './PageOne/Login/Login'

const Stack = createStackNavigator();

const UselessTextInput = () => {
    return (
        <SafeAreaView style={tw`flex-1 justify-center w-full bg-blue-100`}>            
            <NavigationContainer>
                <Stack.Navigator style={tw`bg-blue-100`}>
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="PageOne" component={PageOne}/>
                    <Stack.Screen name="PageTwo" component={PageTwo}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default UselessTextInput;
