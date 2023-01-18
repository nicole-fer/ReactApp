import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Informacoes from './Informacoes';
import Perfil from './Perfil';
import Consutas from './Consultas';
import PageTwo from './PageTwo';
import twn from '../Tailwind';
import { Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import AgendaComponent from './AgendaComponent';

const Tab = createBottomTabNavigator();
export default  () => (
    <Tab.Navigator 
        screenOptions={{
            tabBarStyle:twn`bg-teal-300 py-1`,
            tabBarActiveTintColor: '#be185d',
            tabBarInactiveTintColor: '#0f766e',
            headerStyle:twn`bg-pink-700`,
            headerTitleStyle: twn`text-teal-400`,
           
        }
    }
    >
        <Tab.Screen 
            name="Página Inicial" 
            component={PageTwo}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <Entypo name="home" size={size} color={color} />
                )             
            }}
        /> 
        <Tab.Screen 
            name="Exames"
            component={Consutas}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <AntDesign name="solution1" size={size} color={color} />
                )
            }} 
        />
        <Tab.Screen 
            name="Agenda"
            component={AgendaComponent}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons name="calendar-month" size={size} color={color} />
                )
            }} 
         />
        <Tab.Screen 
            name="Informações"
            component={Informacoes} 
            options={{
                tabBarIcon: ({ size, color }) => (
                    <AntDesign name="form" size={size} color={color} />
                )
            }} 
        />
        <Tab.Screen 
            name="Perfil"
            component={Perfil}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons name="face-woman" size={size} color={color} />
                )
            }} 
         />
    </Tab.Navigator>
);