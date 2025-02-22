import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../public/styles.css'
import Routers from './routers/index.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Routers></Routers>
    </StrictMode>,
)
