import classNames from 'classnames'
import { FC, useRef, useState } from 'react'
import Input from '../../../ui/input'
import ArrowMessange from '../../../ui/icon/arrow-messange'
import BtnIcon from '../../../ui/btn-cion'
import ChatMessange from './chat-messange'

export interface ChatRecipientProps {
    telRecipient: number | undefined
}

export interface Messange {
    messange: string
    isMy: boolean
}

const ChatRecipient: FC<ChatRecipientProps> = ({ telRecipient }) => {
    const [messange] = useState<Messange[]>(
        Array.from({ length: 40 }, (_, i) => {
            return {
                messange: `${i}`,
                isMy: i % 2 === 0,
            }
        }),
    )
    const refChat = useRef<HTMLDivElement>(null)
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
            <div
                ref={refChat}
                className="bg-gray flex h-full flex-col-reverse overflow-auto rounded-lg p-4"
            >
                <div className="flex flex-col gap-2">
                    {messange.map((el, i) => {
                        return (
                            <ChatMessange isMy={el.isMy} key={i}>
                                {el.messange}
                            </ChatMessange>
                        )
                    })}
                </div>
            </div>
            <form className="flex items-end gap-4">
                <div className="w-full">
                    <Input
                        placeholder="ваше сообщение"
                        type="text"
                        className="w-full"
                    />
                </div>
                <BtnIcon>
                    <ArrowMessange />
                </BtnIcon>
            </form>
        </div>
    )
}

export default ChatRecipient
