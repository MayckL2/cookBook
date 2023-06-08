import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Card from './Card'
import Header from './Header';
import imagem1 from './img/image1.png';

export default function Receita(){
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