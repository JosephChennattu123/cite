import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { AppProvider } from '@/providers/app';
import { AppRoutes } from '@/routes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  </StrictMode>
);
