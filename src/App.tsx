import { BrowserRouter } from 'react-router-dom'
import './App.css'
import ThemeProviderContainer from './components/Common/ThemeProviderContainer'
import Routes from './router'
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import { B1ndToastContainer } from '@b1nd/b1nd-toastify';



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
      <B1ndToastContainer autoClose={1000} limit={1} />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProviderContainer>
    </QueryClientProvider>
  )
}

export default App
