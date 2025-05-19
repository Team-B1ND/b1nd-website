import { HashRouter } from 'react-router-dom'
import './App.css'
import ThemeProviderContainer from './components/ThemeProviderContainer'
import Routes from './router'
import { QueryClient, QueryClientProvider } from 'react-query';
import { useEffect, useState } from 'react';



function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            retryOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
          },
        },
      })
  );

  useEffect(() => {
    if (window.location.pathname === '/' && !window.location.hash) {
      window.location.replace('/#/');
    }
  }, []);

  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProviderContainer>
        <HashRouter>
          <Routes />
        </HashRouter>
      </ThemeProviderContainer>
    </QueryClientProvider>
  )
}

export default App
