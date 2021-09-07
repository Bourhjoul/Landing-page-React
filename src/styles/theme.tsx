import { ThemeProvider } from "styled-components"
import React from "react"
import theme from "../theme/default"
import GlobalStyles from "./globals"

const Theme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)

export default Theme
