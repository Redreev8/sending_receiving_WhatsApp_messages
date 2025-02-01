import classNames from 'classnames'
import { AreaHTMLAttributes, forwardRef, ReactNode } from 'react'

interface FieldsetProps extends AreaHTMLAttributes<HTMLFieldSetElement> {
    legend: ReactNode
}

const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(
    ({ legend, className, children, ...props }, ref) => {
        const cl = classNames('flex flex-col lg:flex-row gap-4 ', className)
        return (
            <fieldset className={cl} {...props} ref={ref}>
                <legend className="mb-4 text-2xl">{legend}</legend>
                {children}
            </fieldset>
        )
    },
)

export default Fieldset
