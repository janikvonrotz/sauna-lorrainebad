import * as React from 'react'
import { Image, StyleSheet, View, RefreshControl } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { DAILY_QUOTE } from '../components/Queries'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { useQuery } from '@apollo/react-hooks'
import { VerdanaText } from '../components/StyledText'

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
          {loading ? <Loading /> : <VerdanaText style={styles.quote}>{data.dailyQuote.quote}</VerdanaText>}
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
    paddingTop: 10
  },
  entryContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  entryImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginLeft: -10
  },
  innerContainer: {
    alignItems: 'center',
    marginHorizontal: 30
  },
  quote: {
    fontSize: 18,
    marginBottom: 10,
    maxWidth: 500,
    textAlign: 'center'
  }
})
