import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Header, Content, Container } from "native-base"
import Swiper from "react-native-swiper"
import { CameraComponent as Camera } from "./Components/Camera"
import { FiltersComponent as Filters } from "./Components/Filters"
import { GalleryComponent as Gallery } from "./Components/Gallery"

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#002b36",
    alignItems: "center",
    flex: 1
  },
  content: {
    color: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Swiper index={1} loop={false} showsPagination={false}>
          <Filters />
          <Camera />
          <Gallery/>
        </Swiper>
      </Container>
    )
  }
}
