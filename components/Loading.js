import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default function Loading () {
  return (
    <Text style={styles.text}>Lädt...</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18
  }
})
