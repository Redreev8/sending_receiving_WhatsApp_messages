import { Dispatch, SetStateAction, useContext, useEffect } from 'react'
import { message } from './chat-recipient'
import receiveNotification from '../../../api/green-api/receive-notification'
import { ContextAuth } from '../../auth/layout-auth'
import { AuthFieldName } from '../../auth/type-auth'
import deleteNotification from '../../../api/green-api/delete-notification'

interface useFindMessange {
    setMessage: Dispatch<SetStateAction<message[]>>
    telRecipient: number | undefined
}

const useFindMessange = ({ telRecipient, setMessage }: useFindMessange) => {
    const settings = useContext(ContextAuth)

    const getMesange = async () => {
        if (!telRecipient) return
        const config = {
            idInstance: settings[AuthFieldName.idInstance],
            apiTokenInstance: settings[AuthFieldName.token],
        }
        try {
            const { data } = await receiveNotification(config)
            console.log(data)
            if (!data) {
                setTimeout(getMesange, 5000)
                return
            }
            if (
                !data.body.senderData ||
                !data.body.senderData.chatId.includes(telRecipient) ||
                !data.body.messageData.textMessageData
            ) {
                setTimeout(getMesange, 5000)
                await deleteNotification(config, data.receiptId)
                return
            }
            setMessage((prev) => [
                ...prev,
                {
                    isMy: false,
                    message: data.body.messageData.textMessageData.textMessage,
                },
            ])
            await deleteNotification(config, data.receiptId)
            setTimeout(getMesange, 5000)
        } catch {
            setTimeout(getMesange, 60 * 60 * 1000)
        }
    }

    useEffect(() => {
        getMesange()
    }, [telRecipient])
}

export default useFindMessange
