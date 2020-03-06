import * as React from 'react'
import { Image, StyleSheet, View, Text, RefreshControl } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { DAILY_QUOTE } from '../components/Queries'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { useQuery } from '@apollo/react-hooks'
import { MonoText } from '../components/StyledText'

function wait (timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout)
  })
}

export default function HomeScreen () {
  const { loading, error, data, refetch } = useQuery(DAILY_QUOTE)

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
        <View style={styles.entryContainer}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.entryImage}
          />
        </View>
        <View style={styles.innerContainer}>
          <MonoText>Willkommen bei der Sauna Lorrainebad! Hier findest du alles Wissenswerte über unsere Sauna-Landschaft.</MonoText>
          <Text>{'\n'}</Text>
          <MonoText>Saunaspruch des Tages:</MonoText>
          {loading ? <Loading /> : <MonoText style={styles.quote}>„{data.dailyQuote.quote}“</MonoText>}
        </View>
      </ScrollView>

    </View>
  )
}

HomeScreen.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    paddingTop: 30
  },
  entryContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  entryImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginLeft: -10
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
