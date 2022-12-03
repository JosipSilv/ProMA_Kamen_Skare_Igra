import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TextComp = (props) => {
  return (
    <Text style={{...styles.textFont, ...props.stil}}>{props.children}</Text>
  )
}

export default TextComp

const styles = StyleSheet.create({
    textFont: {
        fontFamily: 'PoiretOneRegular'
    }
})