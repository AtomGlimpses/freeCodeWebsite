import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './base.css'
import './styles/tailwind.css';
import Router from "./router/index";
import { BrowserRouter } from 'react-router-dom'
import "amfe-flexible";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>,
)
