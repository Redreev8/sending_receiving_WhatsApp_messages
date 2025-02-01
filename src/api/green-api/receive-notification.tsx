import getRequest, { GetRequestProps } from './axios-green-api'

const receiveNotification = async (props: Omit<GetRequestProps, 'name'>) => {
    return await getRequest({ name: 'ReceiveNotification', ...props }).get('/')
}

export default receiveNotification
