import classNames from 'classnames'
import { ButtonHTMLAttributes, forwardRef } from 'react'

const BtnIcon = forwardRef<
    HTMLButtonElement,
    ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, disabled, ...props }, ref) => {
    const cl = classNames(
        className,
        'w-10 h-10 text-white p-1 rounded-full',
        'transition-[color, opacity] duration-300',
        'hover:text-green focus:opacity-50',
        {
            'opacity-20': disabled,
        },
    )
    return (
        <button className={cl} disabled={disabled} {...props} ref={ref}>
            {children}
        </button>
    )
})

export default BtnIcon
