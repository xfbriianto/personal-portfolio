import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './App.tsx';
import './index.css';

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-out-cubic'
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);