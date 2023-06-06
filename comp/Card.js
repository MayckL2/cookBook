import { StyleSheet, Text, View, Image } from 'react-native';

export default function Card({titulo, desc, tipo, dificuldade, horario, img}){
    return(
       <View style={styles.box}>      
            <Image 
            style={styles.img}
            source={img}/>

            <View style={styles.info}>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.desc}>{desc}</Text>
                <View style={styles.cat}>
                    <Text style={styles.tipo}>{tipo}</Text>
                    <Text style={styles.horario}>{horario}</Text>
                    <Text style={styles.difi}>{dificuldade}</Text>
                </View>
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    box:{        
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        borderColor: '#DFDDDD',
        // #D9D9D9
        borderBottomWidth: 4,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        marginVertical: 10,
        width: '100%',
    },
    info: {
        display: 'flex',
    },
    img:{
        borderRadius: 10,
        backgroundColor: 'red',
        width: 95,
        height: 100,
        marginHorizontal: 5
    },
    titulo:{
        fontWeight: 'bold',
        fontSize: 22,
    },
    desc:{
        width: 200,
        marginVertical: 10
    },
    cat:{
        display: 'flex',
        flexDirection: 'row',
        gap: 5
        // justifyContent: 'space-around'
    },
    tipo:{
        backgroundColor: 'orange',
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 8,
        color: 'white'
    },
    horario:{
        backgroundColor: '#FF914D',
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 8,
        color: 'white'
    },
    difi:{
        backgroundColor: '#00D956',
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 8,
        color: 'white'
    }
  });