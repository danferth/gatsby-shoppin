import React from "react"
import Header from "./header"
import Footer from "./footer"
import Digits from "./digits"
import Maths from "./maths"
import Screen from "./screen"
import Tally from "./tally"

const Layout = props => {
  return (
    <div>
      <Header title={props.title} description={props.description}></Header>
      <div className="App">
        <Screen></Screen>
        <Digits></Digits>
        <Maths></Maths>
        <Tally></Tally>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Layout
