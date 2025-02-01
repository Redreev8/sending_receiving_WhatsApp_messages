import classNames from 'classnames'
import { FC, ReactNode } from 'react'

interface ChatMessangeProps {
    children: ReactNode
    isMy: boolean
}

const ChatMessange: FC<ChatMessangeProps> = ({ isMy, children }) => {
    const cl = classNames('py-1 px-2 rounded-sm', {
        'bg-my-messange ml-auto': isMy,
        'bg-panel mr-auto': !isMy,
    })
    return <div className={cl}>{children}</div>
}

export default ChatMessange
