import getRequest, { GetRequestProps } from './axios-green-api'

const getSettings = async (props: Omit<GetRequestProps, 'name'>) => {
    return await getRequest({ name: 'getSettings', ...props }).get('/')
}

export default getSettings
