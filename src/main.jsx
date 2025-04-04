import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const container = document.getElementById('root');

// Check if a root already exists and reuse it
if (!container._root) {
  container._root = createRoot(container);
}

container._root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
