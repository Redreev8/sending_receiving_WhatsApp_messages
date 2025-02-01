import { useState } from 'react'
import FormGetRecipient from './form-get-recipient'
import ChatRecipient from './chat-recipient'

const Chat = () => {
    const [telRecipient, setTelRecipient] = useState<number | undefined>()
    return (
        <div className="relative flex h-screen flex-col gap-4">
            <FormGetRecipient setTelRecipient={setTelRecipient} />
            <h1 className="text-midnight absolute top-0 left-0 z-0 text-3xl font-bold underline">
                Chat
            </h1>
            <ChatRecipient telRecipient={telRecipient} />
        </div>
    )
}

export default Chat
