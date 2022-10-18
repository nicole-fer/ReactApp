import React , { useEffect, useState } from 'react';
import {ScrollView, Text , View } from 'react-native';
import twn from '../Tailwind';
import { fb } from '../firebaseconfig'
import { db } from '../firebaseconfig'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { AntDesign, FontAwesome } from '@expo/vector-icons'


 export default function Tarefas({navigation}) {
    const [tarefa, setTarefa] = useState("");
    const [loading, setLoading] = useState(true);
    const [car, setCar] = useState(true);
    const [firebaseData, setFirebaseData] = useState({})
    const [teste, setTeste] = useState({})
    var user = fb.auth().currentUser;   

    useEffect(() => {
      db.collection('MyCollection').doc(user.uid).collection('Tarefa').get().then(querySnapshot  => {
        const allTasks = []
        querySnapshot.forEach((doc) => {
           allTasks.push({ id: doc.id, ...doc.data() })

        })
        if (allTasks != null){
          setTarefa(allTasks)
          setLoading(false)
        }
      });
  },[])
  
  var stringT = JSON.stringify(tarefa);
  console.log(tarefa)

    return (
        <ScrollView style={twn`w-full pt-4 bg-white`}>  
           {loading && 
              <View>   
                <LoadingIcon size="large"/> 
              </View>}
          {!loading && <View style={twn`flex-1 justify-center w-full pl-5 pr-2 pt-4 flex items-stretch`}> 
            <View> 
              <View style={twn`flex-row`} >
                <Text  numberOfLines={2} style={twn`pb-4 font-bold text-lg flex-1 ml-2`}>Clique para Adicionar uma Tarefa</Text>
                <TouchableOpacity  onPress={() => navigation.navigate('Adicionar Tarefa')}>
                  <Text style={twn`rounded-full font-bold bg-pink-700 text-2xl w-16 pt-4 pb-4 text-center text-teal-300 flex-auto mr-4 ml-16`}> + </Text>  
                </TouchableOpacity>
              </View>
              {tarefa.map(usuario=>
                (<View style={twn`pt-2 bg-teal-500 rounded-md text-center mt-4 flex-row mr-4 pb-2`}>
                  <View style={twn`self-center rounded-full bg-pink-700 px-2 py-2 ml-2`}><AntDesign name="filetext1" size={32} color={'#ffffff'}/></View>
                  <Text style={twn`flex-1 font-bold mt-2 text-xl text-center ml-4 mb-3 text-pink-700 pr-10`}>{usuario.tarefa}</Text>
                  <View style={twn`pt-3 pr-4`} onPress={() => navigation.navigate('Editar Tarefa', { idTarefa: usuario.id})} ><FontAwesome onPress={() => navigation.navigate('Editar Tarefa',{ idTarefa: usuario.id})} name="pencil" size={24} color={'#ffffff'}/></View>
                </View>))}
            </View>
          </View>}

        </ScrollView>
    );
};


const LoadingIcon = styled.ActivityIndicator `
    margin-top:50px
`



