import classNames from 'classnames'
import { ButtonHTMLAttributes, forwardRef } from 'react'

const Btn = forwardRef<
    HTMLButtonElement,
    ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, disabled, ...props }, ref) => {
    const cl = classNames(
        className,
        'bg-gray text-white py-2 px-4 rounded-full',
        'transition-[background-color, opacity] duration-300',
        'hover:bg-green focus:opacity-50',
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

export default Btn
