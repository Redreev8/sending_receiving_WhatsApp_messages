import getRequest, { GetRequestProps } from './axios-green-api'

const setSettingsInstas = async (props: Omit<GetRequestProps, 'name'>) => {
    return await getRequest({ name: 'SetSettings', ...props }).post('/', {
        outgoingWebhook: 'yes',
        stateWebhook: 'yes',
        incomingWebhook: 'yes',
    })
}

export default setSettingsInstas
