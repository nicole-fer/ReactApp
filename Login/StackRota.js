import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PageOne from '../PageOne/PageOne';
import Login from '../Login/Login';
import twn from '../Tailwind';
import Preload from './Preload/Preload';
import Rota from '../PageTwo/Rota';
import TelaBoasVindas from '../AppConfig/TelaBoasVindas';
import TempoGravidez from '../AppConfig/TempoGravidez';
import DataParto from '../AppConfig/DataParto';
import DataPeriodo from '../AppConfig/DataPeriodo';
import { AppRegistry } from 'react-native';
import App from '../App';

AppRegistry.registerComponent('main',() => App);

const Stack = createStackNavigator();

const UselessTextInput = () => {
    return (
        <Stack.Navigator             
            initialRouteName = "Preload">
{/*             <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name = "Preload"
                component = {Preload}

            >    
            </Stack.Screen> */}
    
             <Stack.Screen 
                name="TelaBoasVindas"
                component={TelaBoasVindas}
                signup = {false} 
                options={{
                    headerShown: false,
                }}
                //onSubmit={home}
            />  
            <Stack.Screen 
                name="TempoGravidez"
                component={TempoGravidez}
                signup = {false} 
                options={{
                    headerShown: false,
                }}
                //onSubmit={home}
            />  
            <Stack.Screen 
                name="DataParto"
                component={DataParto}
                signup = {false} 
                options={{
                    headerShown: false,
                }}
                //onSubmit={home}
            />  
            <Stack.Screen 
                name="DataPeriodo"
                component={DataPeriodo}
                signup = {false} 
                options={{
                    headerShown: false,
                }}
                //onSubmit={home}
            />  

{/*              <Stack.Screen 
                name="Login"
                component={Login}
                signup = {false} 
                options={{
                    headerLeft: false,
                    headerStyle: twn`bg-pink-700 `,
                    headerTitleStyle: twn`text-teal-400`,
                }}
                //onSubmit={home}
            />  */}
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
                    headerStyle: twn`bg-pink-700 `,
                    headerTitleStyle: twn`text-teal-400`,
                }}
            /> 
        </Stack.Navigator>
    );
};


export default UselessTextInput;