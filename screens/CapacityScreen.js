import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SAUNA } from '../components/Queries'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { useQuery } from '@apollo/react-hooks'
import { MonoText } from '../components/StyledText'

export default function CapacityScreen () {
  const { loading, error, data } = useQuery(SAUNA)
  if (error) return <Error />

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.innerContainer}>
          <MonoText>Die Besucherzahl unserer Sauna wird fortlaufend aktualisiert. Aktuelle Auslastung:</MonoText>
          {loading ? <Loading /> : <MonoText style={styles.quote}>„{data.sauna.capacity_message}“</MonoText>}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    paddingTop: 30
  },
  innerContainer: {
    alignItems: 'center',
    marginHorizontal: 30
  },
  quote: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20
  }
})
