import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default function Error () {
  return (
    <Text style={styles.text}>Error :(</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18
  }
})
