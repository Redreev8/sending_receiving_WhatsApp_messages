import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Caht from './chat'
import Auth from './auth'

const Routers: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Auth />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/caht" element={<Caht />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers
