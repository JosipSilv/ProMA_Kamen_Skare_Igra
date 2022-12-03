import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Tipka from '../components/Tipka';
import TextComp from '../components/TextComp';

const PocetniEkran = (props) => {
  return (
    <View style={styles.container}>
      <Tipka pressEvent={() => {props.navigation.navigate('Izbor')}} text={<TextComp>Nova igra</TextComp>} />
    </View>
  )
}

export default PocetniEkran

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})