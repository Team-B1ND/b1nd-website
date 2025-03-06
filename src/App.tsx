import { HashRouter, Router } from 'react-router-dom'
import './App.css'
import ThemeProviderContainer from './components/ThemeProviderContainer'
import Routes from './router'
import PageTemplate from './components/PageTemplate'

function App() {
  return (
    <ThemeProviderContainer>
      <Routes />
    </ThemeProviderContainer>
  )
}

export default App
