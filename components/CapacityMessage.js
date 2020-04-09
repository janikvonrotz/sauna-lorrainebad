import React from 'react'
import { Text } from 'react-native'
import { SAUNA } from '../components/Queries'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { useQuery } from '@apollo/react-hooks'
import Colors from '../constants/Colors'

export default function CapacityMessage () {
  const { loading, error, data } = useQuery(SAUNA)

  if (error) return <Error />
  return loading ? <Loading /> : <Text style={[{ 
    color: Colors.headerText,
    fontWeight: 'bold'
  }]}>{data.sauna.capacity_message}</Text>
}
