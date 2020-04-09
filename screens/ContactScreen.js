import * as React from 'react'
import { StyleSheet, Text, View, Linking } from 'react-native'
import { ScrollView, RectButton } from 'react-native-gesture-handler'
import * as WebBrowser from 'expo-web-browser'
import { VerdanaText } from '../components/StyledText'

export default function ContactScreen () {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.innerContainer}>
          <VerdanaText style={styles.contact}>Web: {
            <RectButton onPress={() => WebBrowser.openBrowserAsync('http://saunalorrainebad.ch/')}>
              <VerdanaText>saunalorrainebad.ch</VerdanaText>
            </RectButton>
          }
          </VerdanaText>
          <VerdanaText style={styles.contact}>Tel: {<Text onPress={() => Linking.openURL('tel:+41788323264')}>078 832 32 64</Text>}</VerdanaText>
          <VerdanaText style={styles.contact}>Mail: {
            <RectButton onPress={() => WebBrowser.openBrowserAsync('http://saunalorrainebad.ch/kontakt/')}>
              <VerdanaText>Kontaktformular</VerdanaText>
            </RectButton>
          }
          </VerdanaText>
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
  contact: {
    fontSize: 18,
    paddingBottom: 10
  }
})
