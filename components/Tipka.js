import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Tipka = (props) => {
    return (
        <TouchableOpacity onPress={props.pressEvent}>
            <View style={styles.buttonStyle}>
                <Text style={styles.buttonText}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Tipka

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle: {
        backgroundColor: '#314D82',
        width: 200,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 22,
    }
})