import React from "react"
import { AppContainer } from "./AppStyles"
import { Home } from "./Sections/Home/Home"
import { Offer } from "./Sections/Offer/Offer"
import Theme from "./styles/theme"

function App() {
  return (
    <Theme>
      <AppContainer>
        <Home />
        <Offer />
      </AppContainer>
    </Theme>
  )
}

export default App
