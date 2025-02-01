import getRequest, { GetRequestProps } from './axios-green-api'

interface Body {
    phoneNumber: number
}

const checkWhatsapp = async (
    props: Omit<GetRequestProps, 'name'>,
    body: Body,
) => {
    return await getRequest({ name: 'checkWhatsapp', ...props }).post('/', body)
}

export default checkWhatsapp
