import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { AARE_TEMPERATURE } from '../components/Queries'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { useQuery } from '@apollo/react-hooks'
import { MonoText } from '../components/StyledText'

export default function TemperatureScreen () {
  const { loading, error, data } = useQuery(AARE_TEMPERATURE)
  if (error) return <Error />

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.innerContainer}>
          <MonoText>Vom Aare Guru erhalten wir die Temperatur. Die Aare Temperatur beträgt aktuell:</MonoText>
          {loading ? <Loading /> : <MonoText style={styles.stat}>{`${data.aareTemperature.value}°C`}</MonoText>}
          <MonoText>Dazu meint der Guru:</MonoText>
          {loading ? <Loading /> : <MonoText style={styles.quote}>„{data.aareTemperature.quote}“</MonoText>}
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
  stat: {
    fontSize: 50,
    marginTop: 10,
    marginBottom: 20
  },
  quote: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20
  }
})
