import React from 'react';
import {Text, Image, View} from 'react-native';
import { ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import tw from "tailwind-react-native-classnames";
import twn from "../../Tailwind"



export default function AlimentacaoGestacao (){
    return(
        <ScrollView style={tw``} >
            <View> 
            <Image                
                style={twn`w-full h-48`}
                source={require('../../images/artigo10.jpg')} 
                /> 
            <Text style={twn` pb-2 pt-2 text-lg font-bold text-pink-800 text-center ml-2 mr-2`}> Alimentação na Gestação </Text>
            </View>
            <View> 
                <Text style={twn`pl-5 pr-5 pt-2 text-justify text-sm`}> 
                    A gestação é o período que traz diversas mudanças na vida da mulher. Por isso, algumas recomendações são feitas para que a gestante possa se manter saudável durante essa fase. A mais importante delas é a alimentação na gravidez. 
                </Text>

                <Text style={twn`pl-5 pr-5 pt-2 text-justify text-sm`}> 
                    Manter uma alimentação equilibrada é fundamental para que a gestante possa evitar doenças comuns na gravidez, aumente seu peso de forma adequada e garanta nutrientes para o desenvolvimento saudável de seu bebê. Segundo o periódico de Terapia Nutricional na Gestação desenvolvido pela Associação Brasileira de Nutrologia (ABRAN), a má alimentação na gravidez pode gerar riscos de morte neonatal e parto prematuro. 
                </Text>

                <Text style={twn`pl-5 pr-5 pt-2 text-justify text-sm`}> 
                    Os alimentos mais indicados para que a mulher tenha uma gestação saudável são os naturais. Ou seja, devido à grande quantidade de vitaminas, proteínas e outras substâncias essenciais para o funcionamento do metabolismo e desenvolvimento do bebê.
                </Text>

                <Text style={twn`pl-5 pr-5 pt-4 text-justify text-sm font-bold`}>
                    1. Alimentos que devem ser consumidos na gravidez
                </Text>
                <FlatList
                        data={[
                            {key: ' - Cenoura, abóbora, leite, iogurte, ovos, brócolis e pimentão amarelo, ricos em vitamina A;'},
                            {key: ' - Produtos lácteos e alimentos fortificados com vitamina B12;'},
                            {key: ' - Abacate, azeite de oliva extra virgem, frutas secas, nozes, chia e semente de linhaça, para aumentar a concentração de ômega 3;'},
                            {key: ' - Vegetais escuros, gergelim, frutas secas e leite para obter cálcio;'},
                            {key: ' - Feijão, amendoim, castanhas de caju e do Pará, ricas em zinco;'},
                        ]}
                        renderItem={({item}) => <Text style={twn`pl-9 pr-7 text-justify text-sm`}>{item.key}</Text>}
                    >
                </FlatList>

                <Text style={twn`pl-5 pr-5 pt-2 text-justify text-sm font-bold`}>
                    2. Alimentos não indicados na gestação
                </Text>

                <Text style={twn`pl-5 pr-5 pt-2 text-justify text-sm`}>
                    Durante a gestação, alguns alimentos também devem ser evitados. Isto é, seja por conter toxinas que podem afetar o bebê ou pelo risco de bactérias que podem enfraquecer o sistema imunológico, causando danos ao bebê.
                    A grande maioria dos médicos aconselha que a alimentação na gravidez exclua frituras, queijos maduros, vegetais não lavados, peixes com alto teor de mercúrio, adoçantes artificiais e alimentos crus.
                </Text>

                <Text style={twn`pl-5 pr-5 pt-2 text-justify text-sm font-bold`}>
                    Quais as vantagens de priorizar uma alimentação equilibrada na gravidez?
                </Text>

                <Text style={twn`pl-5 pr-5 pt-2 text-justify text-sm`}>
                    Com a alimentação adequada, a mãe fornece durante sua gestação os nutrientes necessários para o desenvolvimento eficaz do feto e reservar energia para a amamentação. Assim, ofertando também as substâncias adequadas para que o bebê cresça fortalecido.
                    Priorizar uma boa alimentação na gravidez é uma excelente forma de ajudar a mulher a desenvolver novos hábitos alimentares que podem permanecer após o parto. Dessa forma, proporcionando qualidade de vida para mãe e oportunidade de introduzir uma alimentação equilibrada na vida do bebê desde cedo.
                </Text>

              
                <Text style={twn`text-justify pl-5 pr-5 text-gray-500 pt-4 text-xs`}>
                     Em caso de mais alguma dúvida é sempe bom se infromar diretamente com o seu médico de pré-natal, que vai lhe instruir de forma mais direta e correta de acordo com sua gestação
                </Text>
                <Text style={twn`text-justify pl-5 pr-5 text-gray-500 pt-2 text-xs`}>
                    Para mais informações, seguem as referências:
                </Text>
                <Text style={twn`text-justify pl-6 pr-5 text-teal-400 pt-1 text-xs`}>
                    https://walnuthillobgyn.com/blog/everything-you-need-to-know-about-breastfeeding/
                </Text>
                <Text style={twn`text-justify pl-6 pr-5 text-teal-400 pt-1 text-xs`}>
                    https://www.whattoexpect.com/first-year/breastfeeding/things-to-know-about-breastfeeding-newborn/
                </Text>
                <Text style={twn`text-justify pl-5 pr-5 text-gray-500 pt-2 text-xs`}>
                    Imagem:
                </Text> 
                <Text style={twn`text-justify pl-6 pr-5 text-teal-400 pt-1 text-xs pb-4`}>
                    https://www.whattoexpect.com/first-year/breastfeeding/things-to-know-about-breastfeeding-newborn/
                </Text>
            </View>
        </ScrollView>
    );
}