import classNames from "classnames/bind"

import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({children, small, large, uploading, rounded}){
    let Comp = 'button'

    const classes = cx('wrapper',{
        small,
        large,
        uploading,
        rounded
    })

    return (
        <Comp className={classes} >
            <span>{children}</span>
        </Comp>
    )
}

export default Button;