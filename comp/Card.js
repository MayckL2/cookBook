import { StyleSheet, Text, View, Image } from 'react-native';
import imagem from './img/ben10.jpg'

export default function Card({titulo, desc, tipo, dificuldade, horario}){
    return(
        <View>      
            <Image source={imagem}/>

            <Text>Tilulo: {titulo}</Text>
            <Text>{desc}</Text>
            <Text>{tipo}</Text>
            <Text>{horario}</Text>
            <Text>{dificuldade}</Text>
        </View>
    )
}