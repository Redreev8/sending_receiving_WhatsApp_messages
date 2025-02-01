import classNames from 'classnames'
import { AreaHTMLAttributes, forwardRef } from 'react'

const Panel = forwardRef<HTMLDivElement, AreaHTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => {
        const cl = classNames(className, 'bg-panel px-4 py-10 lg:px-10')
        return (
            <div className={cl} {...props} ref={ref}>
                {children}
            </div>
        )
    },
)

export default Panel
