import FormGetRecipient from './form-get-recipient'

const Chat = () => {
    return (
        <div className="relative flex flex-col gap-4">
            <FormGetRecipient />
            <h1 className="text-midnight absolute top-0 left-0 z-0 text-3xl font-bold underline">
                Chat
            </h1>
        </div>
    )
}

export default Chat
