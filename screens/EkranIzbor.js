import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native'
import React from 'react'
import TextComp from '../components/TextComp'

//Ikooone
import { FontAwesome } from '@expo/vector-icons'

import { weaponKeys } from '../components/Weapons'

const EkranIzbor = (props) => {
    return (
        <View style={styles.container}>
            <TextComp stil={{...styles.text, paddingVertical: 20}}>AI is thinking...</TextComp>

            <TextComp stil={{...styles.text, paddingVertical: 20}}>Odaberi potez ᕙ(⇀‸↼‶)ᕗ</TextComp>

            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.iconBox} onPress={() => { props.navigation.navigate('Kraj', {izbor: weaponKeys[0]}) }}>
                    <FontAwesome name='hand-rock-o' size={40} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconBox} onPress={() => { props.navigation.navigate('Kraj', {izbor: weaponKeys[2]}) }}>
                    <FontAwesome name='hand-scissors-o' size={40} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconBox} onPress={() => { props.navigation.navigate('Kraj', {izbor: weaponKeys[1]}) }}>
                    <FontAwesome name='hand-paper-o' size={40} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default EkranIzbor

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '80%',
        height: 100,
        // borderWidth: 1,
        // borderColor: '#000',
        // borderRadius: 20
    },
    text: {
        fontSize: 26,
        marginBottom: 20
    },
    iconBox: {
        borderWidth: 1,
        borderRadius: 50,
        padding: 10
    }
})