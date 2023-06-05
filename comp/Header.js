import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text>Header</Text>
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
  });