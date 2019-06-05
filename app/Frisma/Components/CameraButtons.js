import React, { Component } from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import { Icon } from "native-base"

const styles = StyleSheet.create({
  button: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#cd536b",
    borderRadius: 100,
  },
  cameraButton: {
    height: 80,
    width: 80,
    backgroundColor: "#B7325E",
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#cd536b"
  },
})
export class CameraButton extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.button, styles.cameraButton]}>
        <Icon name="camera" style={{ color: "#fff", fontSize: 48 }} />
      </TouchableOpacity>
    )
  }
}

export class FiltersButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button}>
        <Icon name="color-wand" style={{ color: "#fff", fontSize: 30 }} />
      </TouchableOpacity>
    )
  }
}

export class GalleryButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button}>
        <Icon name="photos" style={{ color: "#fff", fontSize: 28 }} />
      </TouchableOpacity>
    )
  }
}

export default CameraButton
