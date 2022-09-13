import React from 'react';
import {Text, Image, View} from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import tw from "tailwind-react-native-classnames";
import twn from "../../Tailwind"



export default function DireitosDaGestante ({navigation}){
    return(
        <ScrollView style={tw``} >
            <View> 
            <Image                
                style={twn`w-full h-48`}
                source={require('../../images/artigo5.jpg')} 
                /> 
            <Text style={twn` pb-2 pt-4 text-lg font-bold text-pink-800 text-center ml-2 mr-2`}> Direitos Durante o Período de Gravidez e Após o Parto </Text>
            </View>
            <View> 
                <Text style={twn`pl-5 pr-5 pt-2 text-justify text-sm`}> 
                    Quando uma mulher entra na fase de gestação, ela precisa entender que adquire alguns direitos até o pós-nascimento de seu filho. Além disso, a futura mamãe também precisa saber que tais direitos trabalhistas foram criados para protegê-la e ainda proteger seu bebê desde a gestação até os primeiros meses de vida da criança.                </Text>
                <Text style={twn`text-justify font-bold pl-5 pr-5 pt-4 text-base`}>
                        •  Direitos Trabalhistas:
                </Text>
                <View> 
                    <FlatList
                        data={[
                        {key: ' -   Licença-maternidade de 120 (cento e vinte) dias para gestantes com carteira de trabalho assinada.'},
                        {key: ' -   Não ser demitida enquanto estiver grávida e até cinco meses após o parto, a não ser por “justa causa”'},
                        {key: ' -   Mudar de função ou setor em seu trabalho, caso ele apresente riscos ou problemas para sua saúde ou a saúde do bebê. Para isso, apresente à sua chefia um atestado médico comprovando que você precisa mudar de função ou setor'},
                        {key: ' -   Receber DECLARAÇÃO DE COMPARECIMENTO sempre que for às consultas de pré-natal ou fizer algum exame. Apresentando esta declaração à sua chefia, você terá a falta justificada no trabalho.'},
                        {key: ' -   Até o bebê completar seis meses, você tem o direito de ser dispensada do trabalho todos os dias, por dois períodos de meia  hora ou um período de uma hora, para amamentar. Combine com seu empregador o melhor jeito de aproveitar esse tempo.'},
                        {key: ' -   Licença de cinco dias para o pai logo após o nascimento do bebê'},
                        ]}
                        renderItem={({item}) => <Text style={twn`pl-8 pr-7 text-justify text-sm`}>{item.key}</Text>}
                    />
                </View>

                <Text style={twn`text-justify font-bold pl-5 pr-5 pt-4 text-base`}>
                        •  Direitos sociais:
                </Text>
                <View> 
                    <FlatList
                        data={[
                        {key: ' -   Guichês e caixas especiais ou prioridade nas filas para atendimento em instituições públicas e privadas (bancos, supermercados, lojas). '},
                        {key: ' -   Assento prioritário para gestantes e mulheres com crianças de colo em ônibus e metrô. Peça licença e ocupe o lugar que é seu. Não viaje em pé! No ônibus você pode sair pela porta da frente.'},
                        {key: ' -   Se a sua família é beneficiária do Programa Bolsa Família, você tem direito ao benefício variável extra na gravidez e após o nascimento do bebê. Para conseguir este benefício, busque informações no  Centro de Referência em Assistência Social (CRAS) de seu município.'},
                        ]}
                        renderItem={({item}) => <Text style={twn`pl-8 pr-7 text-justify text-sm`}>{item.key}</Text>}
                    />
                </View>

                <Text style={twn`text-justify font-bold pl-5 pr-5 pt-4 text-base`}>
                        •  Se for estudante ou adolescente:
                </Text>
                <View> 
                    <FlatList
                        data={[
                        {key: ' -   A Lei nº 6.202/1975 garante à estudante grávida o direito à licença-maternidade sem prejuízo do período escolar.'},
                        {key: ' -   A partir do oitavo mês de gestação a gestante estudante poderá cumprir os compromissos escolares em casa – Decreto-Lei nº 1.044/1969.'},
                        {key: ' -   O início e o fim do período de afastamento serão determinados por atestado médico a ser apresentado à direção da escola.'},
                        {key: ' -   Caso seja adolescente, você tem o direito, pelo Estatuto da Criança e do Adolescente, de ser atendida com sigilo, privacidade, autonomia, e receber informações sobre saúde sexual e reprodutiva. Também pode ser atendida sozinha, se preferir.'},

                        ]}
                        renderItem={({item}) => <Text style={twn`pl-8 pr-7 text-justify text-sm`}>{item.key}</Text>}
                    />
                </View>

                <Text style={twn`text-justify font-bold pl-5 pr-5 pt-4 text-base`}>
                        • Direitos nos serviços de saúde:
                </Text>
                <View> 
                    <FlatList
                        data={[
                        {key: ' -   Ser atendida com respeito e dignidade pelas equipes de saúde, sem discriminação de cor, raça, orientação sexual, religião, idade ou condição social. '},
                        {key: ' -   Ser chamada pelo nome que preferir e saber o nome do profissional que a atende. '},
                        {key: ' -   Aguardar o atendimento sentada, em lugar arejado, tendo à sua disposição água para beber e banheiros limpos.'},

                        ]}
                        renderItem={({item}) => <Text style={twn`pl-8 pr-7 text-justify text-sm`}>{item.key}</Text>}
                    />
                </View>


                <Text style={twn`text-justify pl-5 pr-5 text-gray-500 pt-4 text-xs`}>
                     Em caso de mais alguma dúvida é sempe bom se infromar diretamente com o seu médico de pré-natal, que vai lhe instruir de forma mais direta e correta de acordo com sua gestação
                </Text>
                <Text style={twn`text-justify pl-5 pr-5 text-gray-500 pt-2 text-xs`}>
                    Para mais informações e mais direitos da gestante, seguem as referências:
                </Text>
                <Text style={twn`text-justify pl-6 pr-5 text-teal-400 pt-1 text-xs`}>
                    https://www.mds.gov.br/webarquivos/arquivo/crianca_feliz/Treinamento_Multiplicadores_Coordenadores/Caderneta-Gest-Internet(1).pdf
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