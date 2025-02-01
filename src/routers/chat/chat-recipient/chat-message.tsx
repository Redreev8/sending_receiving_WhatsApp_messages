import classNames from 'classnames'
import { FC, ReactNode } from 'react'

interface ChatMessageProps {
    children: ReactNode
    isMy: boolean
}

const ChatMessage: FC<ChatMessageProps> = ({ isMy, children }) => {
    const cl = classNames('py-1 px-2 rounded-sm', {
        'bg-my-message ml-auto': isMy,
        'bg-panel mr-auto': !isMy,
    })
    return <div className={cl}>{children}</div>
}

export default ChatMessage
