import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import PageOne from '../PageOne/PageOne';
import Login from '../Login/Login';
import twn from '../Tailwind';
import Preload from './Preload/Preload';
import Rota from '../PageTwo/Rota';

const Stack = createStackNavigator();

const UselessTextInput = () => {
    return (
        <Stack.Navigator             
            initialRouteName = "Preload">
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name = "Preload"
                component = {Preload}

            >    
            </Stack.Screen> 
             <Stack.Screen 
                name="Login"
                component={Login}
                signup = {false} 
                options={{
                    headerLeft: false,
                    headerStyle: twn`bg-pink-700 `,
                    headerTitleStyle: twn`text-teal-400`,
                }}
                //onSubmit={home}
            /> 
            <Stack.Screen 
                name="Rota" 
                component={Rota}
                options={{
                    headerShown: false,
                }}
            /> 
            <Stack.Screen 
                name="PageOne"
                component={PageOne}
                options={{
                    headerStyle: twn`bg-fuchsia-500 `,
                    headerTitleStyle: twn`text-white`,
                }}
                /> 
        </Stack.Navigator>
    );
};


export default UselessTextInput;