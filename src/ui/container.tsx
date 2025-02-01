import { AreaHTMLAttributes, FC } from 'react'
import classNames from 'classnames'

const Container: FC<AreaHTMLAttributes<HTMLDivElement>> = ({
    className,
    children,
    ...props
}) => {
    const cl = classNames(
        className,
        'max-w-[1600px] w-full mx-auto px-4 lg:px-10',
    )
    return (
        <div className={cl} {...props}>
            {children}
        </div>
    )
}

export default Container
