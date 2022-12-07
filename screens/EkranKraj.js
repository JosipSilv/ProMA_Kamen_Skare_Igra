import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import TextComp from '../components/TextComp'
import Tipka from '../components/Tipka'

import { FontAwesome } from '@expo/vector-icons'

import { weaponKeys, weapons } from '../components/Weapons'

const EkranKraj = (props) => {
    const [izborPlayer, setIzborPlayer] = useState(props.route.params.izbor);
    const [izborAi, setIzborAi] = useState(weaponKeys[Math.floor(Math.random() * 3)]);
    const [rezultat, setRezultat] = useState('');

    const BrPobjeda = useRef(0);
    const BrNeodluceno = useRef(0);
    const BrPorazi = useRef(0);


    // useEffect(() => {
    //     setIzborAi(weaponKeys[Math.floor(Math.random() * 3)]);
    //     setIzborPlayer(props.route.params.izbor);
    // }, [])

    useEffect(() => {
        switch (izborAi) {
            case weapons[izborPlayer].wins:
                setRezultat("POBJEDA !");
                BrPobjeda.current += 1;
                break;
            case izborPlayer:
                setRezultat("TIE~");
                BrNeodluceno.current += 1;
                break;
            default:
                setRezultat("PORAZ..");
                BrPorazi.current += 1;
                break;
        }
    }, [izborAi])

    // useEffect(() => {
    //     switch (rezultat) {
    //         case "POBJEDA !":
    //             BrPobjeda.current += 1;
    //             break;
    //         case "NEODLUČENO~":
    //             BrNeodluceno.current += 1;
    //             break;
    //         default:
    //             BrPorazi.current += 1;
    //             break
    //     }
    // }, [rezultat])



    return (
        <View style={styles.container}>
            <View style={styles.prviContainer}>
                <View style={{ ...styles.pregled, borderBottomWidth: 1, paddingBottom: 10 }}>
                    <TextComp stil={styles.text}>AI: </TextComp>
                    <FontAwesome name={izborAi} size={40} />
                </View>
                <View style={styles.pregled}>
                    <TextComp stil={styles.text}>Player: </TextComp>
                    <FontAwesome name={izborPlayer} size={40} />
                </View>
            </View>

            <View style={styles.drugiContainer}>
                <TextComp stil={styles.textRezultat}>{rezultat}</TextComp>
            </View>

            <View style={styles.treciContainer}>
                <TextComp stil={styles.text}>Pobjede: {BrPobjeda.current}</TextComp>
                <TextComp stil={styles.text}>Porazi: {BrPorazi.current}</TextComp>
                <TextComp stil={styles.text}>Neodlučeno: {BrNeodluceno.current}</TextComp>
            </View>

            <Tipka pressEvent={() => { props.navigation.navigate('Home') }} text={<TextComp>Nova igra</TextComp>} />
        </View>
    )
}

export default EkranKraj

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
    },
    textRezultat: {
        fontSize: 65,
    },
    pregled: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    prviContainer: {
        width: "40%",
        height: 100,
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    drugiContainer: {
        borderWidth: 1,
        borderRadius: 15,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    treciContainer: {
        marginVertical: 20,
    },
})