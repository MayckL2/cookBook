import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity, Image } from 'react-native';
import Header from './Header';
import salada from './img/salada-tela.png';
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

                <Text style={[styles.title, fontLoaded ? { fontFamily: 'poppins-extrabold', fontSize: 20 } : {}]}>Salada de Frutas</Text>
                <View style={styles.boxtitle}>
                    <Text style={[styles.tipo, fontLoaded ? { fontFamily: 'poppins-extrabold', fontSize: 12 } : {}]}>Sobremesa</Text>
                    <Text style={[styles.horario, fontLoaded ? { fontFamily: 'poppins-extrabold', fontSize: 12 } : {}]}>Café</Text>
                    <Text style={[styles.difi, fontLoaded ? { fontFamily: 'poppins-extrabold', fontSize: 12 } : {}]}>Fácil</Text>
                </View>

                <View style={styles.boximg}>
                    <Image source={salada} />
                    <Text>Tempo de preparo: 10min </Text>
                </View>

                <View style={styles.ingredientes}>
                    <Image source={icon1}></Image>
                    <Text style={styles.subtitle}>Ingredientes</Text>
                </View>

                <Text style={[styles.lista, fontLoaded ? { fontFamily: 'poppins-regular', fontSize: 16 } : {}]}>
                    • 2 mamões papaia pequenos;{'\n'}
                    • 5 bananas;{'\n'}
                    • 5 morangos maduros;{'\n'}
                    • 1 manga madura;{'\n'}
                    • 10 grãos de uva (qualquer variedade);{'\n'}
                    • 10 cubos de gelo;{'\n'}
                    • 1 laranja média;{'\n'}
                    • 2 maçãs;{'\n'}
                    • 1 pêssego;{'\n'}
                    • 1 caixa leite condensado (opcional);{'\n'}
                    • 1/2 colher (sopa) canela em pó;{'\n'}
                </Text>


                <View style={styles.ingredientes}>
                    <Image source={icon2}></Image>
                    <Text style={styles.subtitle}>Modo de fazer</Text>
                </View>

                <Text style={[styles.lista, fontLoaded ? { fontFamily: 'poppins-regular', fontSize: 16 } : {}]}>
                    • Pique todos os ingredientes, a laranja em pedaços menores que as outras frutas, depois ela solta o caldo e a salada não fica tão ácida.;{'\n'}

                    • Coloque tudo em um prato fundo e adicione o leite condensado (se quiser), a canela em pó e o gelo, mexa por alguns segundos e leve a geladeira por 30 minutos.;{'\n'}

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
        lineHeight: 24,
    },
    arrow: {
        position: 'absolute',
        left: 5,
        top: 5,
        width: 50,
        height: 50,
    }


});