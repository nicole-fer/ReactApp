import React, { useState } from 'react';
import {Text } from 'react-native';
import { ScrollView, View } from 'react-native';
import tw from "tailwind-react-native-classnames";
import twn from '../Tailwind';
import CheckBox from 'expo-checkbox';

export default function Consutas ({}){

    const [isSelectedUm, setSelectionUm] = useState(false);
    const [isSelectedDois, setSelectionDois] = useState(false);
    const [isSelectedTres, setSelectionTres] = useState(false);
    const [isSelectedQuatro, setSelectionQuatro] = useState(false);
    const [isSelectedQuinto, setSelectionQuinto] = useState(false);
    const [isSelectedSexto, setSelectionSexto] = useState(false);
    const [isSelectedSet, setSelectionSet] = useState(false);
    const [isSelectedOito, setSelectionOito] = useState(false);
    const [isSelectedNove, setSelectionNove] = useState(false);

    const [isSelectedSegTrimUm, setSelectionSegTrimUm] = useState(false);
    const [isSelectedSegTrimDois, setSelectionSegTrimDois] = useState(false);

    const [isSelectedTerTrimUm, setSelectionTerTrimUm] = useState(false);
    const [isSelectedTerTrimDois, setSelectionTerTrimDois] = useState(false);
    const [isSelectedTerTrimTres, setSelectionTerTrimTres] = useState(false);
    const [isSelectedTerTrimQuatro, setSelectionTerTrimQuatro] = useState(false);

    return(
        
        <ScrollView style={tw`m-2 w-full bg-white`} vertical >
        <View> 
            <Text style={twn`text-xl mt-2`}> 1º Trimestre </Text>
            <View style={twn`bg-pink-100 px-4 pt-2 pb-2 text-center border border-pink-400 mt-2 text-lg ml-2 mr-4 shadow-md rounded-md `}>
                <View style={twn`flex-row`}>
                    <View style={twn`flex-1`}>
                    <CheckBox
                            value={isSelectedUm}
                            onValueChange={setSelectionUm}
                        />
                    </View>
                    <View style={twn`flex-auto mr-40`}>
                        <Text>Hemograma</Text>
                    </View>
                </View>
                <View style={twn`flex-row  mt-2`}>
                    <View style={twn`flex-1`}>
                    <CheckBox
                            value={isSelectedDois}
                            onValueChange={setSelectionDois}
                        />
                    </View>
                    <View style={twn`flex-auto mr-12`}>
                        <Text>Tipagem sanguinea e fator RH</Text>
                    </View>
                </View>
                <View style={twn`flex-row mt-2`}>
                    <View style={twn`flex-1`}>
                        <CheckBox
                            value={isSelectedDois}
                            onValueChange={setSelectionDois}
                        />
                    </View>
                    <View style={twn`flex-auto ml-8`}>
                        <Text>Teste de Coombs indireto nas pacientes Rh negativo</Text>
                    </View>
                </View>
                <View style={twn`flex-row mt-2`}>
                    <View style={twn`flex-1`}>
                        <CheckBox
                            value={isSelectedTres}
                            onValueChange={setSelectionTres}
                        />
                    </View>
                    <View style={twn`flex-auto mr-40`}>
                        <Text>Urina Tipo I  </Text>
                    </View>
                </View>
                <View style={twn`flex-row mt-2`}>
                    <View style={twn`flex-1`}>
                        <CheckBox
                            value={isSelectedQuatro}
                            onValueChange={setSelectionQuatro}
                        />
                    </View>
                    <View style={twn`flex-auto mr-20`}>
                        <Text>Urocultura e antibiograma</Text>
                    </View>
                </View>
                <View style={twn`flex-row mt-2`}>
                    <View style={twn`flex-1`}>
                        <CheckBox
                            value={isSelectedQuinto}
                            onValueChange={setSelectionQuinto}
                        />
                    </View>
                    <View style={twn`flex-auto mr-32`}>
                        <Text>Glicemia de jejum</Text>
                    </View>
                </View>
                <View style={twn`flex-row mt-2`}>
                    <View style={twn`flex-1`}>
                        <CheckBox
                            value={isSelectedSexto}
                            onValueChange={setSelectionSexto}
                        />
                    </View>
                    <View style={twn`flex-auto mr-12`}>
                        <Text>Exame parasitológico de fezes</Text>
                    </View>
                </View>
                <View style={twn`flex-row mt-2`}>
                    <View style={twn`flex-1`}>
                        <CheckBox
                            value={isSelectedSet}
                            onValueChange={setSelectionSet}
                        />
                    </View>
                    <View style={twn`flex-auto ml-4`}>
                        <Text>Citologia cérvico-vaginal (Papanicolaou) </Text>
                    </View>
                </View>
                <View style={twn`flex-row mt-2`}>
                    <View style={twn`flex-1`}>
                        <CheckBox
                            value={isSelectedOito}
                            onValueChange={setSelectionOito}
                        />
                    </View>
                    <View style={twn`flex-auto mr-16`}>
                        <Text>Sorologia para sífilis (VDRL)</Text>
                    </View>
                </View>
                <View style={twn`flex-row mt-2`}>
                    <View style={twn`flex-1`}>
                        <CheckBox
                            value={isSelectedNove}
                            onValueChange={setSelectionNove}
                        />
                    </View>
                    <View style={twn`flex-auto mr-20`}>
                        <Text>Sorologia ELISA anti-HIV </Text>
                    </View>
                </View>
            </View>

            <Text style={twn`text-xl mt-2`}> 2º Trimestre </Text>
            <View style={twn`bg-pink-100 px-4 pt-2 pb-2 text-center border border-pink-400 mt-2 text-lg ml-2 mr-4 shadow-md rounded-md `}>
                <View style={twn`flex-row`}>
                    <View style={twn`flex-1`}>
                        <CheckBox
                            value={isSelectedSegTrimUm}
                            onValueChange={setSelectionSegTrimUm}
                        />
                    </View>
                    <View style={twn`flex-auto mr-0 ml-6`}>
                        <Text>Ultrassom para acompanhar crescimento fetal, peso e líquido da placenta</Text>
                    </View>
                </View>
                <View style={twn`flex-row mt-2`}>
                    <View style={twn`flex-1`}>
                        <CheckBox
                            value={isSelectedSegTrimDois}
                            onValueChange={setSelectionSegTrimDois}
                        />
                    </View>
                    <View style={twn`flex-auto mr-0 ml-8`}>
                        <Text>Curva Glicêmica ou teste de tolerância à glicose (avaliação de diabetes gestacional)</Text>
                    </View>
                </View>
            </View>
            <Text style={twn`text-xl mt-2`}> 3º Trimestre </Text>
            <View style={twn`bg-pink-100 px-4 pt-2 pb-2 text-center border border-pink-400 mt-2 text-lg ml-2 mr-4 shadow-md rounded-md `}>
                <View style={twn`flex-row`}>
                    <View style={twn`flex-1`}>
                        <CheckBox
                            value={isSelectedTerTrimUm}
                            onValueChange={setSelectionTerTrimUm}
                        />
                    </View>
                    <View style={twn`flex-auto mr-24`}>
                        <Text>  Hemograma completo</Text>
                    </View>
                </View>
                <View style={twn`flex-row mt-2`}>
                    <View style={twn`flex-1`}>
                        <CheckBox
                            value={isSelectedTerTrimDois}
                            onValueChange={setSelectionTerTrimDois}
                        />
                    </View>
                    <View style={twn`flex-auto mr-0 ml-6`}>
                        <Text>VDRL e controles sorológicos que forem necessários</Text>
                    </View>
                </View>
                <View style={twn`flex-row mt-2`}>
                    <View style={twn`flex-1`}>
                        <CheckBox
                            value={isSelectedTerTrimTres}
                            onValueChange={setSelectionTerTrimTres}
                        />
                    </View>
                    <View style={twn`flex-auto mr-0 ml-6`}>
                        <Text>Cultura vaginal e retal para a pesquisa de Streptococcus do grupo β hemolítico</Text>
                    </View>
                </View>
                <View style={twn`flex-row mt-2`}>
                    <View style={twn`flex-1`}>
                        <CheckBox
                            value={isSelectedTerTrimQuatro}
                            onValueChange={setSelectionTerTrimQuatro}
                        />
                    </View>
                    <View style={twn`flex-auto mr-0 ml-8`}>
                        <Text>Ultrassonografia obstétrica, para avaliação do crescimento fetal.</Text>
                    </View>
                </View>
            </View>
            </View>
        </ScrollView>
    );
}
