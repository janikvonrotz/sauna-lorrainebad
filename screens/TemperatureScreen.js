import * as React from 'react'
import { StyleSheet, RefreshControl, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { AARE_TEMPERATURE } from '../components/Queries'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { useQuery } from '@apollo/react-hooks'
import { VerdanaText } from '../components/StyledText'

function wait (timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout)
  })
}

export default function TemperatureScreen () {
  const { loading, error, data, refetch } = useQuery(AARE_TEMPERATURE)

  // Refersh control
  const [refreshing, setRefreshing] = React.useState(false)
  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    refetch()
    wait(2000).then(() => setRefreshing(false))
  }, [refreshing])

  if (error) return <Error />

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.innerContainer}>
          <VerdanaText style={styles.text}>Die Aare Temperatur beträgt aktuell:</VerdanaText>
          {loading ? <Loading /> : <>
            <VerdanaText style={styles.stat}>{`${data.aareTemperature.value}°C`}</VerdanaText>
            <VerdanaText style={styles.quote}>{data.aareTemperature.quote}</VerdanaText>
          </>}
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
    fontSize: 48,
    marginBottom: 10
  },
  quote: {
    fontSize: 18,
    marginBottom: 10
  },
  text: {
    fontSize: 18,
    marginBottom: 10
  }
})
