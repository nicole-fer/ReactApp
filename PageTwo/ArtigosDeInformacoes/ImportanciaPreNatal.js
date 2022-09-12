import React from 'react';
import {Text, Image, View} from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import tw from "tailwind-react-native-classnames";
import twn from "../../Tailwind"



export default function ImportanciaPreNatal ({navigation}){
    return(
        <ScrollView style={tw``} >
            <View> 
            <Image                
                style={twn`w-full h-48`}
                source={require('../../images/artigo7.jpg')} 
                /> 
            <Text style={twn` pb-2 pt-4 text-lg font-bold text-pink-800 text-center ml-2 mr-2`}> A Importancia do Pré-natal </Text>
            </View>
            <View> 
                <Text style={twn`pl-5 pr-5 pt-2 text-justify text-sm`}> 
                O pré-natal é muito importante para o acompanhamento, orientação e esclarecimento de dúvidas da mulher sobre as diversas alterações que ocorrem no seu corpo durante a gravidez e sobre o desenvolvimento do seu bebê. É realizado por profissionais de saúde e deve ser iniciado, de preferência, nos três primeiros meses da gestação.
                </Text>
                <Text style={twn`pl-5 pr-5 pt-2 text-justify text-sm`}> 
                Toda mulher tem direito a consultas e exames durante sua gravidez. Neste período, é importante que a gestante faça um número mínimo de consultas pré-natais, sendo ideal que ela realize seis consultas.
               </Text>
               <Text style={twn`pl-5 pr-5 pt-2 text-justify text-sm`}>
               Em todas as consultas, os profissionais de saúde verificam o peso da gestante e sua altura, estado nutricional, pressão arterial, tamanho da barriga, batidas do coração do bebê. Se necessário, orientam sobre o uso de medicamentos. Observam, entre outras coisas, se há inchaços (edemas) no corpo da gestante e se ela já tomou as vacinas necessárias até o momento. Além disso, solicitam exames. Essas ações permitem identificar necessidades para promover a saúde da gestante e de seu bebê.  
                </Text>
                <Text style={twn`text-justify font-bold pl-5 pr-5 pt-4 text-base`}> Quais exames e vacinas é preciso no pré-natal ?</Text>
                <Text style={twn`pl-5 pr-5 pt-2 text-justify pb-1 flex text-sm`}>   Alguns sinais de que seu bebê está com fome podem incluir:
                </Text>
                <View> 
                    <FlatList
                        data={[
                        {key: ' -   Hemograma: identifica a anemia que é muito comum na gravidez. A anemia favorece o surgimento de infecções e complicações que podem comprometer o desenvolvimento do feto.'},
                        {key: ' -   Glicemia: pesquisa a presença de diabetes, doença em que existe excesso  de açúcar no sangue e que, se identificada precocemente, é possível cuidar  através de dieta, atividade física e uso de medicamentos.'},
                        {key: ' -   VDRL: identifica a sífilis, doença sexualmente transmissível, que pode passar da mãe para o bebê durante a gravidez. Nesse período a doença pode ser  tratada e assim evitar esta transmissão.'},
                        {key: ' -   Tipagem Sanguínea: identifica o tipo de sangue e o fator Rh. Se a mãe é Rh negativo e o bebê é positivo, a gestante vai precisar de acompanhamento  especial. A mãe vai ser tratada logo após o parto, para que o bebê da próxima  gravidez não tenha problemas. '},
                        {key: ' -   Teste Anti-HIV: identifica o vírus causador da Aids, que é uma doença que compromete o sistema de defesa do organismo, provocando a perda da  resistência e da proteção contra doenças. Se a  gestante HIV positiva fizer o tratamento durante a gravidez, aumenta a chance de seu bebê nascer sem o HIV.'},
                        {key: ' -   Teste para Hepatite B (HBsAg) – identifica o vírus da Hepatite B e é feito  no sétimo mês. O bebê pode ser protegido  recebendo a vacina e a imunoglobulina para Hepatite B nas primeiras 12 horas após o parto.'},
                        {key: ' -   Exame de Urina: identifica a presença de infecção urinária que deve ser tratada ainda durante o pré-natal.'},
                        {key: ' -   Exame Preventivo de Câncer de Colo de Útero – além de identificar precocemente o câncer, este teste, que precisa ser realizado periodicamente, ajuda a identificar vários corrimentos que podem interferir com a boa evolução da gestação.'},
                        {key: ' -   Vacina Antitetânica – protege contra o tétano no bebê. Se a gestante nunca foi vacinada, deve iniciar a vacinação no quinto mês de gravidez.  A proteção da vacina dura dez anos. Se a última dose foi há mais de dez anos, é necessário tomar reforço. Se foi há menos de dez anos, não é necessário.'},
                        ]}
                        renderItem={({item}) => <Text style={twn`pl-8 pr-7 text-justify text-sm`}>{item.key}</Text>}
                    />
                </View>

                <Text style={twn`text-justify pl-5 pr-5 text-gray-500 pt-4 text-xs`}>
                     Em caso de mais alguma dúvida é sempe bom se infromar diretamente com o seu médico de pré-natal, que vai lhe instruir de forma mais direta e correta de acordo com sua gestação
                </Text>
                <Text style={twn`text-justify pl-5 pr-5 text-gray-500 pt-2 text-xs`}>
                    Para mais informações, seguem as referências:
                </Text>
                <Text style={twn`text-justify pl-6 pr-5 text-teal-400 pt-1 text-xs`}>
                    https://bvsms.saude.gov.br/bvs/publicacoes/conversando_gestante.pdf
                </Text>
                <Text style={twn`text-justify pl-6 pr-5 text-teal-400 pt-1 text-xs`}>
                    https://bvsms.saude.gov.br/bvs/publicacoes/manual_pre_natal_puerperio_3ed.pdf
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