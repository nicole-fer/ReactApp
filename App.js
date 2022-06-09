import React from 'react';
import {SafeAreaView, Image, KeyboardAvoidingView, View, Text} from 'react-native';
import tw from "tailwind-react-native-classnames";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import PageOne from './PageOne/PageOne';
import PageTwo from './PageTwo/PageTwo';
import Login from './Login/Login';
import twn from './Tailwind';


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
                            headerStyle:twn`bg-rose-400`
                        }}
                    />
                    <Stack.Screen name="PageOne" component={PageOne}/>
                    <Stack.Screen name="PageTwo" component={PageTwo}/>
                </Stack.Navigator>
            </NavigationContainer>
            <Text style={twn`pb-4 pl-24 pr-24 bg-rose-50 text-sky-300 text-xs text-center`}>czczczfsfsfsfsfsffssfsfssfsfsffsfsfsfsffsfsfsfczczc</Text>
                <View style={twn`pb-4 pl-40 bg-rose-50`}>
                    <Image
                        style={tw`w-8 h-8`}
                        source={require('./images/logo.png')}
                    /> 
                </View>
        </SafeAreaView>
    );
};


export default UselessTextInput;
