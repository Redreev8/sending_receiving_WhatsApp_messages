import { useForm } from 'react-hook-form'

export enum AuthFieldName {
    idInstance = 'idInstance',
    token = 'apiTokenInstance',
    tel = 'tel',
}

export interface AuthField {
    [AuthFieldName.idInstance]: string
    [AuthFieldName.token]: string
    [AuthFieldName.tel]: string
}

const useAuth = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AuthField>({
        defaultValues: {
            [AuthFieldName.idInstance]: '',
            [AuthFieldName.token]: '',
            [AuthFieldName.tel]: '',
        },
    })

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
                        'номер телефона должен содержать 11 цифр (без пробелов)',
                },
            })
        },
    }
    return {
        registers,
        handleSubmit: handleSubmit(() => {}),
        errors,
    }
}

export default useAuth
