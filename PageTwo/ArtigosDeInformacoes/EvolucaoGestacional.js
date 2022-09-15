import React from 'react';
import {Text, Image, View} from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import tw from "tailwind-react-native-classnames";
import twn from "../../Tailwind"



export default function EvolucaoGestacional ({navigation}){
    return(
        <ScrollView style={tw``} >
            <View> 
            <Image                
                style={twn`w-full h-48`}
                source={require('../../images/artigo6.jpg')} 
                /> 
            <Text style={twn` pb-2 pt-4 text-lg font-bold text-pink-800 text-center ml-2 mr-2`}> Transformações Durante a Gestação</Text>
            </View>
            <View> 
                <Text style={twn`pl-5 pr-5 pt-2 text-justify text-sm`}> 
                    A gravidez é um período de grandes transformações para a mulher, para seu(sua) parceiro(a) e toda a família. São vivências intensas e por vezes sentimentos contraditórios, momentos de dúvidas, de ansiedade. Agora seu bebê está a caminho e vocês dois vão passar muito tempo juntos. Ao longo desses nove meses seu corpo vai se modificar lentamente, se preparando para o parto e a maternidade. Enquanto o bebê se desenvolve, você também cresce como mulher. A gravidez lhe dará confiança e força para o parto e para cuidar do bebê.
                </Text>
                <Text style={twn`text-justify font-bold pl-5 pr-5 pt-4 text-base`}>
                        •  Os 3 primeiros meses de gestação 1º trimestre – de 0 a 13 semanas
                </Text>
                <Text style={twn`pl-5 pr-5 pt-2 text-justify text-sm`}> 
                    Neste início ocorre a adaptação de seu corpo e de seus sentimentos, trazendo sensações ora de prazer, ora de desconforto. Faz parte desse momento a oscilação entre a aceitação e a recusa  da gravidez. Fique tranquila, o sentimento de não querer a gravidez pode acontecer e não causará danos ao bebê. Você vai perceber o aumento dos seios, também pode sentir mais sono, mais fome, enjoos e até ficar mais cansada. Não se preocupe, tudo isso é comum! São as adaptações necessárias da gravidez.                
                </Text>

                <Text style={twn`ml-14 mr-14 text-pink-500 font-normal text-justify italic pt-2 text-xs`}> É importante alimentar-se de maneira saudável, não ingerir bebida alcoólica nem fumar ou usar drogas. Nestes casos, peça ajuda ao profissional de saúde. </Text>

                <Text style={twn`text-justify font-bold pl-5 pr-5 pt-4 text-base`}>
                    Como seu bebê está se formando?
                </Text>

                <View style={twn`pl-12 pr-10 pt-2`}> 
                    <Image                
                    style={twn`w-full h-40 rounded-md`}
                    source={require('../../images/1t.png')} 
                    /> 
                </View>

                <Text style={twn`text-justify pl-5 pr-5 pt-4 font-normal mb-1`}>
                    Seu bebê foi gerado a partir do encontro do espermatozoide do homem com o óvulo da mulher.                
                </Text>

                <View> 
                    <FlatList
                        data={[
                        {key: ' -   Com 4 semanas ele é do tamanho de um grão de arroz, seu coração começa a bater e aparecem pequenos brotos que  serão depois os braços e as pernas.'},
                        {key: ' -   Ao final de 8 semanas já estão se formando os dedos, as mãos, as orelhas e os órgãos internos. Ele é do tamanho de uma ervilha e pesa mais ou menos 7 gramas.'},
                        {key: ' -   De 9 a 12 semanas (durante o 3º mês) seu rosto já está  quase todo formado e os olhos já têm as pálpebras. Inicia-se o funcionamento do cérebro, e ele já se movimenta e mexe os braços e as pernas. Já se formou o cordão umbilical, que liga o bebê à placenta.'},
                        {key: ' -   Ao final do 3º mês o coração já pode ser ouvido com um aparelho próprio durante a consulta de pré-natal.'},
                        ]}
                        renderItem={({item}) => <Text style={twn`pl-8 pr-7 text-justify text-sm`}>{item.key}</Text>}
                    />
                </View>

                <Text style={twn`text-justify font-bold pl-5 pr-5 pt-4 text-base`}>
                        •   Do 4º ao 6º mês - 2º Trimestre
                </Text>
                <Text style={twn`pl-5 pr-5 pt-2 text-justify text-sm`}> 
                    Neste segundo trimestre seu corpo e sua emotividade crescem. Você começa a perceber os primeiros movimentos dentro de sua barriga, que confirmam que seu bebê está bem pertinho de você. Isso pode trazer uma sensação muito boa, que fortalecerá sua ligação com seu filho.                 </Text>

                <Text style={twn`text-justify font-bold pl-5 pr-5 pt-4 text-base`}>
                    Enquanto isso, dentro da barriga ...
                </Text>

                <View style={twn`pl-12 pr-10 pt-2`}> 
                    <Image                
                    style={twn`w-full h-40 rounded-md`}
                    source={require('../../images/2t.png')} 
                    /> 
                </View>
                <View> 
                    <FlatList
                        data={[
                        {key: ' -   A partir de 14 semanas iniciam-se os movimentos respiratórios e das mãozinhas.'},
                        {key: ' -   Entre 15 e 16 semanas a pele, ainda transparente, começa a se engrossar. O bebê já tem cílios e sobrancelhas e  seus movimentos começam a ser percebidos. O coração bate muito mais rápido do que o seu.'},
                        {key: ' -   Entre 17 e 18 semanas ele pode medir de 17 cm a 20 cm e pesar de 200 g a 250 g. Já consegue sugar, engolir e piscar. Ele pode soluçar, o que é normal. '},
                        {key: ' -  Entre 20 e 24 semanas ele mede em torno de 26 cm e seu peso médio é de 500 g. Os movimentos ficam mais intensos e você os percebe bem. Há momentos em que ele está dormindo e momentos em que fica acordado. Todo o seu organismo está funcionando em harmonia. Ele se alimenta por meio do cordão umbilical e da placenta. '},
                        ]}
                        renderItem={({item}) => <Text style={twn`pl-8 pr-7 text-justify text-sm`}>{item.key}</Text>}
                    />
                </View>
                <Text style={twn`ml-14 mr-14 text-pink-500 font-normal text-justify italic pt-2 text-xs`}> Dica: Em alguns momentos do dia, procure ficar mais tranquila para perceber as sensações de seu corpo. Coloque as mãos na barriga, feche os olhos e sinta o que está a contecendo. Isso pode lhe trazer confiança e diminuir suas preocupações. </Text>



                <Text style={twn`text-justify font-bold pl-5 pr-5 pt-4 text-base`}>
                        •  7º ao 9º mês – É hora de fazer o ninho! - 3º Trimestre
                </Text>
                <Text style={twn`pl-5 pr-5 pt-2 text-justify text-sm`}> 
                    O final da gestação é o momento em que tanto você quanto seu bebê se preparam para uma grande mudança. O bebê tem menos espaço dentro de sua barriga, o que dá a sensação de peso e desconforto. Você pode sentir menos sono. Seu corpo está se preparando para o parto e para acolher quem vai chegar. Seu útero pode ficar durinho por instantes, mas você não sentirá dor, apenas uma leve sensação de endurecimento. Poderá sair de seu peito um líquido amarelado, chamado colostro, que vai alimentar seu bebê nos primeiros dias de vida. Essa é uma época de ansiedade com o parto. O medo do desconhecido é natural. Procure conversar com quem possa lhe passar confiança e deixá-la mais tranquila.
                </Text>
                <Text style={twn`text-justify font-bold pl-5 pr-5 pt-4 text-base`}>
                    Preparando para nascer ...
                </Text>

                <View style={twn`pl-12 pr-10 pt-2`}> 
                    <Image                
                    style={twn`w-full h-40 rounded-md`}
                    source={require('../../images/3t.png')} 
                    /> 
                </View>

                <Text style={twn`pl-5 pr-5 pt-2 text-justify text-sm`}> 
                        Nos últimos três meses da gestação a maioria dos bebês se coloca de cabeça para baixo. Ele tem o próprio ritmo de dormir e acordar e começa a dar sinais de querer nascer, com o surgimento das primeiras contrações.
                        De 27 a 30 semanas ele pode pesar 1 kg e medir cerca de 32 cm. Já percebe a luz fora do útero, abre e fecha os olhos. Escuta e identifica vários sons, como vozes e músicas, e pode se assustar com barulhos altos e repentinos. O espaço dentro do útero vai ficar cada vez mais justo. Com 32 semanas já pesa 2 kg. 
                        Sua pele fica coberta por um tipo de creme branco, o vérnix, que traz proteção e o ajudará a se deslizar pelo canal do parto.               
                </Text>

                <Text style={twn`ml-14 mr-14 text-pink-500 font-normal text-justify italic pt-2 text-xs`}>Ele já está todo formado. Falta pouco... É preciso ter paciência para esperar o tempo certo de nascer. A natureza sabe o melhor momento! Antecipar o parto sem necessidade é prejudicial para você e seu bebê. </Text>


                <Text style={twn`text-justify pl-5 pr-5 text-gray-500 pt-4 text-xs`}>
                     Em caso de mais alguma dúvida é sempe bom se infromar diretamente com o seu médico de pré-natal, que vai lhe instruir de forma mais direta e correta de acordo com sua gestação
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