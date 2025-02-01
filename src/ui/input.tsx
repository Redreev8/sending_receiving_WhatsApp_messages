import classNames from 'classnames'
import { forwardRef, InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    isError?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, isError, disabled, ...props }, ref) => {
        const cl = classNames(
            className,
            'bg-gray py-2 px-3 rounded-lg',
            'placeholder:text-placeholder',
            'border focus:outline-none',
            'transition-[background-color, opacity, caret-color] duration-300',
            {
                'border-error hover:border-error focus:border-error caret-error':
                    isError,
                'border-gray hover:border-green focus:border-green caret-green':
                    !isError,
                'opacity-20': disabled,
            },
        )
        return <input disabled={disabled} className={cl} ref={ref} {...props} />
    },
)

export default Input
