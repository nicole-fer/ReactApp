import React from 'react';
import {Text, Image, View} from 'react-native';
import { ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import tw from "tailwind-react-native-classnames";
import twn from "../../Tailwind"

export default function Informacoes (){
    return(
        <ScrollView style={tw``} >
            <View> 
            <Image                
                style={twn`w-full h-48`}
                source={require('../../images/artigo1.jpg')} 
                /> 
            <Text style={twn` pb-2 pt-2 text-lg font-bold text-pink-800 text-center ml-2 mr-2`}> O que você precisa saber sobre Amamentação </Text>
            </View>
            <View> 
                <Text style={twn`pl-5 pr-5 pt-2 text-justify text-sm`}> 
                    O seu leite materno proporciona inúmeros benefícios para a saúde e o desenvolvimento do seu bebê. É perfeitamente adequado para fornecer os nutrientes que seu bebê precisa, bem como células, hormônios e anticorpos de combate a doenças que podem protegê-los de doenças.
                </Text>
                <Text style={twn`pl-5 pr-5 pt-2 text-justify text-sm`}> 
                    Seu primeiro leite, chamado colostro, é considerado não apenas por sua rica cor amarela, mas porque está repleto de nutrientes e anticorpos, ajudando o sistema digestivo dos recém-nascidos a crescer e funcionar adequadamente. Três a cinco dias após o nascimento, o colostro é substituído por leite de transição. Assim como o nome sugere, o leite de transição é o estágio entre o colostro e o leite materno maduro, e é exatamente o que seu bebê precisa agora. Durante as primeiras uma ou duas semanas de vida do seu filho, o leite de transição se transformará em leite maduro contendo a combinação perfeita de gordura, açúcar, água e proteína que seu bebê precisa para crescer.
                </Text>
                <Text style={twn`text-justify font-bold pl-5 pr-5 pt-4 text-base`}> Como saber se seu bebê está com fome ?</Text>
                <Text style={twn`pl-5 pr-5 pt-2 text-justify pb-1 flex text-sm`}>   Alguns sinais de que seu bebê está com fome podem incluir:
                </Text>
                <View> 
                    <FlatList
                        data={[
                        {key: ' -   Aninhando-se contra seus seios'},
                        {key: ' -   Chupando furiosamente sua mão, uma camisa ou seu braço'},
                        {key: ' -   Abrindo a boca'},
                        {key: ' -   Chupando o lábio ou a língua'},
                        {key: ' -   Estalando os lábios'},
                        {key: ' -   Gritos curtos e baixos que sobem e descem'},
                        ]}
                        renderItem={({item}) => <Text style={twn`pl-8 pr-7 text-justify text-sm`}>{item.key}</Text>}
                    />
                </View>
                <Text style={twn`pl-5 pr-5 pt-2 text-justify pt-6 font-bold text-base`}> Dicas de Amamentação </Text>
                <Text style={twn`pl-5 pr-5 text-justify pt-2 text-sm`}> 
                    Amamentar um recém-nascido pode ser um trabalho de tempo integral. Os recém-nascidos precisam ser amamentados a cada duas a três horas no início, e cada sessão pode demorar um pouco. Você saberá que uma alimentação é feita quando seu bebê tiver drenado completamente pelo menos um seio, isso pode levar entre 20 e 45 minutos em cada mamada.
                </Text>
                <Text style={twn`pl-5 pr-5 text-justify pt-1 text-sm`}> 
                    Garantir uma boa pega é importante para o sucesso da amamentação. Quando seu bebê está devidamente encaixado em seu mamilo, é mais fácil para ele obter o leite de que precisa e garante conforto para você e seu bebê.
                </Text>
                <Text style={twn`pl-5 pr-5 text-justify pt-1 text-sm`}> 
                    Um método de pegar envolve permitir que seu bebê inicie o processo de busca de seu seio para mamar. Chamado de amamentação conduzida pelo bebê, esse estilo de amamentação dá ao seu bebê a chance de liderar e seguir seu instinto natural de sugar.
                </Text>
                <Text style={twn`pl-5 pr-5 text-justify pt-1 text-sm`}> 
                    Algumas maneiras de ajudar seu bebê a relaxar e formar naturalmente uma trava incluem:
                </Text>
                <View>
                    <FlatList
                        data={[
                            {key: ' -   Criando um ambiente calmo e confortável'},
                            {key: ' -   Relaxar e segurar seu bebê pele a pele antes de amamentar'},
                            {key: ' -   Deixar seu bebê livre quando estiver com fome. Seu bebê pode balançar a cabeça contra você, tentar fazer contato visual ou se contorcer.'},
                            {key: ' -   Apoiar a cabeça e os ombros do seu bebê enquanto ele procura seu seio'},
                        ]}
                        renderItem={({item}) => <Text style={twn`pl-8 pr-8 text-justify text-sm`}>{item.key}</Text>}
                    />
                </View>
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