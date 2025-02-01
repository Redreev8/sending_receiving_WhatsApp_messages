import { Dispatch, FC, SetStateAction } from 'react'
import BtnIcon from '../../../ui/btn-cion'
import Error from '../../../ui/error'
import ArrowMessange from '../../../ui/icon/arrow-messange'
import Input from '../../../ui/input'
import Label from '../../../ui/label'
import { RecipientFieldName } from './type'
import useFormGetRecipient from './useFormGetRecipient'
import Panel from '../../../ui/panel'

export interface FormGetRecipientProps {
    setTelRecipient: Dispatch<SetStateAction<number | undefined>>
}

const FormGetRecipient: FC<FormGetRecipientProps> = ({ setTelRecipient }) => {
    const { isReguest, errors, handleSubmit, registers } = useFormGetRecipient({
        setTelRecipient,
    })
    return (
        <Panel className="relative z-1">
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
                <BtnIcon disabled={isReguest}>
                    <ArrowMessange title="запросить чат" />
                </BtnIcon>
            </form>
        </Panel>
    )
}

export default FormGetRecipient
