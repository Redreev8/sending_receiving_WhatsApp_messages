import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Caht from './chat'
import Auth from './auth'
import LayoutAuth from './auth/layout-auth'

const Routers: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LayoutAuth />}>
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/caht" element={<Caht />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers
