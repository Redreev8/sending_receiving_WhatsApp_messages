import classNames from 'classnames'
import { ButtonHTMLAttributes, forwardRef } from 'react'

const Btn = forwardRef<
    HTMLButtonElement,
    ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
    const cl = classNames(
        className,
        'bg-gray text-white py-2 px-4 rounded-full',
        'transition-[background-color, opacity] duration-300',
        'hover:bg-green focus:opacity-50',
    )
    return (
        <button className={cl} {...props} ref={ref}>
            {children}
        </button>
    )
})

export default Btn
