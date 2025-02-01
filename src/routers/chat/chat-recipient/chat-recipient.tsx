import classNames from 'classnames'
import { FC, useState } from 'react'
import Input from '../../../ui/input'
import Arrowmessage from '../../../ui/icon/arrow-messange'
import BtnIcon from '../../../ui/btn-cion'
import Error from '../../../ui/error'
import ChatMessage from './chat-message'
import useSendMessage from './useSendMessage'
import useFindMessange from './useFindMessange'

export interface ChatRecipientProps {
    telRecipient: number | undefined
}

export interface message {
    message: string
    isMy: boolean
}

export enum FieldsChat {
    message = 'message',
}

const ChatRecipient: FC<ChatRecipientProps> = ({ telRecipient }) => {
    const [message, setMessage] = useState<message[]>([])
    const { isReguest, errors, handleSubmit, registers } = useSendMessage({
        telRecipient,
        setMessage,
    })
    useFindMessange({ telRecipient, setMessage })
    const cl = classNames(
        'bg-panel  shrink overflow-hidden transition-[height] duration-300',
        'flex flex-col gap-4 ',
        {
            'h-full px-4 py-10 lg:px-10': telRecipient,
            'h-0': !telRecipient,
        },
    )
    return (
        <div className={cl}>
            <div className="bg-gray flex h-full flex-col-reverse overflow-auto rounded-lg p-4">
                <div className="flex flex-col gap-2">
                    {message.map((el, i) => {
                        return (
                            <ChatMessage isMy={el.isMy} key={i}>
                                {el.message}
                            </ChatMessage>
                        )
                    })}
                </div>
            </div>
            <form className="flex items-end gap-4" onSubmit={handleSubmit}>
                <div className="w-full">
                    <Input
                        placeholder="ваше сообщение"
                        disabled={isReguest}
                        type="text"
                        className="w-full"
                        isError={!!errors[FieldsChat.message]}
                        {...registers[FieldsChat.message]()}
                    />
                    {errors[FieldsChat.message] && (
                        <Error>{errors[FieldsChat.message].message}</Error>
                    )}
                </div>
                <BtnIcon disabled={isReguest}>
                    <Arrowmessage />
                </BtnIcon>
            </form>
        </div>
    )
}

export default ChatRecipient
