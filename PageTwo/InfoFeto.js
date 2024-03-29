import React  from 'react';
import {ScrollView, Text , View, Image, ImageBackground } from 'react-native';
import twn from '../Tailwind';

 export default function AddTarefas({ route }) {  

    var semanas = route.params.semanasFeto

    if (semanas == 1 || semanas == 2 || semanas === 3 || semanas == 4 ){
      semanas = "1 - 4"
      var img = require('../images/1.png')
      var artigo = 'uma'
      var descricao = "Sementinha de papoula" 
      var peso = "--"
      var tamanho = "--"
      var descricaoCorpo = 'A formação da placenta e do cordão umbilical começa e o óvulo fertilizado pode penetrar no útero e pressionar, fazendo com que ele derrame algumas gotas de sangue.'
      var sintomas = 'inchaço, cólicas leves no estômago, manchas suaves, enjoos, alteração de humor, seios continuamente doloridos.'
    } 
    else if (semanas == 5){
        var img = require('../images/2.png')
        var descricao = "Gergelim" 
        var artigo = 'um'
        var peso = "--"
        var tamanho = "--"
        var descricaoCorpo = 'O embrião começa a se formar e cresce em tamanho ao de um grão. Alterações e desenvolvimento do cérebro, órgãos e vasos sanguíneos do embrião ocorrem. Um sulco se desenvolve na parte de trás do bebê que se fecha para desenvolver o tubo neural, que mais tarde se torna a medula espinhal do bebê.'
        var sintomas = 'Os sintomas da gravidez serão mais evidentes a partir desta semana até o final do primeiro trimestre. Os altos níveis de progesterona, baixo nível de açúcar no sangue, baixa pressão sanguínea e aumento do volume de sangue vão deixá-la muito cansada. Sua barriga pode parecer um pouco inchada ou você pode sentir que ganhou um pouco mais de peso.'
    }
    else if(semanas == 6){
        var img = require('../images/3.png')
        var descricao = "Lentilha" 
        var artigo = 'uma'
        var peso = "--"
        var tamanho = "--"
        var descricaoCorpo = 'O coração e sistema circulatório do bebê já são funcionais. O embrião é cercado por uma membrana protetora e fica preso ao saco vitelino.'
        var sintomas = 'Os sintomas da gravidez estão todos trabalhando juntos durante esta semana. Você pode ser suscetível a náuseas e fadiga. Sua pressão arterial também cairá como resultado da crescente produção dos níveis de hormônio da gravidez. Exercício físico orientado irá ajudá-la a lidar com o estresse e dar alívio.'
    }
    else if(semanas == 7){
        var img = require('../images/4.png')
        var descricao = "Grão de bico" 
        var artigo = 'um'
        var peso = "--"
        var tamanho = "--"
        var descricaoCorpo= 'Seu bebê está crescendo rapidamente dentro do seu corpo. O cérebro e a face do embrião começam a tomar forma, como também os braços e dedos. Sinais de atividade das ondas cerebrais no embrião começam a aparecer. Sua barriga não faz você parecer grávida, embora você possa sentir muita mudança dentro do seu corpo. Seu bebê é muito pequeno neste momento. Tudo o que você sente é inchaço em torno de sua barriga.'
        var sintomas = ' Você experimentará mudanças de humor, irritabilidade e sentir-se mal, embora seja um bom sinal, pois indica que seus hormônios da gravidez estão em movimento.'
    }
    else if(semanas == 8){
        var img = require('../images/5.png')
        var descricao = "Framboesa" 
        var artigo = 'uma'
        var peso = "1 gramas"
        var tamanho = "1,6 cm"
        var descricaoCorpo = 'Você está prestes a completar dois terços do seu primeiro trimestre. O início da atividade das ondas cerebrais no embrião é marcado a partir desta semana. A formação dos ossos, da medula espinhal e do intestino também começou. Uma ultrassonografia também pode ser recomendada para determinar o progresso da sua gravidez. O tamanho do bebê é quase dois centímetros de comprimento.'
        var sintomas = ' - Os seios estão crescendo e se preparando para a lactação. \n  - O útero está crescendo e pressionando contra a bexiga, resultando em micção frequente. \n  - O útero em crescimento também pode causar câimbras em torno de sua área abdominal. \n - O aumento do suprimento de sangue para o peito resulta em veias varicosas. \n - A aréola pode se tornar mais escura do que o normal porque os hormônios estrogênio e progesterona causam um aumento na pigmentação. \n - Os mamilos tornam-se proeminentes e podem secretar leite de alta octanagem que também é chamado de colostro.'
    }
    else if(semanas == 9){
        var img = require('../images/6.png')        
        var descricao = "Uva" 
        var artigo = 'uma'
        var peso = "2 gramas"
        var tamanho = "2,3 cm"
        var descricaoCorpo = 'Este é o período em que seu bebê completa o estágio embrionário e se desenvolve em um feto. Através do ultrassom, você poderá ouvir o batimento cardíaco do seu bebê! Este ultrassom também contém informações cruciais, como o estado do feto, o útero e a duração da sua gravidez.'
        var sintomas = 'Algumas mulheres já sentem um ligeiro espessamento da cintura. Seus seios começarão a ficar macios e sensíveis. Seu peso não vai diferir muito, embora algumas mulheres possam experimentar até perda de peso devido a náusea.  Sua barriga deve ficar mais firme quando o útero começar a inchar.'
    }
    else if(semanas == 10){
        var img = require('../images/7.png')        
        var descricao = "Azeitona verde" 
        var artigo = 'uma'
        var peso = "4 gramas"
        var tamanho = "3,1 cm"
        var descricaoCorpo = 'A formação genital ocorre do feto. O coração do seu bebê está agora totalmente formado e totalmente funcional. O oxigênio é fornecido através dos cordões umbilicais e movimentos ocasionais de respiração podem ser notados no útero. A formação da estrutura do cérebro, cabeça e a massa cerebral aumentará. Também terão se formado os membros, abdome e ossos.'
        var sintomas = 'A menos que você ainda esteja tendo o mesmo nível de enjôo violento de antes, você também deve ganhar pelo menos um quilo. Como o útero continua a se expandir, sua barriga vai ficar mais redonda. O enjoo tende a diminuir nesse ponto.'
    }
    else if(semanas == 11){
        var img = require('../images/9.png')
        var descricao = "Figo" 
        var artigo = 'um'
        var peso = "7 gramas"
        var tamanho = "4,1 cm"
        var descricaoCorpo = 'A formação genital ocorre do feto. O coração do seu bebê está agora totalmente formado e totalmente funcional. O oxigênio é fornecido através dos cordões umbilicais e movimentos ocasionais de respiração podem ser notados no útero. A formação da estrutura do cérebro, cabeça e a massa cerebral aumentará. Também terão se formado os membros, abdome e ossos.'
        var sintomas = 'As mudanças no corpo da gestante, semana a semana, no primeiro trimestre, são proeminentes neste estágio.O apetite aumenta e você pode encontrar um desejo por coisas não relacionadas à comida (aqueles desejos estranhos que você ouve de sua amiga que acabou de ser mãe, sabe?). Alguns sintomas que você notará nesta semana: caimbras nas pernas e a “linea nigra” que é uma linha escura que aparecerá no centro da sua barriga.'
    }
    else if(semanas == 12){
        var img = require('../images/8.png')
        var descricao = "Limão" 
        var artigo = 'um'
        var peso = "14 gramas"
        var tamanho = "5,4 cm"
        var descricaoCorpo = ' Os cabelos do bebê surgem como penugem e sua genitália começa a ficar mais definida.'
        var sintomas = 'muitos gases, aumento da frequência cardíaca, quadris se alargando para acomodar o crescimento de seu útero.'
    }
    else if(semanas == 13){
        var img = require('../images/10.png')
        var descricao = "Vagem de ervilha" 
        var artigo = 'uma'
        var peso = "23 gramas"
        var tamanho = "7,4 cm"
        var descricaoCorpo = ' A bexiga urinária já está funcionando. Ele ingere o líquido amniótico e o elimina através da urina.'
        var sintomas = 'A sensação de cansaço e a náusea começam a abrandar. Consumir muito líquido é importante e você pode começar a cuidar da sua comida. Manter uma dieta rica em vitaminas, minerais e outros nutrientes é essencial.'
    }
    else if(semanas == 14){
        var img = require('../images/11.png')
        var descricao = "Limão siciliano" 
        var artigo = 'um'
        var peso = "43 gramas"
        var tamanho = "8,7 cm"
        var descricaoCorpo = 'Os órgãos do bebê começam a funcionar. Você experimentará pela primeira vez os tremores do estômago ou os primeiros sinais de chutes do bebê.'
        var sintomas = 'Seu segundo trimestre certamente será mais suave do que o primeiro. Você deve estar atenta para ganho ou perda de peso. É aconselhável ganhar um quilo ou dois.'
    }
    else if(semanas == 15){
        var img = require('../images/12.png')
        var descricao = "Maçã" 
        var artigo = 'uma'
        var peso = "70 gramas"
        var tamanho = "10,1 cm"
        var descricaoCorpo = 'Sua barriga deve estar mais pronunciada. Seu bebê já consegue chupar os dedinhos!'
        var sintomas = 'Algumas veias, como as da barriga, mamas e pernas, tendem a ficar mais visíveis em virtude do aumento do volume sanguíneo. Fará testes de triagem para proteínas do sangue e vai saber se seu bebê tem síndrome de Down ou outras alterações genéticas são feitos nesta fase.'
    }
    else if(semanas == 16){
        var img = require('../images/13.png')
        var descricao = "Pedaço de gengibre" 
        var artigo = 'um'
        var peso = "100 g"
        var tamanho = "11,6 cm"
        var descricaoCorpo = "Um surto de crescimento começa seguido por formação óssea. Sua barriga estará mais dura e firme. Você também notará sinais de que o movimento de seu bebê se tornará mais proeminente. O seu bebê provavelmente começará a reconhecer vozes, para que você e seu parceiro possam começar a conversar com ele na barriga."
        var sintomas = "dores nas costas agora devido ao peso do feto, seus seios certamente serão maiores e continuarão sensíveis, seus olhos serão mais sensíveis devido à mudança de hormônios, você pode acabar se resfriando com mais frequência"
    }
    else if(semanas == 17){
        var img = require('../images/14.png')
        var descricao = "Romã" 
        var artigo = 'uma'
        var peso = "140 gramas"
        var tamanho = "13,0 cm"
        var descricaoCorpo = "Seu corpo está se esforçando para dar espaço para o seu bebê e você precisa estar preparada para se sentir um pouco desconfortável, Tudo isso, pois o bebê está ficando mais pesado dentro de você. Algumas estrias e veias ao redor da sua barriga devem começar a aparecer também."
        var sintomas = "indigestão e azia, problemas como resfriados, gazes, mudanças de humor, dor nas pernas, mais."
    }
    else if(semanas == 18){
        var img = require('../images/15.png')
        var descricao = "Batata doce" 
        var artigo = 'uma'
        var peso = "190 gramas"
        var tamanho = "14,2 cm"
        var descricaoCorpo = 'Na 18ª semana, o sistema nervoso do seu bebê estará funcionando bem e amadurecendo.  Ele pode reconhecer e ouvir vozes e é sensível a certos ruídos.'
        var sintomas = 'problemas de sono, câimbras, inchaços, hemorragias nasais, aumento da vontade de ir ao banheiro.'
    }
    else if(semanas == 19){
        var img = require('../images/16.png')
        var descricao = "Laranja" 
        var artigo = 'uma'
        var peso = "240 gramas"
        var tamanho = "15,3 cm"
        var descricaoCorpo = 'Você  deverá estar se sentindo com mais energia e ativa. Entretanto, por mais contraditório que pareça, você também pode se sentir um pouco mais cansada do que o normal, pois seu corpo está trabalhando duas vezes mais para acomodar seu bebê, que está crescendo rapidamente. Mais importante, seus seios provavelmente serão o dobro do tamanho normal. Além disso, você deve ter ganho um pouco mais de peso.'
        var sintomas = 'suor, sentir a temperatura do corpo mais quente, devido ao fato de que o fluxo sanguíneo em seu sistema aumentou, dor no quadril, câimbras (devido ao ganho de peso, hormônios e fadiga), dor abdominal (devido ao crescimento do útero).'
    }
    else if(semanas == 20){
        var img = require('../images/17.png')
        var descricao = "Banana pequena" 
        var artigo = 'uma'
        var peso = "300 gramas"
        var tamanho = "16,4 cm"
        var descricaoCorpo = 'Imunidades são transferidas para o feto a partir do útero. O útero cresce em direção a sua caixa torácica. Os sintomas continuam. Dificuldade em respirar, aumento das caimbras, indigestão e azia. Na semana 20, normalmente é realizado o ultrassom morfológico'
        var sintomas = 'suor, sentir a temperatura do corpo mais quente, devido ao fato de que o fluxo sanguíneo em seu sistema aumentou, dor no quadril, câimbras (devido ao ganho de peso, hormônios e fadiga), dor abdominal (devido ao crescimento do útero).'
    }
    else if(semanas == 21){
        var img = require('../images/18.png')
        var descricao = "Pepino" 
        var artigo = 'um'
        var peso = "360 gramas"
        var tamanho = "26,7 cm"
        var descricaoCorpo = 'O tamanho do bebê é, normalmente, de 25-27 cm de comprimento e seu peso é de aproximadamente 350-400 gramas, e está empurrando lentamente contra seus órgãos. A partir daqui, se você tem 35 anos ou mais, se tem diabetes e outras condições crônicas, deve se preocupar um pouco com a forma como o corpo muda durante a gravidez. Sinais de estar em risco de eclâmpsia começam a aparecer a partir de mudanças corporais no terceiro trimestre.'
        var sintomas = 'Sua barriga, coxas, quadris e nádegas começarão a sofrer mais com o avanço da gravidez e isso poderá causar algumas estrias e varizes. Suas gengivas serão muito mais sensíveis do que o habitual. Você pode precisar aprender a lidar com os problemas mais comuns, como azia, hemorróidas e dor nas costas.'
    }
    else if(semanas == 22){
        var img = require('../images/19.png')
        var descricao = "Côco" 
        var artigo = 'um'
        var peso = "430 gramas"
        var tamanho = "27,9 cm"
        var descricaoCorpo = 'Este é o 5º mês do seu bebê. Os órgãos se desenvolvem mais plenamente e o sangue que passa pelo cordão umbilical fornece oxigênio ao feto e uma série de outros nutrientes.'
        var sintomas = 'Cabelos e unhas podem passar por transformações neste período, assim como a pele e o aumento de pelos.'
    }
    else if(semanas == 23){
        var img = require('../images/20.png')
        var descricao = "Manga" 
        var artigo = 'uma'
        var peso = "501 gramas"
        var tamanho = "28,9 cm"
        var descricaoCorpo = 'É a hora em que seu bebê começa a ganhar peso considerável. A barriga fica maior e seu centro de gravidade começa a mudar.'
        var sintomas = 'Você sentirá pés inchados e dor nos joelhos. As solas dos pés e das palmas das mãos podem ficar vermelhas e o corpo está propenso a provocar erupções cutâneas e marcas na pele.  As estrias se tornam mais evidentes'
    }
    else if(semanas == 24){
        var img = require('../images/21.png')
        var descricao = "Pimentão" 
        var artigo = 'um'
        var peso = "600 gramas"
        var tamanho = "30,0cm"
        var descricaoCorpo = 'A maior parte do peso do bebê é resultado de seus músculos, ossos, gordura e órgãos em crescimento. O rosto do bebê é extremamente pequeno, mas se aproximando da formação completa, com seus cabelos, sobrancelhas e cílios. Você experimentará chutes um pouco mais fortes e mais pronunciados do que antes. Terá que controlar o ganho de peso para uma gravidez saudável.'
        var sintomas = 'Você pode sentir bastante azia durante esta semana. A indicação de azia equivale ao crescimento de pêlos na cabeça do seu bebê. Mas outros incômodos também podem vir junto: dores musculares, dores nos pés, fadiga e tontura.'
    }
    else if(semanas == 25){
        var img = require('../images/22.png')
        var descricao = "Alho poró" 
        var artigo = 'um'
        var peso = "660 gramas"
        var tamanho = "34,6cm"
        var descricaoCorpo = 'Seu bebê está todo formadinho. Agora ganha peso de forma acelerada.'
        var sintomas = 'Você sentirá dores nas costas, no quadril e nas pernas. Fadiga e tontura retornarão. Problemas com o sono, azia, constipação e hemorróidas poderão afetar seu humor. Mas, lembre-se, tudo vai passar!'
    }
    else if(semanas == 26){
        var img = require('../images/23.png')
        var descricao = "Couve-flor" 
        var artigo = 'um'
        var peso = "760 gramas"
        var tamanho = "35,6cm"
        var descricaoCorpo = 'O desenvolvimento do sistema imunológico, dos órgãos sensoriais e a atividade cerebral do bebê, estão a todo vapor!'
        var sintomas = 'Pode ser uma fase desconfortável, pois o bebê começa a crescer e seu corpo começa a fazer mudanças para o parto, entre as alterações mais marcantes da fase, estão: dificuldade para dormir, inchaço, dor de cabeça, esquecimento, contrações, pressão alta, dificuldade para respirar, câimbras podem se tornar mais freqüente nesse estágio.'
    }
    else if(semanas == 27){
        var img = require('../images/24.png')
        var descricao = "Repolho roxo" 
        var artigo = 'um'
        var peso = "875 gramas"
        var tamanho = "36,6cm"
        var descricaoCorpo = 'A semana 27 marca o final do 2º trimestre. Nessa fase, o cansaço da gestante aumenta.'
        var sintomas = 'As alterações hormonais que ocorrem durante a gravidez são facilmente percebidas nesta etapa – o corpo quer preparar a mulher para o parto. A dor nas costas se intensifica e sua freqüência cardíaca aumenta.'
    }
    else if(semanas == 28){
        var img = require('../images/25.png')
        var descricao = "Berinjela" 
        var artigo = 'uma'
        var peso = "1005 gramas"
        var tamanho = "37,6cm"
        var descricaoCorpo = 'O terceiro trimestre começa e você começará a experimentar as contrações perto do abdômen. Sua barriga também vai crescer em tamanho e isso fará com que seu corpo se sinta desconfortável. A maior transformação no terceiro trimestre é o desenvolvimento dos ossos do bebê a partir da cartilagem, que acontece no sétimo e oitavo mês. Irá também desenvolver todos os seus 5 sentidos.'
        var sintomas = 'aparecimento de estrias, falta de sono durante a noite, inchaço nos pés. Podem incluir também o vazamento de seios.'
    }
    else if(semanas == 29){
        var img = require('../images/26.png')
        var descricao = "Abóbora verde" 
        var artigo = 'uma'
        var peso = "1153 gramas"
        var tamanho = "38,6cm"
        var descricaoCorpo = 'O bebê é bastante ativo neste estágio e se sente apertado dentro do útero. O sistema respiratório e as funções dos órgãos se desenvolvem'
        var sintomas = 'A produção de prolactina aumenta e os seus seios secretam colostro.'
    }
    else if(semanas == 30){
        var img = require('../images/27.png')
        var descricao = "Mandioca" 
        var artigo = 'uma'
        var peso = "1319 gramas"
        var tamanho = "39,9cm"
        var descricaoCorpo = 'Seu útero continua crescendo e começa a se amontoar no diafragma. Você vai sentir dificuldade em respirar e pressão na bexiga, acentuando suas idas ao banheiro. Seu bebê pesa mais e, conforme ele cresce, o líquido amniótico que o envolve encolhe. Sua visão está se desenvolvendo e o esqueleto endurecendo.'
        var sintomas = 'As mudanças no corpo da gestante, semana a semana,  durante a gravidez são consideravelmente rápidas no último trimestre, principalmente seu ganho de peso. Desconfortos ainda continuam mas lembre-se, está quase!'
    }
    else if(semanas == 31){
        var img = require('../images/28.png')
        var descricao = "Abacaxi" 
        var artigo = 'um'
        var peso = "1502 gramas"
        var tamanho = "41,1cm"
        var descricaoCorpo = 'O desenvolvimento do cérebro do seu bebê está a toda velocidade'
        var sintomas = ' No meio do terceiro trimestre, os sintomas da gravidez só vão ficar mais variados. No entanto, ficar ciente de qualquer dor ou desconforto e conhecer suas soluções irá ajudá-lo a passar por eles com mais facilidade.'
    }
    else if(semanas == 32){
        var img = require('../images/29.png')
        var descricao = "Abóbora média" 
        var artigo = 'uma'
        var peso = "1702 gramas"
        var tamanho = "42,4cm"
        var descricaoCorpo = 'O bebê está completamente formado agora.'
        var sintomas = 'Você experimentará uma série de mudanças corporais durante a gravidez de 32 semanas, volume de sangue aumentando, pés inchados, mudança na cor dos mamilos, seios vazando, excesso de secreções vaginais.'
    }
    else if(semanas == 33){
        var img = require('../images/30.png')
        var descricao = "Melão cantaloupe" 
        var artigo = 'um'
        var peso = "1918 gramas"
        var tamanho = "43,7cm"
        var descricaoCorpo = 'Esta é a fase final do desenvolvimento do bebê. Seus órgãos, ossos e músculos estão formados e, com alguns “toques finais”, ele estará pronto. Unhas e cabelos já estão totalmente formados também. A placenta ainda está dando ao bebê seus nutrientes e oxigênio, mas isso não o impede de exercitar suas habilidades respiratórias bebendo o líquido amniótico.'
        var sintomas = 'A 33ª semana é bastante desafiadora. Todos os sintomas já vistos estarão “à flor da pele”.'
    }
    else if(semanas == 34){
        var img = require('../images/31.png')
        var descricao = "Melão orange" 
        var artigo = 'um'
        var peso = "2146 gramas"
        var tamanho = "45,0cm"
        var descricaoCorpo = 'Mãe e bebê estão mais propensos a ganhar peso nesta fase. Redobrar os cuidados com a alimentação.'
        var sintomas = 'Contrações são mais fortes e o útero aumenta. A dificuldade de respirar pode ser maior, pois o bebê está perto dos pulmões. A parte de cima do seu útero está debaixo das costelas.'
    }
    else if(semanas == 35){
        var img = require('../images/32.png')
        var descricao = "Abóbora menina" 
        var artigo = 'uma'
        var peso = "2383 gramas"
        var tamanho = "46,2cm"
        var descricaoCorpo = 'O evento principal durante esse período é a descida gradual do bebê para a região da pélvis, enquanto se prepara para sair para o mundo.'
        var sintomas = 'A 35 ª semana de gravidez é um misto de emoções. As mulheres grávidas tendem a se sentir felizes por estarem quase no final da gravidez. No entanto, há também uma grande quantidade de ansiedade que é sentida por causa da aproximação da data do nascimento.'
    }
    else if(semanas == 36){
        var img = require('../images/33.png')
        var descricao = "Mamão" 
        var artigo = 'um'
        var peso = "2622 gramas"
        var tamanho = "47,4cm"
        var descricaoCorpo = 'Seu próprio corpo passou por uma série de mudanças durante essas semanas e nem todas são agradáveis mas você está perto da linha de chegada desta maratona de nove meses de duração. Se notar inchaço no rosto, mãos, tornozelo e pés ou aumento súbito de peso, ligue para o médico, pois isso pode indicar pré-eclâmpsia. Esta é uma complicação da gravidez que leva à pressão alta, inchaço nas mãos e pés e alta quantidade de proteína na urina. Precisa de atenção médica imediata.'
        var sintomas = 'Uma sensação de cansaço irá prevalecer em você durante este tempo. Além dessas mudanças corporais durante a gravidez, você pode esperar uma sensação de ansiedade e exaustão crescente de carregar seu bebê por quase 9 meses.'
    }
    else if(semanas == 37){
        var img = require('../images/34.png')
        var descricao = "Folha de acelga" 
        var artigo = 'uma'
        var peso = "2859 gramas"
        var tamanho = "48,6cm"
        var descricaoCorpo = 'Nesse período, a gestante começa a ir no banheiro com mais frequência, a barriga está maior e comprime a bexiga. Com a produção de leite, os seios ficam inchados. A dieta da mãe deve estar repleta de cálcio, fibras e ferro.'
        var sintomas = 'Além do aumento de peso, a ansiedade contribui para o quadro de dificuldade para dormir. A falta de ar também é um sintoma comum desse período. Os ossos da bacia começam a abrir, é comum ter dores na bacia, no púbis e na região baixa da coluna lombar.'
    }
    else if(semanas == 38){
        var img = require('../images/35.png')
        var descricao = "Abóbora" 
        var artigo = 'uma'
        var peso = "3083 gramas"
        var tamanho = "49,8cm"
        var descricaoCorpo = 'com o bebê pesando em média 3 kgs, seus movimentos estão cada vez menores na barriga.'
        var sintomas = 'Seu bebê pode estar se movendo para baixo (“descendo” ou “encaixando”) na pélvis para se preparar para o nascimento. A boa notícia é que você poderá respirar mais facilmente; a “má” notícia é que o bebê ficará mais baixo na pélvis, pressionando contra a bexiga, assim você irá ao banheiro com mais frequência ainda !'
    }
    else if(semanas == 39){
        var img = require('../images/36.png')
        var descricao = "Jaca" 
        var artigo = 'uma'
        var peso = "3288 gramas"
        var tamanho = "50,7cm"
        var descricaoCorpo = 'Durante a 39ª semana de gestação, o bebê atingirá seu tamanho e peso no nascimento.  Estes serão os últimos dias da gravidez.'
        var sintomas = 'Se você tiver contrações que forem irregulares e vão embora quando você mudar de posição ou caminhar, você provavelmente está tendo um falso trabalho de parto. No entanto, o falso trabalho de parto pode se transformar em verdadeiro em questão de minutos. Cronometre suas contrações com cuidado. Uma vez que estiverem em intervalos regulares e ocorrerem a cada 5 minutos por pelo menos uma hora, ligue para o seu médico. Se sua bolsa romper, chegou a hora!'
    }
    else if(semanas >= 40){
        var img = require('../images/37.png')
        var descricao = "Melancia" 
        var artigo = 'uma'
        var peso = "3462 gramas"
        var tamanho = "51,2cm"
        var descricaoCorpo = 'A semana 40 significa que você e seu bebê estão oficialmente prestes a se conhecer muito em breve! Você conseguiu chegar ao grande dia!'
        var sintomas = 'Como você saberá quando o parto começa? Três sinais clássicos são: contrações regulares que se tornam mais constantes e longas com o tempo, um corrimento vaginal de muco (chamado “tampão mucoso” ou “rolhão mucoso”), sua bolsa estourando (chamada de “ruptura de membranas”).'
    }

    const bgTeal = { uri: "https://lh3.googleusercontent.com/UAweV-efs6528sQ8K0lBM2WSywFHhl5Oa2Yq0pANI6UU0BR4HH1Yeg5K5ahntrgWiiGfPoS2ZOrnxzrENtyH3FLambrmc9n8tUm5G1g5mzvphXz8ntW8_LLu_A1QYHT1u36XHy24PuV6D_sF3thyHWcSSQ90xiUtRXO95NQXNhWG70JTezA03boh-BXVFuNkDqvrlaWktaLsDh8TTaeeugC6Ay-sY9w918TOL3OY4t-60G4iBVT6ZUIrbqdkCJu6c8FRJhVW6YQn58EqlhNF5elq__PjMkMSpgzYWH13YiNpoLtuZ_M81-_W8vZlw37Enbk4YHLiuDUprg2Sg-C0koBS3hkuxnKFJLXr8yGh8D-he_jjwITR7VbvbiSnGA43eFzNGUtNHA9JTN56_I5W8KscWb65Sy9ADAIA6jCBtdjNAKy0_kBtEhaU2QX2DgoC-qyaxdxR4e4cdkxydPIwJOuZa18zuBRS637yY3OmFaY2SlIcZJ2S7tPYnLVz8GmNXZic76BvxH0KQmbTtSQTnwMdl_lg-ka9MVSnTn8Tmypu3FuRTe8prDmxTUpXdh3IGXbw-rjIJu354czFKy9sU6SXSWto_ui7wHRC0V57KcwP8nlFMRKp-xQbHANjBfPR1Lwq_m747fWrrG3hYIKPGauvHBvVH755C5FBYra_G_z3y4Vx96RkdOPRF3S_V1ry4wfVNXRjizT6Shu2bp7uREwdzTUjeRttDTbTQaX5QF6KjeSHkPdOMWvQwe7aOs9i-rEe5idPMMYOM_fnHcL6VfZy2twNdiqHJcjpeg30q-2ykPBBun8pXQt3kU1aFAbAt7XiTfad6gZN_uG6x2NDBiUlXWgMnhu3Y9YKsMLjbOweJHZr99WEztferI7wmSFMaE744KjmYAMqIBKS2xj_z1AM_KG0lmryEsjBBJolkA4KXsesbiStB9DQr3YY10HZ_RbuYTT_rBiLvbkH_ohO=w402-h568-no?authuser=0" };
    const bgPink = { uri:"https://lh3.googleusercontent.com/G7qLxrPggIhmq2JSKEq-bKBoRVWrskN9Cq3z4jKnySf8OxjGxSEjnmxkJFT-zwRZkqJfdBXq3P5Er_S1oi4l3fQ6oExdBszPxL04AExpyk8QmTU7-s9Esd5wrBtTFPFZgBUU1ajX4dgfmKAweI12whLveNzpujOrq1XJ5FmRjgopyiwDlIN_DqJHCHVJdUQljyIAx1vcwqgvpC3HF8R4Ynp9ulS-sck_20u8Y81dlrIoMu5hpCM0CtV42dhanv-G3O6Xgfh8nPwj3wV2WxG2q9vEXwkwCbWfsmbAVzZUqxrFp54ZS0CmM4y7psGFUiLSvtRLQP2ofS-AjJroaj3sH2C6b-WuvKTD8dEhU8d2nKa6tEg3Bc2re-QnTj51TKNqRZNVGOTsAn8d8ZCu9-y9A9PZ9NHVj4TNfgmHzFfMgVHgMRfBRwh3dU-Pt7jGqf3OgxnYwLA5cNHjOwk5kFC4UHddpfTSRQTchbrDy15WPgun7j1dzXvAU0oz_PIy6rvtw0s3__B260dQo8jqronJXICs7rwaERMS-nHhfhH_4AitCanqWJX3SslPoY3bNo8herNis0GT4UT0r2AVFr-YRfk9ZOEKLSAkfyCb2nkNwfEHOQgXXcpAk5kv6H0xFZ13QuYj2zIBF3fnaen0A53hcw1Re1BxA7CzrSYE2FFFm4cdbrxpMdo-yqaHyfWb-8nOS4eMEp93UJHS8QTa6Q3-MAc6mv2SzoEFP7M0wRlFyOthrQiFvw3e39-g84yo4eWcXv9tW8CKaYkLTRLiwdf5tyXH4063oOIRHs44TKI87EDvfL8RMwwMStWTO7_yHMdsz57Sdgik_QD85Zrl3BuTkuWa1vBGd3Z7TAE09fcNuvhhbtik2QhfYBIQ0Q1qhydx93_DR8ewq94bctB8Z7h4C6ywmbLwTvomekDsRH6hc0tDJQ=w402-h568-no?authuser=0" }

    var sem = semanas
     if (semanas >= 40 ){
        sem = 40
     }

    var cor = sem % 2 == 0 
    if(cor){
        var image = bgPink
    } else {
        var image = bgTeal
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
                    <Text style={twn`mr-6 font-bold ml-4`}>
                        Tamanho:
                    </Text>
                    <Text style={twn`mr-6 font-bold ml-6 text-lg`}>
                        {tamanho}
                    </Text>
                </View>
            </View>
            <View>
                <Text style={twn`mr-12 font-bold text-justify`}>
                    No corpo :  {descricaoCorpo}
                </Text>
                <Text style={twn`mr-12 font-bold text-justify mt-2 mb-4`}>
                    Sintomas:  {sintomas}
                </Text>
            </View>
          </View>
          </ImageBackground>  
        </ScrollView>
        
    );
};





