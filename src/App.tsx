import { HashRouter } from 'react-router-dom';
import './App.css';
import ThemeProviderContainer from './components/ThemeProviderContainer';
import Routes from './router';

function App() {
  return (
    <ThemeProviderContainer>
        <HashRouter>
          <Routes/>
        </HashRouter>
    </ThemeProviderContainer>
  )
}

export default App;
