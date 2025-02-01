import axios, { CreateAxiosDefaults } from 'axios'

export interface GetRequestProps extends Omit<CreateAxiosDefaults, 'baseURL'> {
    name: string
    idInstance: string
    apiTokenInstance: string
}

const getRequest = ({
    name,
    idInstance,
    apiTokenInstance,
    ...props
}: GetRequestProps) => {
    return axios.create({
        baseURL: `https://1103.api.green-api.com/waInstance${idInstance}/${name}/${apiTokenInstance}`,
        ...props,
    })
}

export default getRequest
