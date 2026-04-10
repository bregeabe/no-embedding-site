import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './theme.css'
import Frame from './components/frame.component.jsx'
import Home from './components/screens/home/home.jsx'
import LanguagesPage from './components/screens/languages/LanguagesPage.jsx'
import LiteraturePage from './components/screens/literature/LiteraturePage.jsx'
import InstitutionsPage from './components/screens/institutions/InstitutionsPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frame />}>
          <Route index element={<Home />} />
          <Route path="languages" element={<LanguagesPage />} />
          <Route path="literature" element={<LiteraturePage />} />
          <Route path="institutions" element={<InstitutionsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
