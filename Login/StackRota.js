import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PageOne from '../PageOne/PageOne';
import Login from '../Login/Login';
import twn from '../Tailwind';
import Preload from './Preload/Preload';
import Rota from '../PageTwo/Rota';
import TelaBoasVindas from '../AppConfig/TelaBoasVindas';
import TempoGravidez from '../AppConfig/TempoGravidez';
import DataPeriodo from '../AppConfig/DataPeriodo';
import { AppRegistry } from 'react-native';
import App from '../App';
import Amamentacao from '../PageTwo/ArtigosDeInformacoes/Amamentacao';
import ImportanciaPreNatal from '../PageTwo/ArtigosDeInformacoes/ImportanciaPreNatal';
import EvolucaoGestacional from '../PageTwo/ArtigosDeInformacoes/EvolucaoGestacional';
import CuidadosGestacionais from '../PageTwo/ArtigosDeInformacoes/CuidadosGestacionais';
import DireitosDaGestante from  '../PageTwo/ArtigosDeInformacoes/DireitosDaGestante';
import Tarefas from '../PageTwo/Tarefas';
import AddTarefas from '../PageTwo/AddTarefas';
import EditarDeletarTarefa from '../PageTwo/Tarefas/EditarDeletarTarefa';
import InfoFeto from '../PageTwo/InfoFeto';
import AlimentacaoGestacao from '../PageTwo/ArtigosDeInformacoes/AlimentacaoGestacao';
import SexoBebe from '../PageTwo/ArtigosDeInformacoes/SexoBebe';

AppRegistry.registerComponent('main',() => App);

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
                name="Registro"
                component={PageOne}
                options={{
                    headerStyle: twn`bg-pink-700 `,
                    headerTitleStyle: twn`text-teal-400`,
                }}
            /> 
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
            <Stack.Screen 
                name="Rota" 
                component={Rota}
                options={{
                    headerShown: false,
                }}
            /> 

            <Stack.Screen 
                name="Importancia do Pré-natal" 
                component={ImportanciaPreNatal}
                options={{
                    headerShown: true,
                }}
            /> 
            <Stack.Screen 
                name="Cuidados Pessoais na Gravidez" 
                component={CuidadosGestacionais}
                options={{
                    headerShown: true,
                }}
            /> 
            <Stack.Screen 
                name="Sexo do Bebê" 
                component={SexoBebe}
                options={{
                    headerShown: true,
                }}
            /> 
            <Stack.Screen 
                name="Alimentação na Gestação" 
                component={AlimentacaoGestacao}
                options={{
                    headerShown: true,
                }}
            /> 
            <Stack.Screen 
                name="Transformações Durante a Gestação" 
                component={EvolucaoGestacional}
                options={{
                    headerShown: true,
                }}
            /> 
            <Stack.Screen 
                name="Amamentação" 
                component={Amamentacao}
                options={{
                    headerShown: true,
                }}
            /> 
            <Stack.Screen 
                name="Direitos Gestacionais" 
                component={DireitosDaGestante}
                options={{
                    headerShown: true,
                }}
            /> 
            <Stack.Screen 
                name="Tarefas" 
                component={Tarefas}
                options={{
                    headerStyle: twn`bg-pink-700 `,
                    headerTitleStyle: twn`text-teal-400`,
                }}
            /> 
            <Stack.Screen 
                name="Adicionar Tarefa" 
                component={AddTarefas}
                options={{
                    headerStyle: twn`bg-pink-700 `,
                    headerTitleStyle: twn`text-teal-400`,
                }}
            /> 
            <Stack.Screen 
                name="Editar Tarefa" 
                component={EditarDeletarTarefa}
                options={{
                    headerStyle: twn`bg-pink-700 `,
                    headerTitleStyle: twn`text-teal-400`,
                }}
            /> 
            <Stack.Screen 
                name="Informações do Feto" 
                component={InfoFeto}
                options={{
                    headerStyle: twn`bg-pink-700 `,
                    headerTitleStyle: twn`text-teal-400`,
                }}
            /> 
        </Stack.Navigator>
    );
};


export default UselessTextInput;