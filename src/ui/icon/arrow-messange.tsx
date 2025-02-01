import { forwardRef, SVGLineElementAttributes } from 'react'
import classNames from 'classnames'

const ArrowMessange = forwardRef<
    SVGSVGElement,
    SVGLineElementAttributes<SVGSVGElement> & { title?: string }
>(({ className, title = 'отправить', ...props }, ref) => {
    const cl = classNames(className, 'w-full h-full')
    return (
        <svg
            className={cl}
            viewBox="0 0 24 24"
            version="1.1"
            enableBackground="new 0 0 24 24"
            {...props}
            ref={ref}
        >
            <title>{title}</title>
            <path
                fill="currentColor"
                d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"
            ></path>
        </svg>
    )
})

export default ArrowMessange
