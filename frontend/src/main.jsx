import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import './styles/navbar.css'
import './styles/mediaGrid.css'
import './styles/popUp.css'
import './styles/singlePage.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
