import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Caht from './index.ts'

const Routers: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Caht />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers
