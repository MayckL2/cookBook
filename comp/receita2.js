import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity, Image } from 'react-native';
import Header from './Header';
import poke from './img/poke-tela.png';
import icon1 from './img/icon-ingrediente.png';
import icon2 from './img/icon-modo-de-fazer.png';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import arrow from './img/arrow.png';


export default function Receita() {
    const [fontLoaded, setFontLoaded] = useState(false);

    const loadFonts = async () => {
        await Font.loadAsync({
            'poppins-regular': require('../assets/fonts/Poppins-Regular.ttf'),
            'poppins-extrabold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
            // Adicione outras variações da fonte Poppins, se houver
        });
        setFontLoaded(true);
    };

    useEffect(() => {
        loadFonts();
    }, []);
    const navigation = useNavigation();

    function voltarHome() {
        navigation.replace('Home');
    }
    return (

        <ScrollView>
            <Header />
            <View style={styles.main}>

                <TouchableOpacity onPress={voltarHome} style={styles.arrow}>
                    <Image source={arrow} style={styles.arrow}></Image>

                </TouchableOpacity>

                <Text style={[styles.title, fontLoaded ? { fontFamily: 'poppins-extrabold', fontSize: 20 } : {}]}>Poke Havaiano</Text>
                <View style={styles.boxtitle}>
                    <Text style={[styles.tipo, fontLoaded ? { fontFamily: 'poppins-extrabold', fontSize: 12 } : {}]}>Salada</Text>
                    <Text style={[styles.horario, fontLoaded ? { fontFamily: 'poppins-extrabold', fontSize: 12 } : {}]}>Almoço</Text>
                    <Text style={[styles.difi, fontLoaded ? { fontFamily: 'poppins-extrabold', fontSize: 12 } : {}]}>Fácil</Text>
                </View>

                <View style={styles.boximg}>
                    <Image source={poke} />
                    <Text>Tempo de preparo: 30min </Text>
                </View>

                <View style={styles.ingredientes}>
                    <Image source={icon1}></Image>
                    <Text style={styles.subtitle}>Ingredientes</Text>
                </View>

                <Text style={[styles.lista, fontLoaded ? { fontFamily: 'poppins-regular', fontSize: 16 } : {}]}>
                    • 1 colher de sopa de gergelim preto;{'\n'}
                    • 500gr de salmão fresco em cubos, sem pele e sem espinha;{'\n'}
                    • ¼ de xícara de coco em floco, sem açúcar;{'\n'}
                    • 1 manga madura;{'\n'}
                    • 2 colheres de sopa de shoyu;{'\n'}
                    • 1 pimenta dedo-de-moça fresca;{'\n'}
                    • 2 colheres de sopa de óleo de gergelim;{'\n'}
                    • 1 abacate (avocado);{'\n'}
                    • 2 colheres de sopa de sriracha;{'\n'}
                    • 1 ½ xícara(chá) de arroz basmati ou jasmim;{'\n'}
                    • 1 xícara de leite de coco;{'\n'}
                    • Cebolinha a gosto;{'\n'}
                    • 1 ¼ xícara de água;{'\n'}
                    • Pepino e nabo e cenoura opcional;{'\n'}
                </Text>


                <View style={styles.ingredientes}>
                    <Image source={icon2}></Image>
                    <Text style={styles.subtitle}>Modo de fazer</Text>
                </View>

                <Text style={[styles.lista, fontLoaded ? { fontFamily: 'poppins-regular', fontSize: 16 } : {}]}>
                    • Em uma panela com fogo baixo, adicione o leite de coco, a água e o sal, mexa bem até ferver;{'\n'}

                    • Estando fervendo, acrescente o arroz, mexa novamente e deixe cozinhar por 10 minutos em fogo médio;{'\n'}

                    • Em uma tigela, prepare a marinada o salmão com shoyu, óleo de gergelim e sriracha; misture bem e deixe reservada;{'\n'}

                    • Corte o salmão fresco em cubos e o deixe marinar na mistura. Após, tempere-o com pimenta dedo de moça sem as semente e cebolinha picada;{'\n'}

                    • Pique a manga e o abacate em pequenos cubos;{'\n'}

                    • Deixa o coco flocado tostar por alguns minutos em uma frigideira;{'\n'}

                    • Em um prato, coloque uma camada de arroz cozido;{'\n'}

                    • Sobre esta camada, coloque a manga, o abacate e o salmão;{'\n'}

                    • Para decorar, finalize adicionando o coco tostado e sementes de gergelim;{'\n'}




                </Text>
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
        padding: 50
    },
    boxtitle: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        padding: 10,
        marginTop: 10
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 30
    },
    tipo: {
        backgroundColor: 'orange',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 8,
        color: 'white'
    },
    horario: {
        backgroundColor: '#FF914D',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 8,
        color: 'white'
    },
    difi: {
        backgroundColor: '#00D956',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 8,
        color: 'white'
    },

    boximg: {
        width: 350,
        height: 220,
        backgroundColor: 'red',
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: 'white',
        gap: 10,
        borderColor: '#DFDDDD',
        borderBottomWidth: 4,
        borderRightWidth: 1,
        borderLeftWidth: 1,
    },

    ingredientes: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        padding: 10,
        gap: 10

    },

    subtitle: {
        fontSize: 20,
    },

    lista: {
        fontSize: 16,
        lineHeight: 27,
    },
    arrow: {
        position: 'absolute',
        left: 5,
        top: 5,
        width: 50,
        height: 50,
    }


});