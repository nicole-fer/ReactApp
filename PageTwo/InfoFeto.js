import React , { useEffect, useState } from 'react';
import {ScrollView, Text , View, Image, ImageBackground } from 'react-native';
import twn from '../Tailwind';

 export default function AddTarefas({ navigation, route }) {  

    var semanas = route.params.semanasFeto

    if (semanas == 1 || semanas == 2 || semanas === 3 || semanas == 4 ){
      semanas = "1 - 4"
      var img = require('../images/1.png')    
      var descricao = "uma sementinha de papoula" 
      var peso = "--"
      var tamanho = "--"
    } 
    else if (semanas == 5){
        var img = require('../images/2.png')
        var descricao = "um gergelim" 
        var peso = "--"
        var tamanho = "--"
    }
    else if(semanas == 6){
        var img = require('../images/3.png')
        var descricao = "uma lentilha" 
        var peso = "--"
        var tamanho = "--"
    }
    else if(semanas == 7){
        var img = require('../images/4.png')
        var descricao = "um grão de bico" 
        var peso = "--"
        var tamanho = "--"
    }
    else if(semanas == 8){
        var img = require('../images/5.png')
        var descricao = "uma framboesa" 
        var peso = "1 gramas"
        var tamanho = "1,6 cm"
    }
    else if(semanas == 9){
        var img = require('../images/6.png')        
        var descricao = "uma uva" 
        var peso = "2 gramas"
        var tamanho = "2,3 cm"
    }
    else if(semanas == 10){
        var img = require('../images/7.png')        
        var descricao = "uma azeitona verde" 
        var peso = "4 gramas"
        var tamanho = "3,1 cm"
    }
    else if(semanas == 11){
        var img = require('../images/8.png')
        var descricao = "um figo" 
        var peso = "7 gramas"
        var tamanho = "4,1 cm"
    }
    else if(semanas == 12){
        var img = require('../images/8.png')
        var descricao = "um limão" 
        var peso = "14 gramas"
        var tamanho = "5,4 cm"
    }
    else if(semanas == 13){
        var img = require('../images/9.png')
        var descricao = "uma vagem de ervilha" 
        var peso = "23 gramas"
        var tamanho = "7,4 cm"
    }
    else if(semanas == 14){
        var img = require('../images/10.png')
        var descricao = "um limão siciliano" 
        var peso = "43 gramas"
        var tamanho = "8,7 cm"
    }
    else if(semanas == 15){
        var img = require('../images/11.png')
        var descricao = "uma maçã" 
        var peso = "70 gramas"
        var tamanho = "10,1 cm"
    }
    else if(semanas == 16){
        var img = require('../images/12.png')
        var artigo = "um"
        var descricao = "Pedaço de gengibre" 
        var peso = "100 g"
        var tamanho = "11,6 cm"
        var descricaoCorpo = "O óvulo é levado para dentro das trompas de falópio e aguarda a chegada do espermatozóide. Algumas mudanças comuns que você pode experimentar incluem seios sensíveis, alterações de humor, exaustão, constipação, gases no estômago e enjoo. Esse desconforto ocorre devido às alterações hormonais."
        var sintomas = "um pouco de dor nas mamas, dor pélvica leve e até mesmo um impulso sexual aumentado."
    }
    else if(semanas == 17){
        var img = require('../images/13.png')
        var artigo = 'uma'
        var descricao = "Romã" 
        var peso = "140 gramas"
        var tamanho = "13,0 cm"
        var descricaoCorpo = "O óvulo é levado para dentro das trompas de falópio e aguarda a chegada do espermatozóide. Algumas mudanças comuns que você pode experimentar incluem seios sensíveis, alterações de humor, exaustão, constipação, gases no estômago e enjoo. Esse desconforto ocorre devido às alterações hormonais."
        var sintomas = "um pouco de dor nas mamas, dor pélvica leve e até mesmo um impulso sexual aumentado."
    }
    else if(semanas == 18){
        var img = require('../images/14.png')
        var descricao = "uma batata doce" 
        var peso = "190 gramas"
        var tamanho = "14,2 cm"
    }
    else if(semanas == 19){
        var img = require('../images/15.png')
        var descricao = "uma laranja" 
        var peso = "240 gramas"
        var tamanho = "15,3 cm"
    }
    else if(semanas == 20){
        var img = require('../images/16.png')
        var descricao = "uma banana pequena" 
        var peso = "300 gramas"
        var tamanho = "16,4 cm"
    }
    else if(semanas == 21){
        var img = require('../images/17.png')
        var descricao = "um pepino" 
        var peso = "360 gramas"
        var tamanho = "26,7 cm"
    }
    else if(semanas == 22){
        var img = require('../images/18.png')
        var descricao = "um côco" 
        var peso = "430 gramas"
        var tamanho = "27,9 cm"
    }
    else if(semanas == 23){
        var img = require('../images/19.png')
        var descricao = "uma manga" 
        var peso = "501 gramas"
        var tamanho = "28,9 cm"
    }
    else if(semanas == 24){
        var img = require('../images/20.png')
        var descricao = "um melão" 
        var peso = "600 gramas"
        var tamanho = "30,0cm"
    }
    else if(semanas == 25){
        var img = require('../images/20.png')
        var descricao = "um melão" 
        var peso = "660 gramas"
        var tamanho = "34,6cm"
    }
    else if(semanas == 26){
        var img = require('../images/21.png')
        var descricao = "um couve-flor" 
        var peso = "760 gramas"
        var tamanho = "35,6cm"
    }
    else if(semanas == 27){
        var img = require('../images/22.png')
        var descricao = "um repolho roxo" 
        var peso = "875 gramas"
        var tamanho = "36,6cm"
    }
    else if(semanas == 28){
        var img = require('../images/23.png')
        var descricao = "uma berinjela" 
        var peso = "1005 gramas"
        var tamanho = "37,6cm"
    }
    else if(semanas == 29){
        var img = require('../images/24.png')
        var descricao = "uma abóbora verde" 
        var peso = "1153 gramas"
        var tamanho = "38,6cm"
    }
    else if(semanas == 30){
        var img = require('../images/25.png')
        var descricao = "uma mandioca" 
        var peso = "1319 gramas"
        var tamanho = "39,9cm"
    }
    else if(semanas == 31){
        var img = require('../images/26.png')
        var descricao = "um abacaxi" 
        var peso = "1502 gramas"
        var tamanho = "41,1cm"
    }
    else if(semanas == 32){
        var img = require('../images/27.png')
        var descricao = "uma abóbora média" 
        var peso = "1702 gramas"
        var tamanho = "42,4cm"
    }
    else if(semanas == 33){
        var img = require('../images/28.png')
        var descricao = "um melão cantaloupe" 
        var peso = "1918 gramas"
        var tamanho = "43,7cm"
    }
    else if(semanas == 34){
        var img = require('../images/28.png')
        var descricao = "um melão cantaloupe" 
        var peso = "2146 gramas"
        var tamanho = "45,0cm"
    }
    else if(semanas == 35){
        var img = require('../images/29.png')
        var descricao = "uma abóbora menina" 
        var peso = "2383 gramas"
        var tamanho = "46,2cm"
    }
    else if(semanas == 36){
        var img = require('../images/30.png')
        var descricao = "um mamão" 
        var peso = "2622 gramas"
        var tamanho = "47,4cm"
    }
    else if(semanas == 37){
        var img = require('../images/31.png')
        var descricao = "uma folha de acelga" 
        var peso = "2859 gramas"
        var tamanho = "48,6cm"
    }
    else if(semanas == 38){
        var img = require('../images/32.png')
        var descricao = "uma abóbora" 
        var peso = "3083 gramas"
        var tamanho = "49,8cm"
    }
    else if(semanas == 39){
        var img = require('../images/33.png')
        var descricao = "uma jaca" 
        var peso = "3288 gramas"
        var tamanho = "50,7cm"
    }
    else if(semanas >= 40){
        var img = require('../images/34.png')
        var descricao = "uma melancia" 
        var peso = "3462 gramas"
        var tamanho = "51,2cm"
    }

    const bgTeal = { uri: "https://lh3.googleusercontent.com/UAweV-efs6528sQ8K0lBM2WSywFHhl5Oa2Yq0pANI6UU0BR4HH1Yeg5K5ahntrgWiiGfPoS2ZOrnxzrENtyH3FLambrmc9n8tUm5G1g5mzvphXz8ntW8_LLu_A1QYHT1u36XHy24PuV6D_sF3thyHWcSSQ90xiUtRXO95NQXNhWG70JTezA03boh-BXVFuNkDqvrlaWktaLsDh8TTaeeugC6Ay-sY9w918TOL3OY4t-60G4iBVT6ZUIrbqdkCJu6c8FRJhVW6YQn58EqlhNF5elq__PjMkMSpgzYWH13YiNpoLtuZ_M81-_W8vZlw37Enbk4YHLiuDUprg2Sg-C0koBS3hkuxnKFJLXr8yGh8D-he_jjwITR7VbvbiSnGA43eFzNGUtNHA9JTN56_I5W8KscWb65Sy9ADAIA6jCBtdjNAKy0_kBtEhaU2QX2DgoC-qyaxdxR4e4cdkxydPIwJOuZa18zuBRS637yY3OmFaY2SlIcZJ2S7tPYnLVz8GmNXZic76BvxH0KQmbTtSQTnwMdl_lg-ka9MVSnTn8Tmypu3FuRTe8prDmxTUpXdh3IGXbw-rjIJu354czFKy9sU6SXSWto_ui7wHRC0V57KcwP8nlFMRKp-xQbHANjBfPR1Lwq_m747fWrrG3hYIKPGauvHBvVH755C5FBYra_G_z3y4Vx96RkdOPRF3S_V1ry4wfVNXRjizT6Shu2bp7uREwdzTUjeRttDTbTQaX5QF6KjeSHkPdOMWvQwe7aOs9i-rEe5idPMMYOM_fnHcL6VfZy2twNdiqHJcjpeg30q-2ykPBBun8pXQt3kU1aFAbAt7XiTfad6gZN_uG6x2NDBiUlXWgMnhu3Y9YKsMLjbOweJHZr99WEztferI7wmSFMaE744KjmYAMqIBKS2xj_z1AM_KG0lmryEsjBBJolkA4KXsesbiStB9DQr3YY10HZ_RbuYTT_rBiLvbkH_ohO=w402-h568-no?authuser=0" };
    const bgPink = { uri:"https://lh3.googleusercontent.com/G7qLxrPggIhmq2JSKEq-bKBoRVWrskN9Cq3z4jKnySf8OxjGxSEjnmxkJFT-zwRZkqJfdBXq3P5Er_S1oi4l3fQ6oExdBszPxL04AExpyk8QmTU7-s9Esd5wrBtTFPFZgBUU1ajX4dgfmKAweI12whLveNzpujOrq1XJ5FmRjgopyiwDlIN_DqJHCHVJdUQljyIAx1vcwqgvpC3HF8R4Ynp9ulS-sck_20u8Y81dlrIoMu5hpCM0CtV42dhanv-G3O6Xgfh8nPwj3wV2WxG2q9vEXwkwCbWfsmbAVzZUqxrFp54ZS0CmM4y7psGFUiLSvtRLQP2ofS-AjJroaj3sH2C6b-WuvKTD8dEhU8d2nKa6tEg3Bc2re-QnTj51TKNqRZNVGOTsAn8d8ZCu9-y9A9PZ9NHVj4TNfgmHzFfMgVHgMRfBRwh3dU-Pt7jGqf3OgxnYwLA5cNHjOwk5kFC4UHddpfTSRQTchbrDy15WPgun7j1dzXvAU0oz_PIy6rvtw0s3__B260dQo8jqronJXICs7rwaERMS-nHhfhH_4AitCanqWJX3SslPoY3bNo8herNis0GT4UT0r2AVFr-YRfk9ZOEKLSAkfyCb2nkNwfEHOQgXXcpAk5kv6H0xFZ13QuYj2zIBF3fnaen0A53hcw1Re1BxA7CzrSYE2FFFm4cdbrxpMdo-yqaHyfWb-8nOS4eMEp93UJHS8QTa6Q3-MAc6mv2SzoEFP7M0wRlFyOthrQiFvw3e39-g84yo4eWcXv9tW8CKaYkLTRLiwdf5tyXH4063oOIRHs44TKI87EDvfL8RMwwMStWTO7_yHMdsz57Sdgik_QD85Zrl3BuTkuWa1vBGd3Z7TAE09fcNuvhhbtik2QhfYBIQ0Q1qhydx93_DR8ewq94bctB8Z7h4C6ywmbLwTvomekDsRH6hc0tDJQ=w402-h568-no?authuser=0" }


    var cor = semanas % 2 == 0 
    if(cor){
        var image = bgTeal
    } else {
        var image = bgPink
    }

    return (
        <ScrollView style={twn`w-full`}>
            <ImageBackground source={image}  resizeMode="cover">
            <View  style={twn`flex-1 justify-center w-full pl-5 pr-2 pt-8 flex items-stretch`}>  
            <View>
                <Text style={twn`text-center text-xl font-bold`}>Gravidez de {semanas} semanas</Text>
                <Text style={twn`mx-4 font-bold pt-2 text-pink-700 text-center`}>Seu bebê agora está do tamanho de {artigo}</Text>
                <Text style={twn`text-center text-lg pt-2 font-bold`}>{descricao}</Text>
            </View>
            <View>
                <Image
                    style={twn`w-64 h-56 ml-8`}
                    source={img}
                />
            </View>
            <View  style={twn`flex-row bg-white mb-6 text-center mx-12 pt-2 pb-2 rounded-lg`}>
                <View style={twn`flex-auto `}>
                    <Text style={twn`ml-6 mr-6 font-bold`}>
                    Peso:
                    </Text>
                    <Text style={twn`mr-6 font-bold ml-6 text-lg`}>
                        {peso}
                    </Text>
                </View>
                <View style={twn`flex-auto`}>
                    <Text style={twn`mr-6 font-bold ml-6`}>
                        Tamanho:
                    </Text>
                    <Text style={twn`mr-6 font-bold ml-6 text-lg`}>
                        {tamanho}
                    </Text>
                </View>
            </View>
            <View>
                <Text style={twn`mr-16 font-bold text-justify`}>
                    No corpo da mamãe:  {descricaoCorpo}
                </Text>
                <Text style={twn`mr-16 font-bold text-justify mt-4 mb-4`}>
                    Sintomas:  {sintomas}
                </Text>
            </View>
          </View>
          </ImageBackground>  
        </ScrollView>
        
    );
};





