import getRequest, { GetRequestProps } from './axios-green-api'

interface Body {
    chatId: string
    message: string
}

const sendMessage = async (
    props: Omit<GetRequestProps, 'name'>,
    body: Body,
) => {
    return await getRequest({ name: 'sendMessage', ...props }).post('/', body)
}

export default sendMessage
