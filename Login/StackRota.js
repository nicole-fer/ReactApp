import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import PageOne from '../PageOne/PageOne';
import PageTwo from '../PageTwo/PageTwo';
import Login from '../Login/Login';
import twn from '../Tailwind';
import Agenda from '../PageTwo/Agenda';
import Consultas from '../PageTwo/Consultas';
import Informacoes from '../PageTwo/Informacoes';
import Perfil from '../PageTwo/Perfil';
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
                    headerStyle: twn`bg-fuchsia-500 `,
                    headerTitleStyle: twn`text-white`,
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
{/*             <Stack.Screen 
                name="Página Inicial" 
                component={PageTwo}
            />  */}
        </Stack.Navigator>
    );
};
/* 
const MenuStackPageTwo = () => {
    <Stack.Navigator>            
        <Stack.Screen 
            name="Página Inicial" 
            component={PageTwo}
            options={{header: () => null}}
        /> 
    </Stack.Navigator>
} */

/* const MenuStackConsultas = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Consutas"
                component={Consultas} 
                options={{header: () => null}} />
        </Stack.Navigator>
    )
}

const MenuStackAgenda = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Agenda" component={Agenda} options={{header: () => null}}  />
        </Stack.Navigator>
    )
}

const MenuStackInfo = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Informações" component={Informacoes} options={{header: () => null}}  />
        </Stack.Navigator>
    )
}

const MenuStackPerfil = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Perfil" component={Perfil} options={{header: () => null}} />
        </Stack.Navigator>
    )
} */


export default UselessTextInput;