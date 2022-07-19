import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Informacoes from './Informacoes';
import Perfil from './Perfil';
import Agenda from './Agenda';
import Consutas from './Consultas';
import PageTwo from './PageTwo';
import twn from '../Tailwind';
import { Entypo, Feather, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();
export default  () => (
    <Tab.Navigator 
        screenOptions={{
            tabBarStyle:twn`bg-teal-300 py-1`,
            tabBarActiveTintColor: '#a21caf',
            tabBarInactiveTintColor: '#0f766e',
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
            name="Consutas"
            component={Consutas}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <AntDesign name="solution1" size={size} color={color} />
                )
            }} 
        />
        <Tab.Screen 
            name="Agenda"
            component={Agenda}
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