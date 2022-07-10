import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Informacoes from './Informacoes';
import Perfil from './Perfil';
import Agenda from './Agenda';
import Consutas from './Consultas';
import PageTwo from './PageTwo';

const Tab = createBottomTabNavigator();
export default  () => (
    <Tab.Navigator>
        <Tab.Screen name="Página Inicial" component={PageTwo}/> 
        <Tab.Screen name="Consutas" component={Consutas} />
        <Tab.Screen name="Agenda" component={Agenda} />
        <Tab.Screen name="Informações" component={Informacoes} />
        <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
);