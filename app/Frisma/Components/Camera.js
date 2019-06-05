import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Camera, Permissions } from "expo"

export class CameraComponent extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({ hasCameraPermission: status === "granted" })
  }

  render() {
    const { hasCameraPermission } = this.state
    if (hasCameraPermission === null) {
      return <View />
    } else if (hasCameraPermission === false) {
      return <Text>No access to Camera</Text>
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera type={this.state.type} style={{ flex: 1 }} />
        </View>
      )
      return <Camera />
    }
    return (
      <View style={styles.container}>
        <Text> Camera </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})

export default CameraComponent
