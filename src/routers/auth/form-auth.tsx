import Error from '../../ui/error'
import Fieldset from '../../ui/fieldset'
import Input from '../../ui/input'
import Label from '../../ui/label'
import useFormAuth, { AuthFieldName } from './useFormAuth'
import Btn from '../../ui/btn'

const FormAuth = () => {
    const { registers, handleSubmit, errors } = useFormAuth()

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start gap-8"
        >
            <Fieldset legend="GREEN-API" className="w-full">
                <Label className="w-full lg:w-1/2">
                    <span>idInstance</span>
                    <Input
                        placeholder="idInstance"
                        type="text"
                        isError={!!errors[AuthFieldName.idInstance]}
                        {...registers[AuthFieldName.idInstance]()}
                    />
                    {errors[AuthFieldName.idInstance] && (
                        <Error>
                            {errors[AuthFieldName.idInstance].message}
                        </Error>
                    )}
                </Label>
                <Label className="w-full lg:w-1/2">
                    <span>apiTokenInstance</span>
                    <Input
                        placeholder="apiTokenInstance"
                        type="text"
                        isError={!!errors[AuthFieldName.token]}
                        {...registers[AuthFieldName.token]()}
                    />
                    {errors[AuthFieldName.token] && (
                        <Error>{errors[AuthFieldName.token].message}</Error>
                    )}
                </Label>
            </Fieldset>
            <div className="flex w-full flex-col gap-4 lg:flex-row">
                <Label className="w-full lg:w-1/2">
                    <span>Номер телефона</span>
                    <Input
                        placeholder="79999999999"
                        type="tel"
                        isError={!!errors[AuthFieldName.tel]}
                        {...registers[AuthFieldName.tel]()}
                    />
                    {errors[AuthFieldName.tel] && (
                        <Error>{errors[AuthFieldName.tel].message}</Error>
                    )}
                </Label>
                <div className="w-full lg:w-1/2" aria-hidden />
            </div>
            <Btn type="submit" className="mt-4 lg:w-1/4">
                Войти
            </Btn>
        </form>
    )
}

export default FormAuth
