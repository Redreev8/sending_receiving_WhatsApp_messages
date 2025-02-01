import getRequest, { GetRequestProps } from './axios-green-api'

const receiveNotification = async (props: Omit<GetRequestProps, 'name'>) => {
    return await getRequest({ name: 'receiveNotification', ...props }).get('/')
}

export default receiveNotification
