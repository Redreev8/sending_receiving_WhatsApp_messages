import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Chat from './chat'
import Auth from './auth'
import LayoutAuth from './auth/layout-auth'

const Routers: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LayoutAuth />}>
                    <Route path="/" element={<Auth />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/chat" element={<Chat />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers
