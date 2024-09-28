import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


import styles from "./AccountItem.module.scss"

const cx = classNames.bind(styles)

function AccountItem({data}){
    return (
        <Link to={`/${data.nickname}`} className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.avatar} alt="" />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>{data.nickname}</span>
                    {data.tick&&<FontAwesomeIcon className={cx('checkIcon')} icon={faCheckCircle}/>}
                </h4>
                <span className={cx('name')}>{data.full_name}</span>
            </div>
        </Link>
    )
}

export default AccountItem;