import React from "react"
import {
  AppContainer,
  BottomContainer,
  Pathbackground,
  SvgbackgroundBottom,
  SvgbackgroundTop,
  Wave,
  WaveTop,
} from "./AppStyles"
import { About } from "./Sections/About/About"
import { Home } from "./Sections/Home/Home"
import { Offer } from "./Sections/Offer/Offer"
import Theme from "./styles/theme"

function App() {
  return (
    <Theme>
      <AppContainer>
        <Home />
        <Offer />
        <BottomContainer>
          <WaveTop>
            <SvgbackgroundTop
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <Pathbackground d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></Pathbackground>
            </SvgbackgroundTop>
          </WaveTop>
          <Wave>
            <SvgbackgroundBottom
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <Pathbackground d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></Pathbackground>
            </SvgbackgroundBottom>
          </Wave>
          <About />
        </BottomContainer>
      </AppContainer>
    </Theme>
  )
}

export default App
