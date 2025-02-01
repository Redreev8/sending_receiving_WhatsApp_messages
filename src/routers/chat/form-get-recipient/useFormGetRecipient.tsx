import { useForm } from 'react-hook-form'
import { RecipientFieldName } from './context-get-recipient'
import { useContext, useState } from 'react'
import checkWhatsapp from '../../../api/green-api/check-whatsapp'
import { ContextAuth } from '../../auth/layout-auth'
import { AuthFieldName } from '../../auth/type-auth'
import { FormGetRecipientProps } from './form-get-recipient'

export interface RecipientField {
    [RecipientFieldName.telRecipient]: string
}

const useFormGetRecipient = ({ setTelRecipient }: FormGetRecipientProps) => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<RecipientField>({
        defaultValues: {
            [RecipientFieldName.telRecipient]: '79527370002',
        },
    })
    const [isReguest, setIsReguest] = useState<boolean>(false)
    const settings = useContext(ContextAuth)
    const registers = {
        [RecipientFieldName.telRecipient]: () => {
            return register(RecipientFieldName.telRecipient, {
                required: 'Нужно заполнить поле',
                pattern: {
                    value: /^7\w{10}$/,
                    message:
                        'номер телефона должен содержать 11 цифр (без пробелов) по шаблону 7__________',
                },
            })
        },
    }

    const getChat = async (fields: RecipientField) => {
        setIsReguest(true)
        try {
            const { data } = await checkWhatsapp(
                {
                    idInstance: settings[AuthFieldName.idInstance],
                    apiTokenInstance: settings[AuthFieldName.token],
                },
                { phoneNumber: +fields[RecipientFieldName.telRecipient] },
            )
            if (!data.existsWhatsapp) {
                setError(RecipientFieldName.telRecipient, {
                    message: 'пользователь не найден',
                })
                setIsReguest(false)
                return
            }
            setTelRecipient(+fields[RecipientFieldName.telRecipient])
            setIsReguest(false)
        } catch {
            setIsReguest(false)
        }
    }

    return {
        isReguest,
        errors,
        handleSubmit: handleSubmit(getChat),
        registers,
    }
}

export default useFormGetRecipient
