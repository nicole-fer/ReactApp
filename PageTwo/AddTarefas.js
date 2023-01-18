import React  from 'react';
import {ScrollView, Text , View, Image } from 'react-native';
import twn from '../Tailwind';
import { fb } from '../firebaseconfig'
import { db } from '../firebaseconfig'
import { TextInput } from 'react-native-gesture-handler';

 export default function AddTarefas({ navigation }) {
    const [tarefa, setTarefa] = React.useState(null);
    var user = fb.auth().currentUser;   

  const AddTarefa = () => {
    db.collection("MyCollection").doc(user.uid).collection('Tarefa').add({
        tarefa:tarefa,
    })
    navigation.navigate('Agenda')
  }

    return (
        <ScrollView style={twn`w-full pt-4 bg-white`}>  
            <View  style={twn`flex-1 justify-center w-full pl-5 pr-2 pt-2 flex items-stretch`}>  
            <View>
              <Image
                  style={twn`w-full h-48 mb-8`}
                  source={require('../images/tarefa.jpg')} 
              />
            </View>
            <View style={twn`flex-row`} >
                <Text  numberOfLines={2} style={twn`pb-4 font-bold text-xl flex-1 ml-2`}>Adicionar uma Tarefa</Text>
            </View>
            <TextInput style={twn`border-2 border-pink-700 bg-pink-100 p-3 rounded-md m-2 font-bold`}  
                value={tarefa}
                onChangeText={setTarefa}>  
            </TextInput>
            <View 
                style={twn`p-2 bg-teal-600 font-bold rounded-2xl w-32 mt-2 self-end mr-6`}
                >
                    <Text style={twn`text-center font-bold text-lg text-pink-50`} onPress={AddTarefa}> Adicionar </Text>         
            </View>
          </View>
        </ScrollView>
        
    );
};





