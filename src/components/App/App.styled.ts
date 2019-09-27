import styled, { createGlobalStyle } from "styled-components"
import { Grid } from "components/commons"

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #root {
    height: inherit;
  }
`

export const MainLayout = styled.div`
  padding: 1rem;
  height: 100%;
`
export const Col = styled(Grid.Col)`
  height: 100%;
`
