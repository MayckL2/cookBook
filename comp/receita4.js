import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity, Image } from 'react-native';
import Header from './Header';
import carne from './img/carne-tela.png';
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

                <Text style={[styles.title, fontLoaded ? { fontFamily: 'poppins-extrabold', fontSize: 20 } : {}]}>Carne com batata</Text>

                <View style={styles.boxtitle}>
                    <Text style={[styles.tipo, fontLoaded ? { fontFamily: 'poppins-extrabold', fontSize: 12 } : {}]}>Principal</Text>
                    <Text style={[styles.horario, fontLoaded ? { fontFamily: 'poppins-extrabold', fontSize: 12 } : {}]}>Almoço</Text>
                    <Text style={[styles.difi, fontLoaded ? { fontFamily: 'poppins-extrabold', fontSize: 12 } : {}]}>Médio</Text>
                </View>

                <View style={styles.boximg}>
                    <Image source={carne} />
                    <Text>Tempo de preparo: 45min</Text>
                </View>

                <View style={styles.ingredientes}>
                    <Image source={icon1}></Image>
                    <Text style={styles.subtitle}>Ingredientes</Text>
                </View>

                <Text style={[styles.lista, fontLoaded ? { fontFamily: 'poppins-regular', fontSize: 16 } : {}]}>
                    • 1 kg de carne de acém cortada em cubos grandes;{'\n'}
                    • 2 colheres (sopa) de cebola granulada;{'\n'}
                    • Colorau a gosto;{'\n'}
                    • Água (até cobrir a carne);{'\n'}
                    • 2 colheres (sopa) de óleo de milho;{'\n'}
                    • 2 cubos de caldo natural;{'\n'}
                    • 5 batatas médias descascadas e cortadas ao meio;{'\n'}
                </Text>


                <View style={styles.ingredientes}>
                    <Image source={icon2}></Image>
                    <Text style={styles.subtitle}>Modo de fazer</Text>
                </View>

                <Text style={[styles.lista, fontLoaded ? { fontFamily: 'poppins-regular', fontSize: 16 } : {}]}>
                    • Em uma panela de pressão coloque o óleo e a cebola, deixe até que ela fique bem moreninha;{'\n'}

                    • Junte a carne cortada em cubos médios, deixe dourar por 15 minutos;{'\n'}

                    • Junte os 2 cubos de caldo natural e o colorau a gosto;{'\n'}
                    • Coloque a água até que cubra a carne, não ultrapasse a carne;{'\n'}
                    • Coloque na pressão por 25 minutos;{'\n'}
                    • Retire do fogo, tire a pressão e junte as batatas e o cheiro-verde;{'\n'}
                    • Coloque na pressão novamente, conte 5 minutos após a panela de pressão começar a apitar e desligue o fogo;{'\n'}

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