import getRequest, { GetRequestProps } from './axios-green-api'

const deleteNotification = async (
    props: Omit<GetRequestProps, 'name'>,
    id: string,
) => {
    return await getRequest({ name: 'deleteNotification', ...props }).delete(
        '/' + id,
    )
}

export default deleteNotification
