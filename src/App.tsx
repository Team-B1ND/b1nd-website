import { BrowserRouter } from 'react-router-dom'
import './App.css'
import ThemeProviderContainer from './components/ThemeProviderContainer'
import Routes from './router'
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';



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

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProviderContainer>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProviderContainer>
    </QueryClientProvider>
  )
}

export default App
