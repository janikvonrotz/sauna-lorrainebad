import * as React from 'react'
import { Text } from 'react-native'

export function MonoText (props) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
}

export function VerdanaText (props) {
  return <Text {...props} style={[props.style, { fontFamily: 'Verdana' }]} />
}
