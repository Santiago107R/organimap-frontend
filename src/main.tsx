import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './components/theme-provider';
import './index.css'
import MyApp from './MyApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <MyApp />
    </ThemeProvider>
  </StrictMode>,
)
