import BtnIcon from '../../../ui/btn-cion'
import Error from '../../../ui/error'
import ArrowMessange from '../../../ui/icon/arrow-messange'
import Input from '../../../ui/input'
import Label from '../../../ui/label'
import { RecipientFieldName } from './context-get-recipient'
import useFormGetRecipient from './useFormGetRecipient'

const FormGetRecipient = () => {
    const { isReguest, errors, handleSubmit, registers } = useFormGetRecipient()
    return (
        <div className="bg-panel relative z-1 px-4 py-10 lg:px-10">
            <form className="flex items-end gap-4" onSubmit={handleSubmit}>
                <Label className="w-full">
                    <span>Номер телефона</span>
                    <Input
                        disabled={isReguest}
                        placeholder="79999999999"
                        type="tel"
                        isError={!!errors[RecipientFieldName.telRecipient]}
                        {...registers[RecipientFieldName.telRecipient]()}
                    />
                    {errors[RecipientFieldName.telRecipient] && (
                        <Error>
                            {errors[RecipientFieldName.telRecipient].message}
                        </Error>
                    )}
                </Label>
                <BtnIcon>
                    <ArrowMessange title="запросить чат" />
                </BtnIcon>
            </form>
        </div>
    )
}

export default FormGetRecipient
