import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';



export default function Card({titulo, desc, tipo, dificuldade, horario, img}){
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
  
    return(
       <View style={styles.box}>      
            <Image 
            style={styles.img}
            source={img}/>

            <View style={styles.info}>
                <Text style={fontLoaded ? { fontFamily: 'poppins-extrabold', fontSize: 16 } : {}}>{titulo}</Text>
                <Text style={[styles.desc, fontLoaded ? { fontFamily: 'poppins-regular', fontSize: 16 } : {}]}>{desc}</Text>
                <View style={styles.cat}>
                    <Text style={[styles.tipo, fontLoaded ? { fontFamily: 'poppins-regular', fontSize: 12 } : {}]}>{tipo}</Text>
                    <Text style={[styles.horario, fontLoaded ? { fontFamily: 'poppins-regular', fontSize: 12 } : {}]}>{horario}</Text>
                    <Text style={[styles.difi, fontLoaded ? { fontFamily: 'poppins-regular', fontSize: 12 } : {}]}>{dificuldade}</Text>
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
        fontSize: 18,
    },
    desc:{
        width: 220,
        marginBottom: 5,
    },
    cat:{
        display: 'flex',
        flexDirection: 'row',
        gap: 5
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