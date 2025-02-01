import { useForm } from 'react-hook-form'
import { Dispatch, SetStateAction, useContext, useState } from 'react'
import { ContextAuth } from '../../auth/layout-auth'
import { AuthFieldName } from '../../auth/type-auth'
import { FieldsChat, message } from './chat-recipient'
import sendMessage from '../../../api/green-api/send-message'

export interface RecipientField {
    [FieldsChat.message]: string
}

interface useSendMessageProps {
    setMessage: Dispatch<SetStateAction<message[]>>
    telRecipient: number | undefined
}

const useSendMessage = ({ telRecipient, setMessage }: useSendMessageProps) => {
    const {
        register,
        handleSubmit,
        setValue,
        setError,
        formState: { errors },
    } = useForm<RecipientField>({
        defaultValues: {
            [FieldsChat.message]: '',
        },
    })
    const [isReguest, setIsReguest] = useState<boolean>(false)
    const settings = useContext(ContextAuth)
    const registers = {
        [FieldsChat.message]: () => {
            return register(FieldsChat.message, {
                required: 'Нужно заполнить',
            })
        },
    }

    const getChat = async (fields: RecipientField) => {
        setIsReguest(true)
        try {
            await sendMessage(
                {
                    idInstance: settings[AuthFieldName.idInstance],
                    apiTokenInstance: settings[AuthFieldName.token],
                    headers: {
                        'User-Agent': 'GREEN-API_POSTMAN/1.0',
                        'Content-Type': 'application/json',
                    },
                },
                {
                    chatId: telRecipient + '@c.us',
                    message: fields[FieldsChat.message],
                },
            )

            setMessage((prev) => [
                ...prev,
                { isMy: true, message: fields[FieldsChat.message] },
            ])
            setValue(FieldsChat.message, '')
            setIsReguest(false)
        } catch {
            setError(FieldsChat.message, {
                message: 'что то пошло не так',
            })
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

export default useSendMessage
