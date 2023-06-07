import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Card from './Card'
import Header from './Header';
import imagem1 from './img/image1.png';
import imagem2 from './img/image2.png';
import imagem3 from './img/image3.png';
import imagem4 from './img/image4.png';

export default function Main(){
    return(
        
        <ScrollView>
            <Header/>
        <View style={styles.main}>
                
            <Text style={styles.titulo}>
                Melhores Receitas
            </Text>

            <Card
            titulo={'Bolo de Chocolate'}
            desc={'Essa receita de bolo de chocolate com 3 ingredientes é assada em uma forma de 20 cm de diâmetro.'}
            tipo={'Doce'}
            dificuldade={'Médio'}
            horario={'Lanche'}
            img={imagem1}
            />

            <Card
            titulo={'Poke Havaiano'}
            desc={'O Poke é um dos principais pratos da cozinha nativa havaiana. '}
            tipo={'Salada'}
            dificuldade={'Fácil'}
            horario={'Almoço'}
            img={imagem2}
            />

            <Card
            titulo={'Salada de Frutas'}
            desc={'Salada de frutas é um prato que consiste de uma combinação de várias frutas picadas'}
            tipo={'Sobremesa'}
            dificuldade={'Fácil'}
            horario={'Café'}
            img={imagem3}
            />
            <Card
            titulo={'Carne com Batata'}
            desc={'Carne com batata é um prato clássico e saboroso que combina carne, geralmente bovina, com batatas. '}
            tipo={'Prato Principal'}
            dificuldade={'Médio'}
            horario={'Almoço'}
            img={imagem4}
            />
        </View>
        </ScrollView>

    )
}


const styles = StyleSheet.create({
    main: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: 'white',
        marginTop: -15,
        height: 'auto',
        padding: 20
    },
    titulo:{
        fontSize: 20,
        fontWeight: 'bold',
        margin: 20
    }
  });