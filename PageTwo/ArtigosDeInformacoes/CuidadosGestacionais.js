import React from 'react';
import {Text, Image, View} from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import tw from "tailwind-react-native-classnames";
import twn from "../../Tailwind"



export default function CuidadosGestacionais ({navigation}){
    return(
        <ScrollView style={tw``} >
            <View> 
            <Image                
                style={twn`w-full h-48`}
                source={require('../../images/artigo3.jpg')} 
                /> 
            <Text style={twn` pb-2 pt-4 text-lg font-bold text-pink-800 text-center ml-2 mr-2`}> Cuidados Pessoais na Gravidez</Text>
            </View>
            <View> 
                <Text style={twn`pl-5 pr-5 pt-2 text-justify text-sm`}> 
                    A gravidez é a etapa da vida de uma mulher que causa as maiores dúvidas e necessidades únicas. É necessário prestar mais atenção durante os próximos nove meses. No entanto, os primeiros três meses de gravidez - antes mesmo de dar à luz - são quando deve ser dada atenção a uma gravidez agradável. Como o corpo muda durante a gravidez, qualquer coisa pode ter um impacto na saúde da mãe, assim como no crescimento do bebê.
                </Text>
                <Text style={twn`text-justify font-bold pl-5 pr-5 pt-4 text-base`}>
                        •  Manter uma alimentação saudável:
                </Text>
                <View> 
                    <FlatList
                        data={[
                        {key: ' -   Fazendo pequenas refeições, várias vezes ao dia, com alimentos variados como: milho, aveia, arroz, feijão, verduras, legumes, frutas, leite, iogurte, queijos e carnes;'},
                        {key: ' -   Consumindo cereais e farinhas integrais que são ricos em fibras e ajudam a prevenir a prisão de ventre;'},
                        {key: ' -   Preferindo alimentos da sua região e da época porque são mais baratos e frescos;'},
                        {key: ' -   Evitando consumir alimentos que contenham excesso de açúcar, sal, gorduras e com aditivos químicos;'},
                        {key: ' -   Consumindo carnes e vísceras, como carne de boi, peixes, carne de frango, fígado, pois ajudam a prevenir a anemia;'},
                        {key: ' -   Bebendo bastante água, cerca de 6 a 8 copos grandes por dia;'},
                        {key: ' -   Bebendo sucos de frutas, água de coco, entre as refeições. '}
                        ]}
                        renderItem={({item}) => <Text style={twn`pl-8 pr-7 text-justify text-sm`}>{item.key}</Text>}
                    />
                </View>

                <Text style={twn`text-justify font-bold pl-5 pr-5 pt-4 text-base`}>
                    •  Não usar bebidas alcoólicas e cigarros. Usar remédios apenas com prescrição médica, pois alguns são prejudiciais à sua saúde e à do bebê:
                </Text>
                <View> 
                    <FlatList
                        data={[
                        {key: ' -   Fumo atrapalha o crescimento do bebê dentro do útero e, após o nascimento, pode prejudicar o seu desenvolvimento. Também é importante evitar o  contato com a fumaça.'},
                        {key: ' -   Álcool e algumas outras drogas podem fazer seu bebê nascer com baixo peso e outros problemas de saúde.'},
                        ]}
                        renderItem={({item}) => <Text style={twn`pl-8 pr-7 text-justify text-sm`}>{item.key}</Text>}
                    />
                </View>

                <Text style={twn`text-justify font-bold pl-5 pr-5 pt-4 text-base`}>
                    • Outros Cuidados :
                </Text>
                <View> 
                    <FlatList
                        data={[
                        {key: ' -   Ser ainda mais rigorosa com a escovação dos dentes depois das refeições e antes de dormir. No início da gestação, convém fazer uma consulta com o dentista. Caso  seja necessário tratamento, este poderá ser realizado a partir do quarto mês.'},
                        {key: ' -   Preparar-se para amamentar. Sempre que possível, tomar banho de sol pela manhã, antes das 10 horas, expondo os seios. Use sutiã.'},
                        {key: ' -   Realizar exercícios para fortalecer o períneo. O períneo é a região entre a  vagina e o ânus. Relaxar esta região no momento do parto facilita a passagem  do bebê pelo canal vaginal. Um exercício muito simples é o de prender e soltar  a urina, alternadamente, quando for ao banheiro.'},
                        {key: ' -   Ter um ganho de peso adequado, o que diminui o risco de algumas  doenças, inclusive diabetes e pressão alta. O controle do peso é feito nas consultas pré-natais.'},
                        ]}
                        renderItem={({item}) => <Text style={twn`pl-8 pr-7 text-justify text-sm`}>{item.key}</Text>}
                    />
                </View>


                <Text style={twn`text-justify pl-5 pr-5 text-gray-500 pt-4 text-xs`}>
                     Em caso de mais alguma dúvida é sempre bom se informar diretamente com o seu médico de pré-natal, que vai lhe instruir de forma mais direta e correta de acordo com sua gestação
                </Text>
                <Text style={twn`text-justify pl-5 pr-5 text-gray-500 pt-2 text-xs`}>
                    Para mais informações, seguem as referências:
                </Text>
                <Text style={twn`text-justify pl-6 pr-5 text-teal-400 pt-1 text-xs`}>
                    https://bvsms.saude.gov.br/bvs/publicacoes/conversando_gestante.pdf
                </Text>
                <Text style={twn`text-justify pl-5 pr-5 text-gray-500 pt-2 text-xs`}>
                    Imagem:
                </Text> 
                <Text style={twn`text-justify pl-6 pr-5 text-teal-400 pt-1 text-xs pb-4`}>
                    https://www.pexels.com/pt-br/foto/adultos-analise-pesquisa-antecipacao-7088841/
                </Text>
            </View>
        </ScrollView>
    );
}