import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Card from './Card'
import Header from './Header';

export default function Main(){
    return(
        
        <ScrollView>
            <Header/>
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