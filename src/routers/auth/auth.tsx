import Panel from '../../ui/panel'
import FormAuth from './form-auth'

const Auth = () => {
    return (
        <Panel>
            <h1 className="mb-8 text-4xl">Авторизация</h1>
            <FormAuth />
        </Panel>
    )
}

export default Auth
