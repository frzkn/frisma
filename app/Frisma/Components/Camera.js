import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Camera, Permissions } from "expo"
import {CameraButton, FiltersButton, GalleryButton} from './CameraButtons'
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
    } else {
      return hasCameraPermission ? (
        <View style={{ flex: 1 }}>
          <Camera
            type={this.state.type}
            style={{ flex: 1, justifyContent: "flex-end" }}
          >
            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "flex-end" }}>
              <FiltersButton/>
              <CameraButton/>
              <GalleryButton/>
            </View>
          </Camera>
        </View>
      ) : (
        <Text>No access to Camera</Text>
      )
    }
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
