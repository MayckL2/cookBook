import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Image source={require('../assets/logo2.png')} style={styles.imgHeader} />
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
            backgroundColor: '#FF914D',
            width: '100%',
            height: 250,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
    },

    imgHeader: {
        width: '50%',
        height: '50%'
    }
  });