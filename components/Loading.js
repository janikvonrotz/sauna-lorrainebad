import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default function Loading (props) {
  return (
    <Text {...props} style={[props.style, styles.text]}>Lädt...</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18
  }
})
