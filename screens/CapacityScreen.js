import * as React from 'react'
import { StyleSheet, View, RefreshControl } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SAUNA } from '../components/Queries'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { useQuery } from '@apollo/react-hooks'
import { MonoText } from '../components/StyledText'

function wait (timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout)
  })
}

export default function CapacityScreen () {
  const { loading, error, data, refetch } = useQuery(SAUNA)

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
    fontSize: 18,
    marginTop: 10,
    marginBottom: 20
  }
})
