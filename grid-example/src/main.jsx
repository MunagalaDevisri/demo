import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Comp1 from './Comp1.jsx'
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Comp1/>
  </StrictMode>,
)
