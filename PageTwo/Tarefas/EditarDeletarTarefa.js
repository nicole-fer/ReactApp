
import React , { useEffect, useState } from 'react';
import {ScrollView, Text , View, TextInput } from 'react-native';
import styled from 'styled-components/native';
import twn from '../../Tailwind';
import { fb } from '../../firebaseconfig'
import { db } from '../../firebaseconfig'

export default function EditarDeletarTarefa ({navigation, route}){

    const [gest, setgest] = useState({})
    const [car, setCar] = useState(true);
    const [loading, setLoading] = useState(true);
    var user = fb.auth().currentUser;   

    var gest1 = route.params.idTarefa
    var vcd = gest1

     useEffect(() => {
        db.collection('MyCollection').doc(user.uid).collection('Tarefa').doc(gest1).get().then(documentSnapshot  => {
            if (documentSnapshot.exists) {
            setgest(documentSnapshot.data());
            setLoading(false);
            } 
        });
    },[]) 
   
    const editarTarefa = () => {
      const tarefa = gest
      db.collection("MyCollection").doc(user.uid).collection('Tarefa').doc(gest1).update({
        tarefa:tarefa,
    })
    navigation.navigate('Agenda') 
    }

    const deletarTarefa = () => {
      const tarefa = gest
      db.collection("MyCollection").doc(user.uid).collection('Tarefa').doc(gest1).delete()
      navigation.navigate('Agenda') 
    }

  return (
    <ScrollView style={twn`w-full pt-4 bg-white`}> 
        {loading && 
          <View>   
            <LoadingIcon size="large"/> 
          </View>
        } 
       {!loading && <View  style={twn`flex-1 justify-center w-full pl-5 pr-2 pt-2 flex items-stretch`}>  
      <View style={twn`flex-row`} >
          <Text  numberOfLines={2} style={twn`pb-4 font-bold text-xl flex-1 ml-2`}>Editar uma Tarefa</Text>
      </View>
      <TextInput value={gest.tarefa} onChangeText={setgest}  style={twn`border-2 border-pink-700 bg-pink-100 p-3 rounded-md m-2 font-bold`}  
        >  
      </TextInput>
      <View style={twn`flex-row ml-5 mt-3`} >
        <View 
            style={twn`p-2 bg-red-700 font-bold rounded-2xl w-32 mt-2 self-end mr-6`}
            onPress={deletarTarefa}
            >
                <Text style={twn`text-center font-bold text-lg text-pink-50`} onPress={deletarTarefa} > Excluir </Text>         
        </View> 

        <View 
            style={twn`p-2 bg-teal-600 font-bold rounded-2xl w-32 mt-2 self-end mr-6`}
            onPress={editarTarefa}
            >
                <Text style={twn`text-center font-bold text-lg text-pink-50`} onPress={editarTarefa} > Editar </Text>         
        </View>
      </View>
    </View> 
    }
  </ScrollView>
  )
}

const LoadingIcon = styled.ActivityIndicator `
    margin-top:50px
`