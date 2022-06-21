import React, {useEffect} from 'react';
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
                        signup = {false} 
                        //onSubmit={home}
                        options= {{
                            headerStyle:twn`bg-fuchsia-500`
                        }}
                    />
                    <Stack.Screen 
                        name="PageOne"
                        component={PageOne}
                        options= {{
                            headerStyle:twn`bg-fuchsia-500`
                        }}
                        />
                    <Stack.Screen 
                        name="PageTwo" 
                        component={PageTwo}
                        options= {{
                            headerStyle:twn`bg-fuchsia-500`
                        }}
                        />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};


export default UselessTextInput;
