import { createContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import Container from '../../ui/container'
import { AuthField } from './useFormAuth'
import { AuthFieldName } from './type-auth'

export const ContextAuth = createContext<AuthField & { setSettings: (fields: AuthField) => void }>({
    [AuthFieldName.token]: '',
    [AuthFieldName.idInstance]: '',
    [AuthFieldName.tel]: '',
    setSettings: () => {}
})

const LayoutAuth = () => {
    const [settings, setSettings] = useState<AuthField>({
        [AuthFieldName.idInstance]: '',
        [AuthFieldName.token]: '',
        [AuthFieldName.tel]: '',
    })
    let navigate = useNavigate();
    const changeSettings = (fields: AuthField) => {
        setSettings(() => fields)
        localStorage.setItem(AuthFieldName.idInstance, fields[AuthFieldName.idInstance])
        localStorage.setItem(AuthFieldName.token, fields[AuthFieldName.token])
        localStorage.setItem(AuthFieldName.tel, fields[AuthFieldName.tel])
    }
    useEffect(() => {
        setSettings(() => {
            return {
                ...{
                    [AuthFieldName.idInstance]: localStorage.getItem(AuthFieldName.idInstance) ?? '',
                    [AuthFieldName.token]: localStorage.getItem(AuthFieldName.idInstance) ?? '',
                    [AuthFieldName.tel]: localStorage.getItem(AuthFieldName.idInstance) ?? '',
                }
            }
        })
    }, [])

    useEffect(() => {
        if (
            settings[AuthFieldName.idInstance] ||
            settings[AuthFieldName.token] ||
            settings[AuthFieldName.tel]
        ) {
            navigate('/chat')
            return 
        }
        navigate('/auth')
    }, [settings])

    return (
        <ContextAuth.Provider value={{ ...settings, setSettings: changeSettings }}>
            <Container>
                <Outlet />
            </Container>
        </ContextAuth.Provider>
    )
}

export default LayoutAuth
