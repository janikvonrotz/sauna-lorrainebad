import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default function Error (props) {
  console.log(styles.text)
  return (
    <Text {...props} style={[props.style, styles.text]}>Error :(</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18
  }
})
