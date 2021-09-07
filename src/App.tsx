import React from "react"
import { AppContainer } from "./AppStyles"
import { Home } from "./Sections/Home/Home"
import Theme from "./styles/theme"

function App() {
  return (
    <Theme>
      <AppContainer>
        <Home />
      </AppContainer>
    </Theme>
  )
}

export default App
