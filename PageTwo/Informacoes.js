import React from 'react';
import {Text, Image, View} from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native';
import tw from "tailwind-react-native-classnames";
import twn from './../Tailwind';
import { useNavigation } from '@react-navigation/native';


export default function Informacoes ({navigation}){
    return(
        <ScrollView style={tw``} >
            <Text style={twn`bg-white pb-4`}> Informações </Text>
            <View  style={twn`flex-row bg-pink-100 ml-4 mr-4 border border-pink-300 rounded-xl mt-4`}
             > 
                <Image                
                    style={twn`w-12 h-12 ml-4 mt-2`}
                    source={require('../images/amamentacao.jpg')} 
                    />
                     <Text  style={twn`pt-6 ml-2 mb-5 flex-1`}
                     onPress={() => navigation.navigate('Amamentação')}> Amamentação sem dor </Text>
            </View>
            <View  style={twn`flex-row bg-pink-100 ml-4 mr-4 border border-pink-300 rounded-xl mt-4`}> 
                <Image                
                    style={twn`w-12 h-12 ml-4 mt-2`}
                    source={require('../images/agenda.jpg')} 
                    
                    />
                     <Text  style={twn`pt-6 ml-2 mb-5 flex-1`}> Cansada? Como lidar com a fadiga na gravidez ? </Text>
            </View>
            <View  style={twn`flex-row bg-pink-100 ml-4 mr-4 border border-pink-300 rounded-xl mt-4`}> 
                <Image                
                    style={twn`w-12 h-12 ml-4 mt-2`}
                    source={require('../images/agenda.jpg')} 
                    
                    />
                     <Text  style={twn`pt-6 ml-2 mb-5 flex-1`}> Amamentação sem dor </Text>
            </View>
            <View  style={twn`flex-row bg-pink-100 ml-4 mr-4 border border-pink-300 rounded-xl mt-4`}> 
                <Image                
                    style={twn`w-12 h-12 ml-4 mt-2`}
                    source={require('../images/agenda.jpg')} 
                    
                    />
                     <Text  style={twn`pt-6 ml-2 mb-5 flex-1`}> Amamentação sem dor </Text>
            </View>
            <View  style={twn`flex-row bg-pink-100 ml-4 mr-4 border border-pink-300 rounded-xl mt-4`}> 
                <Image                
                    style={twn`w-12 h-12 ml-4 mt-2`}
                    source={require('../images/agenda.jpg')} 
                    
                    />
                     <Text  style={twn`pt-6 ml-2 mb-5 flex-1`}> Cansada? Como lidar com a fadiga na gravidez ? </Text>
            </View>
            <View  style={twn`flex-row bg-pink-100 ml-4 mr-4 border border-pink-300 rounded-xl mt-4`}> 
                <Image                
                    style={twn`w-12 h-12 ml-4 mt-2`}
                    source={require('../images/agenda.jpg')} 
                    
                    />
                     <Text  style={twn`pt-6 ml-2 mb-5 flex-1`}> Amamentação sem dor </Text>
            </View>
            <View  style={twn`flex-row bg-pink-100 ml-4 mr-4 border border-pink-300 rounded-xl mt-4`}> 
                <Image                
                    style={twn`w-12 h-12 ml-4 mt-2`}
                    source={require('../images/agenda.jpg')} 
                    
                    />
                     <Text  style={twn`pt-6 ml-2 mb-5 flex-1`}> Amamentação sem dor </Text>
            </View>
            <View  style={twn`flex-row bg-pink-100 ml-4 mr-4 border border-pink-300 rounded-xl mt-4`}> 
                <Image                
                    style={twn`w-12 h-12 ml-4 mt-2`}
                    source={require('../images/agenda.jpg')} 
                    
                    />
                     <Text  style={twn`pt-6 ml-2 mb-5 flex-1`}> Cansada? Como lidar com a fadiga na gravidez ? </Text>
            </View>
            <View  style={twn`flex-row bg-pink-100 ml-4 mr-4 border border-pink-300 rounded-xl mt-4`}> 
                <Image                
                    style={twn`w-12 h-12 ml-4 mt-2`}
                    source={require('../images/agenda.jpg')} 
                    
                    />
                     <Text  style={twn`pt-6 ml-2 mb-5 flex-1`}> Amamentação sem dor </Text>
            </View>
            <View  style={twn`flex-row bg-pink-100 ml-4 mr-4 border border-pink-300 rounded-xl mt-4`}> 
                <Image                
                    style={twn`w-12 h-12 ml-4 mt-2`}
                    source={require('../images/agenda.jpg')} 
                    
                    />
                     <Text  style={twn`pt-6 ml-2 mb-5 flex-1`}> Amamentação sem dor </Text>
            </View>
            <View  style={twn`flex-row bg-pink-100 ml-4 mr-4 border border-pink-300 rounded-xl mt-4`}> 
                <Image                
                    style={twn`w-12 h-12 ml-4 mt-2`}
                    source={require('../images/agenda.jpg')} 
                    
                    />
                     <Text  style={twn`pt-6 ml-2 mb-5 flex-1`}> Cansada? Como lidar com a fadiga na gravidez ? </Text>
            </View>
            <View  style={twn`flex-row bg-pink-100 ml-4 mr-4 border border-pink-300 rounded-xl mt-4`}> 
                <Image                
                    style={twn`w-12 h-12 ml-4 mt-2`}
                    source={require('../images/agenda.jpg')} 
                    
                    />
                     <Text  style={twn`pt-6 ml-2 mb-5 flex-1`}> Amamentação sem dor </Text>
            </View>
         
            
        </ScrollView>
    );
}