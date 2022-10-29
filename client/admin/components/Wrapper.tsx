import { StrictMode } from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import { Router } from './Router';

const queryClient = new QueryClient();

const Wrapper = () => {
  return (
    <StrictMode>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Router>
            <App />
          </Router>
        </QueryClientProvider>
      </RecoilRoot>
    </StrictMode>
  );
};

export default Wrapper;
