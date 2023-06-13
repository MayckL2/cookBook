import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity, Image } from 'react-native';
import Header from './Header';
import icon1 from './img/icon-ingrediente.png';
import arrow from './img/arrow.png';
import bolo from './img/bolo-tela.png';
import icon2 from './img/icon-modo-de-fazer.png';
import { useNavigation } from '@react-navigation/native';

export default function Receita() {
    const navigation = useNavigation();

    function voltarHome() {
        navigation.replace('Home');
    }
    return (

        <ScrollView>
            <Header/>
            <View style={styles.main}>
            <TouchableOpacity onPress={voltarHome} style={styles.arrow}>
                <Image source={arrow} style={styles.arrow}></Image>

            </TouchableOpacity>

                <View style={styles.boxtitle}>
                    <Text style={styles.title}>Bolo de chocolate</Text>
                    <Text style={styles.tipo}>Doce</Text>
                    <Text style={styles.horario}>Lanche</Text>
                    <Text style={styles.difi}>Médio</Text>
                </View>

                <View style={styles.boximg}>
                    <Image source={bolo} />
                    <Text>Tempo de preparo: 45min</Text>
                </View>

                <View style={styles.ingredientes}>
                    <Image source={icon1}></Image>
                    <Text style={styles.subtitle}>Ingredientes</Text>
                </View>

                <Text style={styles.lista}>
                • 4 ovos;{'\n'}
                • 2 colheres (sopa) de manteiga;{'\n'}
                • 2 xícaras (chá) de açúcar;{'\n'}
                • 1 xícara (chá) de leite;{'\n'}
                • 4 colheres (sopa) de chocolate em pó;{'\n'}
                • 3 xícaras (chá) de farinha de trigo;{'\n'}
                • 2 colheres (sopa) de fermento;{'\n'}
                • 2 colheres (sopa) de manteiga;{'\n'}
                • 2 latas de creme de leite com soro;{'\n'}
                • 7 colheres (sopa) de chocolate em pó;{'\n'}
                • 3 colheres (sopa) de açúcar;{'\n'}
                </Text>


                <View style={styles.ingredientes}>
                    <Image source={icon2}></Image>
                    <Text style={styles.subtitle}>Modo de fazer</Text>
                </View>

                <Text style={styles.lista}>
                • Em um liquidificador adicione os ovos, o chocolate em pó, a manteiga, a farinha de trigo, o açúcar e o leite, depois bata por 5 minutos;{'\n'}

                • Adicione o fermento e misture com uma espátula delicadamente;{'\n'}

                • Em uma forma untada, despeje a massa e asse em forno médio (180 ºC) preaquecido por cerca de 40 minutos. Não se esqueça de usar uma forma alta para essa receita: como leva duas colheres de fermento, ela cresce bastante! Outra solução pode ser colocar apenas uma colher de fermento e manter a sua receita em uma forma pequena;{'\n'}

                • Em uma panela, aqueça a manteiga e misture o chocolate em pó até que esteja homogêneo;{'\n'}

                • Desligue o fogo e acrescente o açúcar;{'\n'}




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
        marginTop: 30
    },
    title: {
        fontSize: 20,
        fontWeight: '600'
    },
    tipo: {
        backgroundColor: 'orange',
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 8,
        color: 'white'
    },
    horario: {
        backgroundColor: '#FF914D',
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 8,
        color: 'white'
    },
    difi: {
        backgroundColor: '#00D956',
        paddingHorizontal: 10,
        paddingVertical: 2,
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

    lista:{
        fontSize: 16,
        lineHeight: 24,
    },

    arrow:{
        position: 'absolute',
        left: 5,
        top: 5,
        width: 50,
        height: 50,
    }

});