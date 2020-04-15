import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default function Error (props) {
  return (
    <Text {...props} style={[props.style, styles]}>Error :(</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18
  }
})
