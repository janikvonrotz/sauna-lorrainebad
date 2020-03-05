import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import * as WebBrowser from 'expo-web-browser'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import { ALL_NEWS } from '../components/Queries'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { useQuery } from '@apollo/react-hooks'
import Moment from 'moment'

export default function LinksScreen () {
  const { loading, error, data } = useQuery(ALL_NEWS)

  if (loading) return <Loading />
  if (error) return <Error />

  // Intialize moment for date formatting
  Moment.locale('de')

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

      {data.allNews.map(item => (
        <OptionButton
          key={item._id}
          icon='md-information-circle-outline'
          label={`${item.title} (${Moment(item.date).format('Do MMMM YYYY')})`}
          onPress={() => WebBrowser.openBrowserAsync(item.link)}
        />
      ))}
    </ScrollView>
  )
}

function OptionButton ({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color='rgba(0,0,0,0.35)' />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  contentContainer: {
    paddingTop: 15
  },
  optionIconContainer: {
    marginRight: 12
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed'
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1
  }
})
