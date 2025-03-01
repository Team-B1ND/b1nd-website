import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ThemeProviderContainer from './components/ThemeProviderContainer';
import Routes from './router';

function App() {
  return (
    <ThemeProviderContainer>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </ThemeProviderContainer>
  )
}

export default App;
