import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyle, globalStyles } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  globalStyles()

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
