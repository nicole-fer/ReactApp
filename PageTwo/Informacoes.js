import React from 'react';
import {Text, Image, View} from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native';
import tw from "tailwind-react-native-classnames";
import twn from './../Tailwind';
import { useNavigation } from '@react-navigation/native';


export default function Informacoes ({navigation}){
    return(
        <ScrollView style={twn`bg-teal-50`} >
            <View  style={twn`bg-white ml-4 mr-4 border border-teal-800 rounded-xl mt-4`}
             > 
                <Image                
                    style={twn`w-full h-48 rounded-t-xl`}
                    source={require('../images/artigo1.jpg')} 
                    />
                     <Text  style={twn`pt-4 ml-2 mb-2 text-xl font-bold text-center text-pink-900`}
                     onPress={() => navigation.navigate('Amamentação')}> O que Você Precisa Saber Sobre Amamentação </Text>
                    <Text  style={twn`ml-4 mr-4 mb-3 text-justify text-gray-500 text-xs`}
                        onPress={() => navigation.navigate('Amamentação')}>
                        O seu leite materno é perfeitamente adequado para fornecer os nutrientes que seu bebê precisa, bem como células, hormônios e anticorpos de combate a doenças que podem protegê-lo de doenças.                    </Text>
                    <Text  style={twn`ml-4 mr-4 mb-4 text-justify text-teal-500 text-xs`}
                     onPress={() => navigation.navigate('Amamentação')}>Clique para saber mais</Text>
            </View>
            <View  style={twn`bg-white ml-4 mr-4 border border-teal-800 rounded-xl mt-4`}
             >
                <Image                
                    style={twn`w-full h-48 rounded-t-xl`}
                    source={require('../images/artigo7.jpg')} 
                    />
                     <Text  style={twn`pt-4 ml-2 mb-2 text-xl font-bold text-center text-pink-900`}
                     onPress={() => navigation.navigate('Importancia do Pré-natal')}> Importância do Pre-natal </Text>
                    <Text  style={twn`ml-4 mr-4 mb-3 text-justify text-gray-500 text-xs`}
                     onPress={() => navigation.navigate('Importancia do Pré-natal')}>O principal objetivo da atenção pré-natal e puerperal é acolher a mulher desde o início da gravidez, assegurando, no fim da gestação, o nascimento de uma criança saudável e a garantia do bem-estar materno e neonatal. </Text>
                    <Text  style={twn`ml-4 mr-4 mb-4 text-justify text-teal-500 text-xs`}
                     onPress={() => navigation.navigate('Importancia do Pré-natal')}>Clique para saber mais</Text>
            </View>
            <View  style={twn`bg-white ml-4 mr-4 border border-teal-800 rounded-xl mt-4`}
             > 
                <Image                
                    style={twn`w-full h-48 rounded-t-xl`}
                    source={require('../images/artigo3.jpg')} 
                    />
                     <Text  style={twn`pt-4 ml-2 mb-2 text-xl font-bold text-center text-pink-900`}
                     onPress={() => navigation.navigate('Cuidados Pessoais na Gravidez')}> Cuidados Pessoais na Gravidez </Text>
                    <Text  style={twn`ml-4 mr-4 mb-3 text-justify text-gray-500 text-xs`}
                     onPress={() => navigation.navigate('Cuidados Pessoais na Gravidez')}>A gravidez é a etapa da vida de uma mulher que causa mais dúvidas e necessidades únicas </Text>
                    <Text  style={twn`ml-4 mr-4 mb-4 text-justify text-teal-500 text-xs`}
                     onPress={() => navigation.navigate('Cuidados Pessoais na Gravidez')}>Clique para saber mais</Text>
            </View>
            <View  style={twn`bg-white ml-4 mr-4 border border-teal-800 rounded-xl mt-4`}
             > 
                <Image                
                    style={twn`w-full h-48 rounded-t-xl`}
                    source={require('../images/artigo5.jpg')} 
                    />
                     <Text  style={twn`pt-4 ml-2 mb-2 text-xl font-bold text-center text-pink-900`}
                     onPress={() => navigation.navigate('Direitos Gestacionais')}>  Direitos durante o período da gravidez e após o parto </Text>
                    <Text  style={twn`ml-4 mr-4 mb-3 text-justify text-gray-500 text-xs`}
                     onPress={() => navigation.navigate('Direitos Gestacionais')}> Quando uma mulher entra na fase de gestação, ela adquire alguns direitos até o pós-nascimento de seu filho. </Text>
                    <Text  style={twn`ml-4 mr-4 mb-4 text-justify text-teal-500 text-xs`}
                     onPress={() => navigation.navigate('Direitos Gestacionais')}>Clique para saber mais</Text>
            </View>
            <View  style={twn`bg-white ml-4 mr-4 border border-teal-800 rounded-xl mt-4`}
             >
                <Image                
                    style={twn`w-full h-48 rounded-t-xl`}
                    source={require('../images/artigo6.jpg')}
                    />
                     <Text  style={twn`pt-4 ml-2 mb-2 text-xl font-bold text-center text-pink-900`}
                     onPress={() => navigation.navigate('Transformações Durante a Gestação')}> Transformações Durante a Gestação </Text>
                    <Text  style={twn`ml-4 mr-4 mb-3 text-justify text-gray-500 text-xs`}
                     onPress={() => navigation.navigate('Transformações Durante a Gestação')}>A gravidez é um período de grandes transformações para a mulher, para seu(sua) parceiro(a) e toda a família.  </Text>
                    <Text  style={twn`ml-4 mr-4 mb-4 text-justify text-teal-500 text-xs`}
                     onPress={() => navigation.navigate('Transformações Durante a Gestação')}>Clique para saber mais</Text>
            </View>
            <View  style={twn`bg-white ml-4 mr-4 border border-teal-800 rounded-xl mt-4`}
             > 
                <Image                
                    style={twn`w-full h-48 rounded-t-xl`}
                    source={require('../images/artigo10.jpg')} 
                    />
                     <Text  style={twn`pt-4 ml-2 mb-2 text-xl font-bold text-center text-pink-900`}
                     onPress={() => navigation.navigate('Alimentação na Gestação')}> Alimentação na Gravidez </Text>
                    <Text  style={twn`ml-4 mr-4 mb-3 text-justify text-gray-500 text-xs`}
                     onPress={() => navigation.navigate('Alimentação na Gestação')}> A gestação é o período que traz diversas mudanças na vida da mulher. Por isso, algumas recomendações são feitas para que a gestante possa se manter saudável durante essa fase... </Text>
                    <Text  style={twn`ml-4 mr-4 mb-4 text-justify text-teal-500 text-xs`}
                     onPress={() => navigation.navigate('Alimentação na Gestação')}>Clique para saber mais</Text>
            </View>
 
            <View  style={twn`bg-white ml-4 mr-4 border border-teal-800 rounded-xl mt-4 mb-4`}
             > 
                <Image                
                    style={twn`w-full h-48 rounded-t-xl`}
                    source={require('../images/artigo9.jpg')} 
                    />
                     <Text  style={twn`pt-4 ml-2 mb-2 text-xl font-bold text-center text-pink-900`}
                     onPress={() => navigation.navigate('Sexo do Bebê')}> Quando é possível saber o sexo do bebê? </Text>
                    <Text  style={twn`ml-4 mr-4 mb-3 text-justify text-gray-500 text-xs`}
                     onPress={() => navigation.navigate('Sexo do Bebê')}>Após a descoberta da gravidez, essa se torna uma dúvida inquietante para a maioria dos casais. Mas, hoje em dia, é possível descobrir o sexo do bebê desde o começo da gestação ...</Text>
                    <Text  style={twn`ml-4 mr-4 mb-4 text-justify text-teal-500 text-xs`}
                     onPress={() => navigation.navigate('Sexo do Bebê')}>Clique para saber mais</Text>
            </View>

        </ScrollView>
    );
}