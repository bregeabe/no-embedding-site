import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './theme.css'
import Frame from './components/frame.component.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Frame />
  </StrictMode>,
)
