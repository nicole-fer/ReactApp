import React from 'react';
import {Text, Image, View} from 'react-native';
import { ScrollView } from 'react-native';
import tw from "tailwind-react-native-classnames";
import twn from "../../Tailwind";

export default function SexoBebe (){
    return(
        <ScrollView style={tw``} >
            <View> 
            <Image                
                style={twn`w-full h-48`}
                source={require('../../images/artigo9.jpg')} 
                /> 
            <Text style={twn` pb-2 pt-2 text-lg font-bold text-pink-800 text-center ml-2 mr-2`}>Quando é possível saber o sexo do bebê? </Text>
            </View>
            <View> 
                <Text style={twn`pl-5 pr-5 pt-2 text-justify text-sm`}> 
                Após a descoberta da gravidez, essa se torna uma dúvida inquietante para a maioria dos casais. Mas, hoje em dia, é possível descobrir o sexo do bebê desde o começo da gestação, logo nas primeiras semanas de gravidez (em torno de 8 a 9 semanas).
                </Text>

                <Text style={twn`pl-5 pr-5 pt-2 text-justify text-sm`}> 
                    Por meio do exame de sexagem fetal, que é feito com o sangue da mãe, é possível saber o sexo com margem de erro baixíssima. Esse exame não requer pedido médico, entretanto, os planos de saúde não cobrem. 
                </Text>

                <Text style={twn`pl-5 pr-5 pt-2 text-justify text-sm`}> 
                    No primeiro ultrassom morfológico (em torno de 11 a 13 semanas de gestação), é possível saber o sexo com grande probabilidade de acerto, entre 70% e 80% de chance. A confiabilidade do exame dependerá do local onde ele é realizado, da qualidade do aparelho de ultrassom e da experiência do ultrassonografista.
                </Text>

                <Text style={twn`pl-5 pr-5 pt-2 text-justify text-sm`}> 
                    Entre 15 a 16 semanas de gestação, o exame de ultrassom já aponta com uma margem de segurança muito maior qual o sexo do bebê. Porém, se o casal ainda não souber o sexo nesse exame, no segundo morfológico (feito com 20 a 22 semanas de gestação), já é possível saber o sexo com muita segurança pelo ultrassom.                
                </Text>

                <Text style={twn`pl-5 pr-5 pt-2 text-justify text-sm`}> 
                    Contudo, sempre alertamos aos casais: saber o sexo muito precocemente (no primeiro trimestre) pode coincidir com o período de risco de aborto. Especialmente nos 3 primeiros meses, a gestante tem um risco considerável de perda (aborto) espontânea e, a partir do momento que ela sabe o sexo, geralmente a gestação toma uma forma, vem o nome do bebê e o impacto de uma eventual perda pode ser muito maior.
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