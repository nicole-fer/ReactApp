import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import tw from "tailwind-react-native-classnames";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import twn from './Tailwind';
import StackRota from './Login/StackRota';
import UserContextProvider from './src/contexts/UserContext';
import Rota from './PageTwo/Rota';

const Stack = createStackNavigator();

const UselessTextInput = () => {
    return (
        <UserContextProvider> 
            <SafeAreaView 
                style={tw`flex-1 justify-center`}   
                >
                <NavigationContainer>
                    <StackRota/>
                </NavigationContainer>
            </SafeAreaView>
        </UserContextProvider>
    );
};

export default UselessTextInput;
