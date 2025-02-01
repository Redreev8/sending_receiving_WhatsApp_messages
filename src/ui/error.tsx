import classNames from 'classnames'
import { AllHTMLAttributes, forwardRef } from 'react'

const Error = forwardRef<HTMLSpanElement, AllHTMLAttributes<HTMLSpanElement>>(
    ({ className, children, ...props }, ref) => {
        const cl = classNames(className, 'text-error')

        return (
            <span className={cl} {...props} ref={ref}>
                {children}
            </span>
        )
    },
)

export default Error
