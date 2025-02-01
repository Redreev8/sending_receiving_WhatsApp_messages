import { Outlet } from 'react-router'
import Container from '../../ui/container'

const LayoutAuth = () => {
    return (
        <Container>
            <Outlet />
        </Container>
    )
}

export default LayoutAuth
