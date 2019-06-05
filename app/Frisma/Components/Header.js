import React from "react"
import { View, Text } from "react-native"
import { H1 } from "native-base"
import { Constants } from "expo"

const Header = props => {
  return (
    <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
      <H1 style={{ fontWeight: "900", padding: 20 }}>{props.title}</H1>
    </View>
  )
}

export default Header
