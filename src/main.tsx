import { createRoot } from 'react-dom/client';

import './index.css';
import { SessionProvider } from 'store/context';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <SessionProvider>
    <App />
  </SessionProvider>
);
