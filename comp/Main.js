import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Card from './Card';
import Header from './Header';
import Receita from './receita';
import Receita2 from './receita2';
import Receita3 from './receita3';
import Receita4 from './receita4';
import imagem1 from './img/image1.png';
import imagem2 from './img/image2.png';
import imagem3 from './img/image3.png';
import imagem4 from './img/image4.png';
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';


export default function Main() {

    const navigation = useNavigation();

    function rotaReceita() {
        navigation.replace('Receita');
    }

    function rotaReceita2() {
        navigation.replace('Receita2');
    }

    function rotaReceita3() {
        navigation.replace('Receita3');
    }

    function rotaReceita4() {
        navigation.replace('Receita4');
    }

    return (

        <ScrollView>
            <Header />
            <View style={styles.main}>

                <Text style={styles.titulo}>
                    Melhores Receitas
                </Text>

                <TouchableOpacity onPress={rotaReceita} style={styles.cardClick}>
                    <Card
                        titulo={'Bolo de Chocolate'}
                        desc={'Essa receita de bolo de chocolate com 3 ingredientes é assada em uma forma de 20 cm de diâmetro.'}
                        tipo={'Doce'}
                        dificuldade={'Médio'}
                        horario={'Lanche'}
                        img={imagem1}
                    />

                </TouchableOpacity>

                <TouchableOpacity onPress={rotaReceita2} style={styles.cardClick}>

                    <Card
                        titulo={'Poke Havaiano'}
                        desc={'O Poke é um dos principais pratos da cozinha nativa havaiana. '}
                        tipo={'Salada'}
                        dificuldade={'Fácil'}
                        horario={'Almoço '}
                        img={imagem2}
                    />

                </TouchableOpacity>

                <TouchableOpacity onPress={rotaReceita3} style={styles.cardClick}>

                    <Card
                        titulo={'Salada de Frutas'}
                        desc={'Salada de frutas é um prato que consiste de uma combinação de várias frutas picadas'}
                        tipo={'Sobremesa'}
                        dificuldade={'Fácil'}
                        horario={'Café'}
                        img={imagem3}
                    />

                </TouchableOpacity>

                <TouchableOpacity onPress={rotaReceita4} style={styles.cardClick}>

                    <Card
                        titulo={'Carne com Batata'}
                        desc={'Carne com batata é um prato clássico e saboroso que combina carne, geralmente bovina, com batatas. '}
                        tipo={'Principal'}
                        dificuldade={'Médio'}
                        horario={'Almoço '}
                        img={imagem4}
                    />

                </TouchableOpacity>

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
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 20
    },

    cardClick: {
        width: '100%'
    }
});