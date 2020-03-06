import * as React from 'react'
import { StyleSheet, Text, View, Linking } from 'react-native'
import { ScrollView, RectButton } from 'react-native-gesture-handler'
import * as WebBrowser from 'expo-web-browser'
import { MonoText } from '../components/StyledText'

export default function ContactScreen () {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.innerContainer}>
          <MonoText>Du möchtest mit uns Konakt aufnehmen? Die Empfangs-Yurte ist erreichbar unter:</MonoText>
          <Text>{'\n'}</Text>
          <MonoText onPress={() => Linking.openURL('tel:+41788323264')}>078 832 32 64</MonoText>
          <Text>{'\n'}</Text>
          <MonoText>Oder schreiben uns eine Mail:</MonoText>
          <Text>{'\n'}</Text>
          <RectButton onPress={() => WebBrowser.openBrowserAsync('http://saunalorrainebad.ch/kontakt/')}>
            <MonoText>Kontaktformular</MonoText>
          </RectButton>
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
  }
})
