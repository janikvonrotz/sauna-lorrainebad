import * as React from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { MonoText } from '../components/StyledText'

export default function HomeScreen () {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.entryContainer}>
          <Image
            source={require('../assets/images/logo.jpg')}
            style={styles.entryImage}
          />
        </View>
        <View style={styles.innerContainer}>
          <MonoText>Willkommen bei der Sauna Lorrainebad!</MonoText>
          <Text>{'\n'}</Text>
          <MonoText>Hier findest du alles Wissenswerte über unsere Sauna-Landschaft.</MonoText>
          <Text>{'\n'}</Text>
          <MonoText>Saunaspruch des Tages:</MonoText>
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
  }
})
