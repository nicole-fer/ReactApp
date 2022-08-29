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
                    source={require('../images/testee.jpg')} 
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
                    source={require('../images/artigo2.jpg')} 
                    />
                     <Text  style={twn`pt-4 ml-2 mb-2 text-xl font-bold text-center text-pink-900`}
                     onPress={() => navigation.navigate('Amamentação')}> Artigo Dois </Text>
                    <Text  style={twn`ml-4 mr-4 mb-3 text-justify text-gray-500 text-xs`}
                     onPress={() => navigation.navigate('Amamentação')}>dwdwdwd ijdqwjdqwd dwjqwdjwqdnqw  dwdwdwd ijdqwjdqwd dwjqwdjwqdnqw </Text>
                    <Text  style={twn`ml-4 mr-4 mb-4 text-justify text-teal-500 text-xs`}
                     onPress={() => navigation.navigate('Amamentação')}>Clique para saber mais</Text>
            </View>
            <View  style={twn`bg-white ml-4 mr-4 border border-teal-800 rounded-xl mt-4`}
             > 
                <Image                
                    style={twn`w-full h-48 rounded-t-xl`}
                    source={require('../images/artigo3.jpg')} 
                    />
                     <Text  style={twn`pt-4 ml-2 mb-2 text-xl font-bold text-center text-pink-900`}
                     onPress={() => navigation.navigate('Amamentação')}> Artigo Três </Text>
                    <Text  style={twn`ml-4 mr-4 mb-3 text-justify text-gray-500 text-xs`}
                     onPress={() => navigation.navigate('Amamentação')}>dwdwdwd ijdqwjdqwd dwjqwdjwqdnqw  dwdwdwd ijdqwjdqwd dwjqwdjwqdnqw </Text>
                    <Text  style={twn`ml-4 mr-4 mb-4 text-justify text-teal-500 text-xs`}
                     onPress={() => navigation.navigate('Amamentação')}>Clique para saber mais</Text>
            </View>
            <View  style={twn`bg-white ml-4 mr-4 border border-teal-800 rounded-xl mt-4`}
             > 
                <Image                
                    style={twn`w-full h-48 rounded-t-xl`}
                    source={require('../images/artigo6.jpg')} 
                    />
                     <Text  style={twn`pt-4 ml-2 mb-2 text-xl font-bold text-center text-pink-900`}
                     onPress={() => navigation.navigate('Amamentação')}> Artigo Quatro </Text>
                    <Text  style={twn`ml-4 mr-4 mb-3 text-justify text-gray-500 text-xs`}
                     onPress={() => navigation.navigate('Amamentação')}>dwdwdwd ijdqwjdqwd dwjqwdjwqdnqw  dwdwdwd ijdqwjdqwd dwjqwdjwqdnqw </Text>
                    <Text  style={twn`ml-4 mr-4 mb-4 text-justify text-teal-500 text-xs`}
                     onPress={() => navigation.navigate('Amamentação')}>Clique para saber mais</Text>
            </View>
            <View  style={twn`bg-white ml-4 mr-4 border border-teal-800 rounded-xl mt-4`}
             >
                <Image                
                    style={twn`w-full h-48 rounded-t-xl`}
                    source={require('../images/artigo4.jpg')}
                    />
                     <Text  style={twn`pt-4 ml-2 mb-2 text-xl font-bold text-center text-pink-900`}
                     onPress={() => navigation.navigate('Amamentação')}> Artigo Cinco </Text>
                    <Text  style={twn`ml-4 mr-4 mb-3 text-justify text-gray-500 text-xs`}
                     onPress={() => navigation.navigate('Amamentação')}>dwdwdwd ijdqwjdqwd dwjqwdjwqdnqw  dwdwdwd ijdqwjdqwd dwjqwdjwqdnqw </Text>
                    <Text  style={twn`ml-4 mr-4 mb-4 text-justify text-teal-500 text-xs`}
                     onPress={() => navigation.navigate('Amamentação')}>Clique para saber mais</Text>
            </View>
            <View  style={twn`bg-white ml-4 mr-4 border border-teal-800 rounded-xl mt-4`}
             > 
                <Image                
                    style={twn`w-full h-48 rounded-t-xl`}
                    source={require('../images/artigo5.jpg')} 
                    />
                     <Text  style={twn`pt-4 ml-2 mb-2 text-xl font-bold text-center text-pink-900`}
                     onPress={() => navigation.navigate('Amamentação')}> Artigo Seis </Text>
                    <Text  style={twn`ml-4 mr-4 mb-3 text-justify text-gray-500 text-xs`}
                     onPress={() => navigation.navigate('Amamentação')}>dwdwdwd ijdqwjdqwd dwjqwdjwqdnqw  dwdwdwd ijdqwjdqwd dwjqwdjwqdnqw </Text>
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
                     onPress={() => navigation.navigate('Amamentação')}> Artigo Sete </Text>
                    <Text  style={twn`ml-4 mr-4 mb-3 text-justify text-gray-500 text-xs`}
                     onPress={() => navigation.navigate('Amamentação')}>dwdwdwd ijdqwjdqwd dwjqwdjwqdnqw  dwdwdwd ijdqwjdqwd dwjqwdjwqdnqw </Text>
                    <Text  style={twn`ml-4 mr-4 mb-4 text-justify text-teal-500 text-xs`}
                     onPress={() => navigation.navigate('Amamentação')}>Clique para saber mais</Text>
            </View>
            <View  style={twn`bg-white ml-4 mr-4 border border-teal-800 rounded-xl mt-4`}
             > 
                <Image                
                    style={twn`w-full h-48 rounded-t-xl`}
                    source={require('../images/artigo8.jpg')} 
                    />
                     <Text  style={twn`pt-4 ml-2 mb-2 text-xl font-bold text-center text-pink-900`}
                     onPress={() => navigation.navigate('Amamentação')}> Artigo Oito </Text>
                    <Text  style={twn`ml-4 mr-4 mb-3 text-justify text-gray-500 text-xs`}
                     onPress={() => navigation.navigate('Amamentação')}>dwdwdwd ijdqwjdqwd dwjqwdjwqdnqw  dwdwdwd ijdqwjdqwd dwjqwdjwqdnqw </Text>
                    <Text  style={twn`ml-4 mr-4 mb-4 text-justify text-teal-500 text-xs`}
                     onPress={() => navigation.navigate('Amamentação')}>Clique para saber mais</Text>
            </View>
            <View  style={twn`bg-white ml-4 mr-4 border border-teal-800 rounded-xl mt-4`}
             > 
                <Image                
                    style={twn`w-full h-48 rounded-t-xl`}
                    source={require('../images/artigo9.jpg')} 
                    />
                     <Text  style={twn`pt-4 ml-2 mb-2 text-xl font-bold text-center text-pink-900`}
                     onPress={() => navigation.navigate('Amamentação')}> Artigo Nove </Text>
                    <Text  style={twn`ml-4 mr-4 mb-3 text-justify text-gray-500 text-xs`}
                     onPress={() => navigation.navigate('Amamentação')}>dwdwdwd ijdqwjdqwd dwjqwdjwqdnqw  dwdwdwd ijdqwjdqwd dwjqwdjwqdnqw </Text>
                    <Text  style={twn`ml-4 mr-4 mb-4 text-justify text-teal-500 text-xs`}
                     onPress={() => navigation.navigate('Amamentação')}>Clique para saber mais</Text>
            </View>
            <View  style={twn`bg-white ml-4 mr-4 border border-teal-800 rounded-xl mt-4`}
             > 
                <Image                
                    style={twn`w-full h-48 rounded-t-xl`}
                    source={require('../images/artigo10.jpg')} 
                    />
                     <Text  style={twn`pt-4 ml-2 mb-2 text-xl font-bold text-center text-pink-900`}
                     onPress={() => navigation.navigate('Amamentação')}> Artigo Dez </Text>
                    <Text  style={twn`ml-4 mr-4 mb-3 text-justify text-gray-500 text-xs`}
                     onPress={() => navigation.navigate('Amamentação')}>dwdwdwd ijdqwjdqwd dwjqwdjwqdnqw  dwdwdwd ijdqwjdqwd dwjqwdjwqdnqw </Text>
                    <Text  style={twn`ml-4 mr-4 mb-4 text-justify text-teal-500 text-xs`}
                     onPress={() => navigation.navigate('Amamentação')}>Clique para saber mais</Text>
            </View>
         
            
        </ScrollView>
    );
}