import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Card from './Card'

export default function Main(){
    return(
        <View style={styles.main}>
            <Text style={styles.titulo}>
                Melhores Receitas
            </Text>

            <Card
            titulo={'miojo'}
            desc={'descriçao'}
            tipo={'tipo'}
            dificuldade={'dificuldade'}
            horario={'horario'}
            />
            <Card
            titulo={'miojo'}
            desc={'descriçao'}
            tipo={'tipo'}
            dificuldade={'dificuldade'}
            horario={'horario'}
            />
            <Card
            titulo={'miojo'}
            desc={'descriçao'}
            tipo={'tipo'}
            dificuldade={'dificuldade'}
            horario={'horario'}
            />
            <Card
            titulo={'miojo'}
            desc={'descriçao'}
            tipo={'tipo'}
            dificuldade={'dificuldade'}
            horario={'horario'}
            />
        </View>

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