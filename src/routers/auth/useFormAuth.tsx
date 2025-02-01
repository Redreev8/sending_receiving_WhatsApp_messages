import { useForm } from 'react-hook-form'
import getSettings from '../../api/green-api/get-settings'
import { useContext, useState } from 'react'
import { ContextAuth } from './layout-auth'
import { AuthFieldName } from './type-auth'
import setSettingsInstas from '../../api/green-api/set-settings'

export interface AuthField {
    [AuthFieldName.idInstance]: string
    [AuthFieldName.token]: string
    [AuthFieldName.tel]: string
}

const useAuth = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<AuthField>({
        defaultValues: {
            [AuthFieldName.idInstance]: '',
            [AuthFieldName.token]: '',
            [AuthFieldName.tel]: '',
        },
    })
    const [isReguest, setIsReguest] = useState<boolean>(false)
    const { setSettings } = useContext(ContextAuth)
    const registers = {
        [AuthFieldName.idInstance]: () => {
            return register(AuthFieldName.idInstance, {
                required: 'Нужно заполнить поле',
            })
        },
        [AuthFieldName.token]: () => {
            return register(AuthFieldName.token, {
                required: 'Нужно заполнить поле',
            })
        },
        [AuthFieldName.tel]: () => {
            return register(AuthFieldName.tel, {
                required: 'Нужно заполнить поле',
                pattern: {
                    value: /^7\w{10}$/,
                    message:
                        'номер телефона должен содержать 11 цифр (без пробелов) по шаблону 7__________',
                },
            })
        },
    }

    const Auth = async (fieldsValue: AuthField) => {
        setIsReguest(true)
        try {
            const { data } = await getSettings({
                idInstance: fieldsValue[AuthFieldName.idInstance],
                apiTokenInstance: fieldsValue[AuthFieldName.token],
            })
            if (!data.wid.includes(fieldsValue[AuthFieldName.tel])) {
                setError(AuthFieldName.tel, {
                    message: 'неверный номер телефона',
                })
                setIsReguest(false)
                return
            }
            await setSettingsInstas({
                idInstance: fieldsValue[AuthFieldName.idInstance],
                apiTokenInstance: fieldsValue[AuthFieldName.token],
            })
            setSettings(fieldsValue)
            setIsReguest(false)
        } catch {
            setError(AuthFieldName.idInstance, {
                message: 'неверный idInstance',
            })
            setError(AuthFieldName.token, {
                message: 'неверный token',
            })
            setIsReguest(false)
        }
    }

    return {
        registers,
        isReguest,
        handleSubmit: handleSubmit(Auth),
        errors,
    }
}

export default useAuth
