import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { SAUNA } from '../components/Queries'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { useQuery } from '@apollo/react-hooks'
import Colors from '../constants/Colors'

export default function CapacityMessage () {
  const { loading, error, data } = useQuery(SAUNA)

  if (error) return <Error style={styles.text} />

  return loading ? <Loading style={styles.text} /> : <Text style={styles.text}>{data.sauna.capacity_message}</Text>
}

const styles = StyleSheet.create({
  text: {
    color: Colors.headerText,
    fontWeight: 'bold'
  }
})
